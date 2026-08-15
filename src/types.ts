export type VerticalType = 'all' | '5g-oru' | '5g-test' | 'defense' | 'satcom';

export interface ProductSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  vertical: '5g-oru' | '5g-test' | 'defense' | 'satcom';
  verticalLabel: string;
  status: 'In Production' | 'TRL 6 Field Proven' | 'Under Development' | '2027 Release';
  releaseDate?: string;
  badgeColor: string;
  tagline: string;
  summary: string;
  highlights: string[];
  specs: ProductSpec[];
  architecture?: {
    inputs: string[];
    core: string[];
    outputs: string[];
  };
  applications: string[];
  formFactors: string[];
  standards: string[];
  imagePlaceholderText: string;
}

export interface VerticalDetail {
  id: '5g-oru' | '5g-test' | 'defense';
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  subCapabilities: {
    title: string;
    description: string;
    metrics: string;
  }[];
}

export interface RoadmapItem {
  year: string;
  target: string;
  vertical: '5G ORU' | '5G Test Equipment' | 'Defense';
  items: string[];
  statusBadge: string;
}

export interface SlideData {
  slideNumber: number;
  title: string;
  subtitle?: string;
  category: 'Overview' | 'Strategy' | '5G & NTN' | 'Products' | 'Defense' | 'Roadmap' | 'Summary';
  summaryText: string;
  bulletPoints?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  keyHighlights?: { label: string; value: string }[];
  confidentialFooter: string;
}
