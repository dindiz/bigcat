import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Radio, AlertTriangle, RefreshCw, Send, CheckCircle2, Zap, Wifi } from 'lucide-react';

interface TacticalNode {
  id: string;
  name: string;
  type: 'Manpack' | 'Vehicle' | 'Base Station' | 'Drone Relay';
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage
  hopRate: number; // hops per second
  powerDbm: number;
  battery: number;
  isJammed: boolean;
  activeLinks: string[];
}

export const InteractiveManetVisualizer: React.FC = () => {
  const [nodes, setNodes] = useState<TacticalNode[]>([
    { id: 'N1', name: 'Command Base (IIT-M)', type: 'Base Station', x: 20, y: 30, hopRate: 10000, powerDbm: 37, battery: 100, isJammed: false, activeLinks: ['N2', 'N3'] },
    { id: 'N2', name: 'Forward Squad Alpha', type: 'Manpack', x: 45, y: 22, hopRate: 10000, powerDbm: 30, battery: 88, isJammed: false, activeLinks: ['N1', 'N4', 'N5'] },
    { id: 'N3', name: 'Tactical Patrol Bravo', type: 'Manpack', x: 28, y: 72, hopRate: 10000, powerDbm: 30, battery: 92, isJammed: false, activeLinks: ['N1', 'N6'] },
    { id: 'N4', name: 'Armored Convoy 1', type: 'Vehicle', x: 75, y: 35, hopRate: 10000, powerDbm: 43, battery: 98, isJammed: false, activeLinks: ['N2', 'N5'] },
    { id: 'N5', name: 'Airborne Relay Drone', type: 'Drone Relay', x: 60, y: 65, hopRate: 10000, powerDbm: 27, battery: 74, isJammed: false, activeLinks: ['N2', 'N4', 'N6'] },
    { id: 'N6', name: 'Border Post Delta', type: 'Base Station', x: 80, y: 80, hopRate: 10000, powerDbm: 37, battery: 95, isJammed: false, activeLinks: ['N3', 'N5'] },
  ]);

  const [selectedNodeId, setSelectedNodeId] = useState<string>('N2');
  const [jammerActive, setJammerActive] = useState<boolean>(false);
  const [activePackets, setActivePackets] = useState<{ id: number; from: string; to: string; progress: number }[]>([]);
  const [currentHopChannel, setCurrentHopChannel] = useState<number>(142.5);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  // Fast Frequency Hopping animation simulation
  useEffect(() => {
    const hopTimer = setInterval(() => {
      // Random hop channel in 30–512 MHz VHF/UHF tactical band
      const randomFreq = 30 + Math.random() * (512 - 30);
      setCurrentHopChannel(Math.round(randomFreq * 10) / 10);
    }, 100);

    return () => clearInterval(hopTimer);
  }, []);

  // Packet routing animation
  useEffect(() => {
    const packetTimer = setInterval(() => {
      setActivePackets((prev) => {
        const updated = prev
          .map((p) => ({ ...p, progress: p.progress + 0.15 }))
          .filter((p) => p.progress < 1);

        // Periodically spawn new packet along route
        if (Math.random() > 0.4 && updated.length < 5) {
          const links: [string, string][] = [
            ['N1', 'N2'],
            ['N2', 'N4'],
            ['N2', 'N5'],
            ['N5', 'N6'],
            ['N1', 'N3'],
            ['N3', 'N6']
          ];
          const chosenLink = links[Math.floor(Math.random() * links.length)];
          // Only if not jammed
          const isJammedRoute = jammerActive && (chosenLink[0] === 'N2' || chosenLink[1] === 'N2');
          if (!isJammedRoute) {
            updated.push({
              id: Date.now() + Math.random(),
              from: chosenLink[0],
              to: chosenLink[1],
              progress: 0
            });
          }
        }
        return updated;
      });
    }, 200);

    return () => clearInterval(packetTimer);
  }, [jammerActive]);

  // Toggle Electronic Warfare Jammer
  const toggleJammer = () => {
    setJammerActive((prev) => {
      const nextState = !prev;
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (node.id === 'N2') {
            return {
              ...node,
              isJammed: nextState,
              // When jammed, reroutes traffic through N3 and N5 autonomously
              activeLinks: nextState ? ['N1', 'N5'] : ['N1', 'N4', 'N5']
            };
          }
          return node;
        })
      );
      return nextState;
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-sm bg-white border border-[#E5E7EB] shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 bg-[#059669] transform rotate-45" />
            <h3 className="text-lg font-bold text-[#1A1A1A] uppercase tracking-tight">
              Tactical SDR MANET Mesh & Anti-Jam Network Simulation
            </h3>
          </div>
          <p className="text-xs text-[#6B7280] font-mono">
            Slide 14 • 10,000 hops/sec Fast Frequency Hopping & Autonomous Self-Healing Ad-Hoc Topology
          </p>
        </div>

        {/* Jammer Toggle Control */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleJammer}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              jammerActive
                ? 'bg-[#DC2626] text-white animate-pulse'
                : 'bg-white hover:bg-[#F9FAFB] text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{jammerActive ? 'EW Jammer Active (Node N2)' : 'Inject EW RF Jammer'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Radar Screen + Node Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Tactical Radar Display (60% width) */}
        <div className="lg:col-span-8 relative aspect-[16/10] min-h-[360px] rounded-sm bg-[#0A1120] border border-slate-700 overflow-hidden shadow-inner flex items-center justify-center">
          {/* Radar Grid Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[80%] h-[80%] rounded-full border border-cyan-400"></div>
            <div className="w-[55%] h-[55%] rounded-full border border-cyan-400"></div>
            <div className="w-[30%] h-[30%] rounded-full border border-cyan-400"></div>
            <div className="w-full h-[1px] bg-cyan-400 absolute"></div>
            <div className="h-full w-[1px] bg-cyan-400 absolute"></div>
          </div>

          {/* SVG Mesh Link Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node) =>
              node.activeLinks.map((targetId) => {
                const targetNode = nodes.find((n) => n.id === targetId);
                if (!targetNode) return null;
                const isBlocked = jammerActive && (node.id === 'N2' && targetId === 'N4');

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isBlocked ? '#EF4444' : '#38BDF8'}
                    strokeWidth={isBlocked ? '1' : '1.5'}
                    strokeDasharray={isBlocked ? '4,4' : 'none'}
                    opacity={isBlocked ? 0.4 : 0.6}
                  />
                );
              })
            )}

            {/* Render moving data packets */}
            {activePackets.map((pkt) => {
              const src = nodes.find((n) => n.id === pkt.from);
              const dst = nodes.find((n) => n.id === pkt.to);
              if (!src || !dst) return null;

              const curX = src.x + (dst.x - src.x) * pkt.progress;
              const curY = src.y + (dst.y - src.y) * pkt.progress;

              return (
                <circle
                  key={pkt.id}
                  cx={`${curX}%`}
                  cy={`${curY}%`}
                  r="4"
                  fill="#34D399"
                />
              );
            })}
          </svg>

          {/* Render Node Markers */}
          {nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-sm flex items-center gap-2 border transition-all z-10 ${
                  node.isJammed
                    ? 'bg-red-950/90 border-red-500 text-red-300 shadow-lg shadow-red-950'
                    : isSelected
                    ? 'bg-cyan-950 border-cyan-400 text-white shadow-lg ring-2 ring-cyan-400'
                    : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:border-slate-500'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-sm ${node.isJammed ? 'bg-red-500 animate-ping' : 'bg-cyan-400'}`} />
                <div className="text-left font-mono">
                  <div className="text-[11px] font-bold leading-none">{node.id}</div>
                  <div className="text-[9px] text-slate-400 leading-tight">{node.type}</div>
                </div>
              </button>
            );
          })}

          {/* Top-Right Tactical Radar Telemetry */}
          <div className="absolute top-3 right-3 p-2 rounded-sm bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
            <div className="text-cyan-400 font-bold">FFH HOP RATE: 10,000/s</div>
            <div>CURRENT CHANNEL: <span className="text-white">{currentHopChannel} MHz</span></div>
            <div>TOPOLOGY: <span className="text-emerald-400 font-bold">AD-HOC MESH</span></div>
          </div>
        </div>

        {/* Selected Node Inspector (40% width) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6B7280] font-bold block">
                  SELECTED TACTICAL RADIO
                </span>
                <h4 className="text-base font-bold text-[#1A1A1A]">{selectedNode.name}</h4>
              </div>
              <span className="px-2.5 py-1 rounded-sm text-xs font-mono font-bold bg-white text-[#1A1A1A] border border-[#E5E7EB]">
                {selectedNode.id}
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Node Platform:</span>
                <span className="text-[#1A1A1A] font-bold">{selectedNode.type}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Frequency Agility:</span>
                <span className="text-[#059669] font-bold">{selectedNode.hopRate.toLocaleString()} hops/sec</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">RF Transmit Power:</span>
                <span className="text-[#1A1A1A] font-bold">{selectedNode.powerDbm} dBm ({(Math.pow(10, (selectedNode.powerDbm - 30) / 10)).toFixed(1)}W)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Battery Capacity:</span>
                <span className="text-[#1A1A1A] font-bold">{selectedNode.battery}%</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Anti-Jam ECCM State:</span>
                <span className={`font-bold ${selectedNode.isJammed ? 'text-[#DC2626]' : 'text-[#059669]'}`}>
                  {selectedNode.isJammed ? 'JAMMING DETECTED (REROUTING)' : 'SECURE & SYNCHRONIZED'}
                </span>
              </div>
            </div>

            {/* Active Direct Neighbor Links */}
            <div className="pt-2 border-t border-[#E5E7EB]">
              <span className="text-[10px] font-mono uppercase text-[#6B7280] font-bold block mb-2">
                Active Mesh Routes ({selectedNode.activeLinks.length})
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.activeLinks.map((target) => (
                  <span
                    key={target}
                    className="px-2 py-1 rounded-sm text-xs font-mono bg-white text-[#1A1A1A] border border-[#E5E7EB]"
                  >
                    → Node {target}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Self-Healing Mechanism Explanation */}
          <div className="p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#059669]" />
              <span>Self-Healing Autonomous Rerouting</span>
            </h5>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              When hostile electronic warfare attempts to jam any single relay node, the MANET routing algorithm dynamically recalculates next-hop routes in sub-10ms without dropping voice or tactical data packets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
