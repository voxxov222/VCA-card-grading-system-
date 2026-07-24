import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  QrCode, 
  Smartphone, 
  Radio, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  Search, 
  Eye, 
  Info,
  ChevronRight,
  Award,
  Layers,
  Truck,
  ShieldAlert
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { CardItem, LedgerEvent } from '../types';
import { mockValueHistory, mockGradingStats, mockLedgerEvents } from '../data/mockData';
import GeneratedTradingCard from './GeneratedTradingCard';

interface DashboardViewProps {
  cards: CardItem[];
  onSelectCard: (card: CardItem) => void;
  onOpenCertificate: (card: CardItem) => void;
  onOpenNfcModal: () => void;
  setActiveTab: (tab: any) => void;
}

export default function DashboardView({
  cards,
  onSelectCard,
  onOpenCertificate,
  onOpenNfcModal,
  setActiveTab
}: DashboardViewProps) {
  const [activeSlabSide, setActiveSlabSide] = useState<'front' | 'back'>('front');
  const [valueTimeRange, setValueTimeRange] = useState<'7D' | '30D' | '3M' | '1Y' | 'ALL'>('30D');
  const featuredCard = cards[0]; // Charizard

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-16">
      
      {/* Title & Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            SECURE VCA COMMAND CENTER
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-3 mb-2 tracking-tight">
            VCA CERTIFIED GRADING DASHBOARD
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Your collection. Authenticated. Protected. Verified via embedded NFC cryptographic microchips.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenNfcModal}
            className="px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2 cursor-pointer"
            id="btn-trigger-nfc"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Simulate NFC Tap</span>
          </button>
        </div>
      </div>

      {/* TOP GRID: FEATURED 3D SLAB VIEWER + AUTH SUMMARY + VALUE INTELLIGENCE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT/CENTER: 3D INTERACTIVE SLAB VIEWER (Large Reference Feature) */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[90px] rounded-full pointer-events-none" />

          {/* Header of slab viewer card */}
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold">PHYSICAL ENCAPSULATION</span>
              <h3 className="text-lg font-display font-bold text-white">Live NFC Graded Slab</h3>
            </div>
            <div className="flex bg-slate-950 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setActiveSlabSide('front')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeSlabSide === 'front' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setActiveSlabSide('back')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeSlabSide === 'back' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Back
              </button>
            </div>
          </div>

          {/* Interactive Graded Slab Graphic */}
          <div className="relative w-full aspect-[3/4.2] max-w-[300px] mx-auto bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden select-none group my-2">
            {/* Glass reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20 group-hover:translate-x-full transition-transform duration-1000" />

            {/* VCA Top Label Box */}
            {activeSlabSide === 'front' ? (
              <div className="bg-slate-100 rounded-lg p-2.5 flex flex-col justify-between relative text-slate-900 border-2 border-slate-300 shadow-sm z-10 h-[68px]">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="font-sans font-black text-[7px] leading-none tracking-tight">VERIFIED CARD AUTHORITY</span>
                    <span className="text-[5px] text-slate-500 font-bold mt-0.5">VCA-{featuredCard.id}</span>
                  </div>
                  <div className="text-right flex flex-col">
                    <span className="text-[12px] font-black leading-none text-cyan-600 font-display">10</span>
                    <span className="text-[5px] text-slate-500 font-bold mt-0.5 uppercase tracking-tighter">GEM MINT</span>
                  </div>
                </div>

                <div className="mt-1.5 flex justify-between items-end border-t border-slate-200 pt-1 text-[5px] font-mono font-semibold">
                  <div>
                    <div>1999 Base Set Holo</div>
                    <div className="text-slate-500 mt-0.5">Charizard #4</div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-600 font-bold">NFC ENABLED</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-100 rounded-lg p-2.5 flex flex-col items-center justify-center relative text-slate-900 border-2 border-slate-300 shadow-sm z-10 h-[68px]">
                {/* Fake Barcode on the back label */}
                <div className="w-full flex justify-center items-center gap-[1px] h-6 opacity-80 mb-2 mt-1">
                  <div className="w-[2px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                  <div className="w-[3px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                  <div className="w-[2px] h-full bg-slate-900"></div>
                  <div className="w-[4px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                  <div className="w-[2px] h-full bg-slate-900"></div>
                  <div className="w-[3px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                  <div className="w-[2px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                  <div className="w-[3px] h-full bg-slate-900"></div>
                  <div className="w-[2px] h-full bg-slate-900"></div>
                  <div className="w-[1px] h-full bg-slate-900"></div>
                </div>
                <div className="font-mono text-[7px] font-bold text-slate-700 tracking-widest">{featuredCard.id}</div>
              </div>
            )}

            {/* Card Window */}
            <div className="flex-1 w-full my-3 bg-slate-900 rounded-xl relative border border-slate-800 flex flex-col items-center justify-center p-2 overflow-hidden">
              <div className="absolute inset-1 rounded-lg border border-dashed border-slate-700/40 pointer-events-none z-20" />

              {activeSlabSide === 'front' ? (
                <div className="transform scale-[0.62] origin-center flex items-center justify-center z-10">
                  <GeneratedTradingCard 
                    title={featuredCard.title}
                    set={featuredCard.set}
                    year={featuredCard.year}
                    category={featuredCard.category}
                    grade={featuredCard.grade}
                    artwork={featuredCard.artwork}
                    imageBg={featuredCard.imageBg}
                    imageUrl={featuredCard.imageUrl}
                    backImageUrl={featuredCard.backImageUrl}
                  />
                </div>
              ) : (
                <div className="transform scale-[0.62] origin-center flex items-center justify-center z-10">
                  <GeneratedTradingCard 
                    title={featuredCard.title}
                    set={featuredCard.set}
                    year={featuredCard.year}
                    category={featuredCard.category}
                    grade={featuredCard.grade}
                    artwork={featuredCard.artwork}
                    imageBg={featuredCard.imageBg}
                    imageUrl={featuredCard.imageUrl}
                    backImageUrl={featuredCard.backImageUrl}
                    side="back"
                  />
                </div>
              )}
            </div>

            {/* Bottom NFC status bar on slab */}
            <div className="flex justify-between items-center text-[6px] font-mono text-cyan-400 border-t border-slate-900 pt-2 relative z-10">
              <span className="flex items-center gap-1"><Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" /> NFC CHIP ACTIVE</span>
              <span>QR CERT: VCA-882194</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-2 mt-4 relative z-10">
            <button
              onClick={() => onOpenCertificate(featuredCard)}
              className="px-3 py-2.5 bg-slate-950 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-all text-center cursor-pointer"
            >
              Certificate
            </button>
            <button
              onClick={() => onSelectCard(featuredCard)}
              className="px-3 py-2.5 bg-slate-950 hover:bg-slate-850 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-all text-center cursor-pointer"
            >
              Vault Access
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="px-3 py-2.5 bg-slate-950 hover:bg-slate-850 text-cyan-400 hover:text-cyan-300 text-xs font-semibold rounded-xl border border-slate-800 transition-all text-center cursor-pointer"
            >
              View History
            </button>
          </div>
        </div>

        {/* RIGHT: AUTHENTICATION SUMMARY + VALUE INTELLIGENCE */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Authentication Summary Panel */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">Authentication Summary</h3>
                <Info className="w-4 h-4 text-slate-500" />
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">NFC Status</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Authentication</span>
                  <span className="text-emerald-400 font-bold">PASSED</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Grade</span>
                  <span className="text-white font-bold">10 GEM MINT</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Condition</span>
                  <span className="text-white font-bold">PRISTINE</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Tamper Status</span>
                  <span className="text-cyan-400 font-bold">SECURE (100% LOOP)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Ownership</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Last Scan</span>
                  <span className="text-slate-300">24 JUL 2026</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Certification</span>
                  <span className="text-cyan-400 font-bold">VCA-882194</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Verification Status</span>
                <span className="text-emerald-400 font-bold font-mono">10</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-2 border border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-full rounded-full" />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5 font-mono">GREEN: CERTIFIED GEM MINT 10</p>
            </div>
          </div>

          {/* Card Value Intelligence Panel */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">VCA Official Value Indicator</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +8.4%
                </span>
              </div>

              <div className="text-4xl font-display font-black text-white my-3">
                $12,450 <span className="text-lg font-normal text-slate-400 font-mono">CAD</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculated from recent public auction results, population reports, and grade liquidity scores.
              </p>

              {/* Factors list */}
              <div className="mt-6 space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-500">Confidence Rating:</span>
                  <span className="text-cyan-400 font-bold">HIGH (98.4%)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-500">Population Report:</span>
                  <span className="text-slate-300">142 Graded 10</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Market Liquidity:</span>
                  <span className="text-emerald-400 font-bold">EXCELLENT</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button 
                onClick={() => setActiveTab('marketplace')}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-850 text-cyan-400 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
              >
                <span>View Marketplace Sales</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* SECOND ROW: VALUE HISTORY CHART + GRADING STATS + TERMINAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card Value History Chart */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-display font-bold text-white">Card Value History</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Trailing 7-month market valuation appraisal</p>
            </div>
            <div className="flex bg-slate-950 border border-slate-800 p-1 rounded-xl">
              {(['7D', '30D', '3M', '1Y', 'ALL'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setValueTimeRange(range)}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                    valueTimeRange === range ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockValueHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="valueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748b" textAnchor="end" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} domain={['dataMin - 1000', 'dataMax + 1000']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2.5} fillOpacity={1} fill="url(#valueGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grading Stats Distribution */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-display font-bold text-white">Grading Statistics</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">VCA population distribution report</p>
              </div>
              <Award className="w-5 h-5 text-cyan-400" />
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockGradingStats} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="grade" stroke="#64748b" fontSize={10} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={10} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Total Evaluated: 287 slabs</span>
            <span className="text-cyan-400 font-bold">97.5% Auth Pass Rate</span>
          </div>
        </div>

      </div>

      {/* THIRD ROW: VCA SYSTEM TERMINAL + LIVE LEDGER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* VCA System Terminal */}
        <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-6 font-mono text-xs shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-900">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white uppercase tracking-wider">VCA System Terminal</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="space-y-2 text-slate-400 h-52 overflow-y-auto">
              <div className="text-cyan-400">[14:32:04] NFC DEVICE DETECTED</div>
              <div>[14:32:05] VCA-882194 IDENTIFIED</div>
              <div>[14:32:05] AUTHENTICATION REQUEST SENT</div>
              <div className="text-emerald-400">[14:32:06] CERTIFICATE VERIFIED (SHA-256)</div>
              <div>[14:32:06] SLAB INTEGRITY: SECURE (100% LOOP)</div>
              <div className="text-cyan-400">[14:32:07] AUTHENTICATION COMPLETE</div>
              <div className="text-slate-500">[14:33:10] VAULT SYNC HEARTBEAT OK</div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
            <span>SECURE SEC-EDM-01</span>
            <span className="text-emerald-400 font-bold">LISTENING</span>
          </div>
        </div>

        {/* Real-Time Ledger Summary Table */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-display font-bold text-white">VCA Authentication Ledger</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Immutable chronological verification history</p>
            </div>
            <button
              onClick={() => setActiveTab('vault')}
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>View Full Ledger</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {mockLedgerEvents.slice(0, 4).map((evt) => (
              <div 
                key={evt.id}
                className="bg-slate-950/60 border border-slate-850 p-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-cyan-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400 font-bold">{evt.serial}</span>
                    <span className="text-xs font-semibold text-white">{evt.description}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">Device: {evt.device}</div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] font-mono text-slate-400">{evt.timestamp}</span>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
