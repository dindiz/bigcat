import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Download, Sparkles, Sliders, HardDrive, Cpu, Zap, Activity } from 'lucide-react';

export const InteractiveSpectrumAnalyzer: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [centerFreq, setCenterFreq] = useState<number>(3500); // 3500 MHz (n78 5G band)
  const [bandwidth, setBandwidth] = useState<number>(100); // 100 MHz
  const [channelMode, setChannelMode] = useState<'single' | 'dual'>('dual');
  const [carrierPower, setCarrierPower] = useState<number>(-45); // dBm
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedMBSamples, setRecordedMBSamples] = useState<number>(0);
  const [activeSignalType, setActiveSignalType] = useState<'5g-nr' | 'lora' | 'fhss' | 'cw'>('5g-nr');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Peak metrics state
  const [peakPower, setPeakPower] = useState<number>(-45);
  const [snr, setSnr] = useState<number>(34.2);
  const [evm, setEvm] = useState<number>(1.8);

  // Live recording simulation
  useEffect(() => {
    let timer: any;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordedMBSamples((prev) => {
          if (prev >= 6400000) return prev; // 6.4 TB limit
          return prev + 122.88; // 122.88 MSps * sample size
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      // Clean technical canvas background
      ctx.fillStyle = '#0F172A'; // Deep technical slate for RF visualization clarity
      ctx.fillRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;

      // Vertical Frequency Grid Lines (10 divisions)
      for (let i = 0; i <= 10; i++) {
        const x = (width / 10) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal Power Grid Lines (dBm: -100 dBm to 0 dBm)
      for (let i = 0; i <= 10; i++) {
        const y = (height / 10) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center Frequency Marker Line
      const centerX = width / 2;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Baseline Noise Floor (-95 dBm)
      const noiseY = height * 0.85;

      // Draw Channel 1 (Main Trace)
      ctx.beginPath();
      ctx.strokeStyle = '#38BDF8'; // Bright Cyan
      ctx.lineWidth = 2;

      let currentPeak = -100;

      for (let x = 0; x < width; x++) {
        const normalizedX = (x - centerX) / (width / 2); // -1 to +1
        let signalHeight = 0;

        // Base noise with flicker
        const randomNoise = (Math.random() - 0.5) * 6 + Math.sin(x * 0.1 + time) * 2;

        if (activeSignalType === '5g-nr') {
          // 5G NR OFDM Flat-top Spectrum with subcarrier rolls
          const spanNormalized = bandwidth / 200; // Normalized span
          if (Math.abs(normalizedX) < spanNormalized * 0.7) {
            const ofdmRipple = Math.sin(x * 0.35 + time * 3) * 1.5;
            signalHeight = (Math.abs(carrierPower) * (height / 120)) * 1.8 + ofdmRipple;
          } else if (Math.abs(normalizedX) < spanNormalized * 0.9) {
            // Roll-off skirts
            const dist = Math.abs(normalizedX) - spanNormalized * 0.7;
            signalHeight = ((Math.abs(carrierPower) * (height / 120)) * 1.8) * Math.exp(-dist * 12);
          }
        } else if (activeSignalType === 'lora') {
          // LoRa CSS Chirp
          const chirpPos = ((time * 2) % 2) - 1;
          const dist = Math.abs(normalizedX - chirpPos * 0.6);
          signalHeight = Math.max(0, 180 * Math.exp(-dist * 15));
        } else if (activeSignalType === 'fhss') {
          // 10,000 hops/sec Tactical FHSS multi-peak
          const hopOffset = Math.sin(Math.floor(time * 5) * 1.7) * 0.7;
          const dist = Math.abs(normalizedX - hopOffset);
          signalHeight = Math.max(0, 190 * Math.exp(-dist * 25));
        } else {
          // Continuous Wave (CW) Tone
          const dist = Math.abs(normalizedX);
          signalHeight = Math.max(0, 200 * Math.exp(-dist * 40));
        }

        const y = Math.max(20, Math.min(height - 10, noiseY - signalHeight + randomNoise));
        const instantaneousDbm = -100 + (1 - y / height) * 100;
        if (instantaneousDbm > currentPeak) {
          currentPeak = instantaneousDbm;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // If Dual Channel is active, draw Channel 2 (Green Trace)
      if (channelMode === 'dual') {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.75)'; // Emerald
        ctx.lineWidth = 1.5;

        for (let x = 0; x < width; x++) {
          const normalizedX = (x - centerX) / (width / 2);
          let signalHeight = 0;
          const randomNoise = (Math.random() - 0.5) * 5 + Math.cos(x * 0.08 + time) * 1.5;

          // Slightly offset second channel (Diversity / MIMO receiver)
          const spanNormalized = bandwidth / 220;
          if (Math.abs(normalizedX + 0.1) < spanNormalized * 0.65) {
            signalHeight = (Math.abs(carrierPower + 3) * (height / 120)) * 1.6;
          }

          const y = Math.max(20, Math.min(height - 10, noiseY - signalHeight + randomNoise));
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Update instantaneous live metrics
      setPeakPower(Math.round(currentPeak * 10) / 10);
      setSnr(Math.round((currentPeak - (-92)) * 10) / 10);
      setEvm(Math.round((1.5 + Math.random() * 0.4) * 10) / 10);

      if (isRunning) {
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, centerFreq, bandwidth, channelMode, carrierPower, activeSignalType]);

  const handleExportCsv = () => {
    const csvContent = `Frequency_MHz,Power_dBm_Ch1,Power_dBm_Ch2\n` +
      Array.from({ length: 50 }, (_, i) => {
        const freq = centerFreq - bandwidth / 2 + (bandwidth / 50) * i;
        const p1 = peakPower - Math.abs(i - 25) * 1.2;
        const p2 = p1 - 2.5;
        return `${freq.toFixed(2)},${p1.toFixed(2)},${p2.toFixed(2)}`;
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bigcat_wicateye_spectrum_${centerFreq}MHz.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 sm:p-8 rounded-sm bg-white border border-[#E5E7EB] shadow-2xl space-y-8">
      {/* Header Controls & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 bg-[#3B82F6] transform rotate-45" />
            <h3 className="text-lg font-bold text-[#1A1A1A] uppercase tracking-tight">
              WiCatEye Dual-Channel RF Spectrum & IQ Record Lab
            </h3>
          </div>
          <p className="text-xs text-[#6B7280] font-mono">
            Slide 18 • Real-time RF Signal Generation & 122.88 MSps Continuous IQ Streamer
          </p>
        </div>

        {/* Live Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              isRunning
                ? 'bg-[#1A1A1A] text-white'
                : 'bg-white text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#2563EB]" />}
            <span>{isRunning ? 'Freeze Trace' : 'Live Sweep'}</span>
          </button>

          <button
            onClick={() => {
              setIsRecording(!isRecording);
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              isRecording
                ? 'bg-[#DC2626] text-white animate-pulse'
                : 'bg-white text-[#1A1A1A] border border-[#E5E7EB]'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>{isRecording ? 'Recording IQ...' : 'Record to NVMe'}</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1A1A1A] text-xs font-mono font-bold uppercase transition-colors"
            title="Export CSV Trace"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV</span>
          </button>
        </div>
      </div>

      {/* Main Analyzer Grid (Screen + Telemetry Box) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Canvas Display Viewport */}
        <div className="lg:col-span-8 rounded-sm bg-[#0F172A] border border-slate-700 p-3 shadow-inner relative overflow-hidden">
          {/* Top Canvas Overlay Stats */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-2 px-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span>
                <span className="font-bold text-white">CH 1: 5G NR</span>
              </span>
              {channelMode === 'dual' && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#34D399]"></span>
                  <span className="font-bold text-emerald-300">CH 2: Diversity</span>
                </span>
              )}
            </div>
            <div className="text-slate-400">
              RBW: <span className="text-white">30 kHz</span> • VBW: <span className="text-white">100 kHz</span>
            </div>
          </div>

          <canvas
            ref={canvasRef}
            width={720}
            height={340}
            className="w-full h-[280px] sm:h-[340px] rounded-sm block"
          />

          {/* Bottom Canvas Overlay Frequency Scale */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2 px-2 border-t border-slate-800 pt-1.5">
            <span>START: {(centerFreq - bandwidth / 2).toFixed(1)} MHz</span>
            <span className="text-cyan-400 font-bold">CF: {centerFreq.toFixed(1)} MHz (Span: {bandwidth} MHz)</span>
            <span>STOP: {(centerFreq + bandwidth / 2).toFixed(1)} MHz</span>
          </div>
        </div>

        {/* Real-time Telemetry & Calibration Parameters */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
              <span className="text-[10px] uppercase font-bold text-[#6B7280]">LIVE DEMOD METRICS</span>
              <span className="text-[10px] text-[#2563EB] font-bold">122.88 MSps</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Peak Channel Power:</span>
              <span className="text-[#1A1A1A] font-bold text-sm">{peakPower.toFixed(1)} dBm</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Signal-to-Noise (SNR):</span>
              <span className="text-[#2563EB] font-bold text-sm">{snr.toFixed(1)} dB</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">Error Vector (EVM):</span>
              <span className="text-[#059669] font-bold text-sm">{evm.toFixed(2)} %</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B7280]">IQ Storage Captured:</span>
              <span className="text-[#1A1A1A] font-bold">
                {(recordedMBSamples / 1024).toFixed(2)} GB / 6400 GB
              </span>
            </div>
          </div>

          {/* Waveform Selector */}
          <div className="p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] space-y-2">
            <label className="text-[10px] font-mono uppercase text-[#6B7280] font-bold block">
              Inject Modulation Waveform:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: '5g-nr', label: '5G NR (100MHz)' },
                { id: 'fhss', label: '10,000 Hops FHSS' },
                { id: 'lora', label: 'LoRa Satellite' },
                { id: 'cw', label: 'CW Pure Tone' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveSignalType(type.id as any)}
                  className={`p-2 rounded-sm text-xs font-mono font-bold uppercase transition-all ${
                    activeSignalType === type.id
                      ? 'bg-[#1A1A1A] text-white shadow-sm'
                      : 'bg-white text-[#4B5563] hover:text-[#1A1A1A] border border-[#E5E7EB]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Channel Diversity Mode */}
          <div className="p-4 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between">
            <span className="text-xs font-mono text-[#4B5563] font-bold">Dual-Channel 2T2R Mode</span>
            <button
              onClick={() => setChannelMode(channelMode === 'single' ? 'dual' : 'single')}
              className={`px-3 py-1.5 rounded-sm text-xs font-mono font-bold uppercase transition-all ${
                channelMode === 'dual'
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white text-[#4B5563] border border-[#E5E7EB]'
              }`}
            >
              {channelMode === 'dual' ? 'Dual RX Active' : 'Single RX'}
            </button>
          </div>
        </div>
      </div>

      {/* Parametric Tuning Sliders */}
      <div className="p-6 rounded-sm bg-[#F9FAFB] border border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
        {/* Center Frequency Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280] font-bold">Center Frequency (CF):</span>
            <span className="text-[#1A1A1A] font-bold">{centerFreq} MHz</span>
          </div>
          <input
            type="range"
            min={800}
            max={6000}
            step={50}
            value={centerFreq}
            onChange={(e) => setCenterFreq(Number(e.target.value))}
            className="w-full h-1.5 bg-[#E5E7EB] rounded-sm appearance-none cursor-pointer accent-[#1A1A1A]"
          />
          <div className="flex justify-between text-[10px] text-[#9CA3AF]">
            <span>800 MHz (V/UHF)</span>
            <span>3.5 GHz (n78 5G)</span>
            <span>6.0 GHz</span>
          </div>
        </div>

        {/* Bandwidth Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280] font-bold">Instantaneous Bandwidth:</span>
            <span className="text-[#2563EB] font-bold">{bandwidth} MHz</span>
          </div>
          <input
            type="range"
            min={20}
            max={200}
            step={10}
            value={bandwidth}
            onChange={(e) => setBandwidth(Number(e.target.value))}
            className="w-full h-1.5 bg-[#E5E7EB] rounded-sm appearance-none cursor-pointer accent-[#2563EB]"
          />
          <div className="flex justify-between text-[10px] text-[#9CA3AF]">
            <span>20 MHz</span>
            <span>100 MHz (5G Full)</span>
            <span>200 MHz</span>
          </div>
        </div>

        {/* Carrier Input Power Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280] font-bold">Input Power Level:</span>
            <span className="text-[#1A1A1A] font-bold">{carrierPower} dBm</span>
          </div>
          <input
            type="range"
            min={-70}
            max={-20}
            step={1}
            value={carrierPower}
            onChange={(e) => setCarrierPower(Number(e.target.value))}
            className="w-full h-1.5 bg-[#E5E7EB] rounded-sm appearance-none cursor-pointer accent-[#1A1A1A]"
          />
          <div className="flex justify-between text-[10px] text-[#9CA3AF]">
            <span>-70 dBm (Weak)</span>
            <span>-45 dBm (Nominal)</span>
            <span>-20 dBm (High)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
