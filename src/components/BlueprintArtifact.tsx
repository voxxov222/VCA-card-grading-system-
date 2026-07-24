import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Zap, Lock, RefreshCw, Smartphone, CheckCircle2, AlertTriangle, Terminal, Layers } from 'lucide-react';

export default function BlueprintArtifact() {
  const [activeTab, setActiveTab] = useState<'overview' | 'flow' | 'tamper' | 'dashboard' | 'market'>('overview');
  const [isExploded, setIsExploded] = useState(false);
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  const [rotation, setRotation] = useState({ x: -14, y: 22 });
  const [isBreached, setIsBreached] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; body: string } | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<Array<{ id: number; text: string; type?: 'ok' | 'warn'; time: string }>>([
    { id: 1, text: 'VCA Core firmware initialized [UID: 0x4F89...2A]', time: '02:00:12' },
    { id: 2, text: 'NFC antenna circuit impedance: 47.2Ω (OPTIMAL)', time: '02:00:13' },
    { id: 3, text: 'Secure element crypto-keys verified against VCA ledger', time: '02:00:14' },
    { id: 4, text: 'Continuity trace loop active. Sonic weld seal intact.', type: 'ok', time: '02:00:15' }
  ]);

  // Auto-cycle exploded view in overview tab
  useEffect(() => {
    if (!isAutoCycle || activeTab !== 'overview') return;
    const interval = setInterval(() => {
      setIsExploded((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoCycle, activeTab]);

  const triggerToast = (title: string, body: string) => {
    setToastMessage({ title, body });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSimulateTamper = () => {
    const nextBreached = !isBreached;
    setIsBreached(nextBreached);
    const now = new Date().toLocaleTimeString();

    if (nextBreached) {
      triggerToast('TAMPER EVENT DETECTED', 'Continuity trace severed. Digital keys revoked.');
      setTerminalLogs((prev) => [
        { id: Date.now(), text: 'WARNING: Continuity loop voltage drop detected (0.00V)!', type: 'warn', time: now },
        { id: Date.now() + 1, text: 'CRITICAL: Physical seal breach verified. Revoking cryptographic auth UID.', type: 'warn', time: now },
        ...prev
      ]);
    } else {
      triggerToast('SYSTEM RE-SEALED', 'Simulated diagnostic reset complete.');
      setTerminalLogs((prev) => [
        { id: Date.now(), text: 'INFO: Tamper simulation reset. Recalibrating resistance baseline.', type: 'ok', time: now },
        ...prev
      ]);
    }
  };

  const handleRunDiagnostics = () => {
    const now = new Date().toLocaleTimeString();
    triggerToast('DIAGNOSTICS RUNNING', 'Scanning cryptographic signature & microchip state...');
    setTimeout(() => {
      setTerminalLogs((prev) => [
        { id: Date.now(), text: isBreached ? 'DIAGNOSTIC FAIL: Slab is BROKEN / TAMPERED.' : 'DIAGNOSTIC PASS: Slab is SEALED & AUTHENTIC.', type: isBreached ? 'warn' : 'ok', time: now },
        ...prev
      ]);
    }, 1200);
  };

  return (
    <section className="py-20 bg-[#050608] text-[#dff6f8] font-['Rajdhani',sans-serif] relative overflow-hidden" id="blueprint-artifact">
      {/* Background scanline & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(157,92,255,0.08),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(63,240,255,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(63,240,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(63,240,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none opacity-40" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 flex gap-3 items-start bg-gradient-to-br from-[#14080a]/95 to-[#0a0506]/95 border border-red-500/50 rounded-lg p-4 max-w-sm shadow-[0_0_30px_rgba(255,107,122,0.25)] animate-in fade-in slide-in-from-top-5">
          <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-mono text-xs tracking-wider text-red-400 font-bold mb-1">{toastMessage.title}</div>
            <div className="text-xs text-slate-300 leading-relaxed">{toastMessage.body}</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-end flex-wrap gap-6 border-b border-[#3ff0ff]/25 pb-6 mb-8">
          <div className="flex items-center gap-5">
            <div className="w-18 h-18 relative flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(63,240,255,0.35)]">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <defs>
                  <linearGradient id="artHolo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3ff0ff" />
                    <stop offset="45%" stopColor="#9d5cff" />
                    <stop offset="100%" stopColor="#ffcf6b" />
                  </linearGradient>
                </defs>
                <polygon points="50,3 90,25 90,72 50,97 10,72 10,25" fill="rgba(63,240,255,0.06)" stroke="url(#artHolo)" strokeWidth="2" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="#ffcf6b" strokeWidth="1.5" opacity="0.8" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[6px] text-[#ffcf6b] uppercase flex items-center gap-2 mb-2">
                <span className="w-5 h-[1px] bg-[#ffcf6b]" /> VERIFIED CARD AUTHORITY
              </div>
              <h2 className="text-3xl lg:text-4xl font-black font-['Orbitron',sans-serif] tracking-wider bg-gradient-to-r from-[#eafeff] via-[#3ff0ff] to-[#9d5cff] bg-clip-text text-transparent">
                VCA NFC SLAB — LIVE BLUEPRINT
              </h2>
              <p className="text-slate-400 text-sm tracking-wide mt-1">Interactive cryptographic grading case simulation & physical security architecture.</p>
            </div>
          </div>
          <div className="text-right font-mono text-[10px] text-slate-400 tracking-widest space-y-1">
            <div className={`inline-flex items-center px-3 py-1 rounded-full border ${isBreached ? 'border-red-500/50 bg-red-500/10 text-red-400' : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'}`}>
              <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${isBreached ? 'bg-red-400 shadow-[0_0_8px_#ff6b7a]' : 'bg-cyan-400 shadow-[0_0_8px_#3ff0ff]'}`} />
              {isBreached ? 'SYSTEM STATUS: BREACHED / TAMPERED' : 'SYSTEM STATUS: SEALED & SECURE'}
            </div>
            <div>EDMONTON, AB · CANADA</div>
            <div>DOC — VCA-SLAB-BLUEPRINT-001</div>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border border-[#3ff0ff]/25 rounded bg-[#0a0d12] overflow-x-auto">
          {[
            { id: 'overview', label: 'Assembly (3D)' },
            { id: 'flow', label: 'Auth Flow' },
            { id: 'tamper', label: 'Tamper Shield' },
            { id: 'dashboard', label: 'Ledger Sync' },
            { id: 'market', label: 'Market Case' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-mono text-xs tracking-wider uppercase px-6 py-3 cursor-pointer transition-all border-r border-[#3ff0ff]/20 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-b from-[#3ff0ff]/20 to-[#3ff0ff]/5 text-[#3ff0ff] shadow-[inset_0_-2px_0_#3ff0ff]'
                  : 'text-slate-400 hover:text-[#3ff0ff]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW / 3D ASSEMBLY */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Left 3D Stage */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6 relative min-h-[500px] flex flex-col items-center justify-center">
              <div className="absolute top-4 right-5 font-mono text-[9px] tracking-widest text-[#8a6f2e]">FIG.01 — ASSEMBLY</div>
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#3ff0ff] opacity-60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#3ff0ff] opacity-60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#3ff0ff] opacity-60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#3ff0ff] opacity-60" />

              <div className="flex-1 flex items-center justify-center perspective-[1400px] w-full py-12">
                <div
                  className={`w-[260px] h-[370px] relative transition-transform duration-150 ease-out cursor-grab ${isExploded ? 'exploded' : ''}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientY - rect.top - rect.height / 2;
                    const y = e.clientX - rect.left - rect.width / 2;
                    setRotation({ x: (-x / 10), y: (y / 10) });
                  }}
                  onMouseLeave={() => setRotation({ x: -14, y: 22 })}
                >
                  {/* Layer 1: Front Shell */}
                  <div className={`absolute inset-0 rounded-[10px] border border-[#3ff0ff]/55 bg-gradient-to-br from-[#3ff0ff]/10 via-[#9d5cff]/5 to-[#3ff0ff]/15 backdrop-blur-[1px] shadow-[0_0_30px_rgba(63,240,255,0.15)] transition-all duration-700 ${isExploded ? 'translate-z-[160px] -translate-y-10' : 'translate-z-[30px]'}`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute top-3 right-3 w-8 h-8 opacity-85 filter drop-shadow-[0_0_4px_rgba(63,240,255,0.5)]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,3 90,25 90,72 50,97 10,72 10,25" fill="rgba(10,13,18,0.4)" stroke="#3ff0ff" strokeWidth="3" />
                        <text x="50" y="58" textAnchor="middle" font-family="Orbitron, sans-serif" fontWeight="900" fontSize="22" fill="#eafeff">VCA</text>
                      </svg>
                    </div>
                  </div>

                  {/* Layer 2: Card */}
                  <div className={`absolute inset-0 rounded-[10px] border border-[#ffcf6b]/35 bg-gradient-to-br from-[#1c2430] to-[#0c1015] flex items-center justify-center p-6 shadow-inner transition-all duration-700 ${isExploded ? 'translate-z-[80px] -translate-y-3.5' : 'translate-z-[15px]'}`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="w-[78%] h-[88%] border border-[#9d5cff]/40 rounded-md bg-[radial-gradient(circle,rgba(157,92,255,0.08)_0%,transparent_70%)] flex flex-col items-center justify-center text-center p-4">
                      <span className="font-mono text-[11px] tracking-widest text-[#9d5cff] font-bold">HOLO-ID CARD WINDOW</span>
                      <span className="font-mono text-[9px] text-slate-400 mt-2">GEM MINT 10 · VCA-9284-77X</span>
                    </div>
                  </div>

                  {/* Layer 3: NFC Module */}
                  <div className={`absolute inset-0 rounded-[10px] flex items-center justify-center transition-all duration-700 ${isExploded ? 'translate-z-[15px]' : 'translate-z-0'}`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#ffcf6b] flex items-center justify-center shadow-[0_0_22px_rgba(255,207,107,0.5)] animate-[spin_6s_linear_infinite]">
                      <div className="w-4 h-4 bg-[#ffcf6b] rounded-sm shadow-[0_0_14px_#ffcf6b]" />
                    </div>
                  </div>

                  {/* Layer 4: Cradle */}
                  <div className={`absolute inset-0 rounded-[10px] border border-[#9d5cff]/30 bg-gradient-to-br from-[#9d5cff]/10 to-[#0a0d12]/90 transition-all duration-700 ${isExploded ? 'translate-z-[-60px] translate-y-3.5' : 'translate-z-[-15px]'}`} style={{ transformStyle: 'preserve-3d' }} />

                  {/* Layer 5: Back Shell */}
                  <div className={`absolute inset-0 rounded-[10px] border border-[#3ff0ff]/20 bg-gradient-to-br from-[#0a0d12]/98 to-[#140a1e]/90 transition-all duration-700 ${isExploded ? 'translate-z-[-140px] translate-y-10' : 'translate-z-[-30px]'}`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-[8px] tracking-[2px] text-slate-400">SN · VCA-000482-EDM</div>
                  </div>

                  {/* Leaders */}
                  {isExploded && (
                    <>
                      <div className="absolute -right-44 top-[2%] font-mono text-[9px] tracking-wider text-[#3ff0ff] bg-[#05080a]/80 border border-[#3ff0ff]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg animate-in fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcf6b] shadow-[0_0_6px_#ffcf6b]" /> 01 — CLEAR ACRYLIC SHELL
                      </div>
                      <div className="absolute -right-44 top-[22%] font-mono text-[9px] tracking-wider text-[#3ff0ff] bg-[#05080a]/80 border border-[#3ff0ff]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg animate-in fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcf6b] shadow-[0_0_6px_#ffcf6b]" /> 02 — GRADED CARD + WINDOW
                      </div>
                      <div className="absolute -right-44 top-[46%] font-mono text-[9px] tracking-wider text-[#3ff0ff] bg-[#05080a]/80 border border-[#3ff0ff]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg animate-in fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcf6b] shadow-[0_0_6px_#ffcf6b]" /> 03 — NFC COIL + SECURE CHIP
                      </div>
                      <div className="absolute -right-44 top-[70%] font-mono text-[9px] tracking-wider text-[#3ff0ff] bg-[#05080a]/80 border border-[#3ff0ff]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg animate-in fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcf6b] shadow-[0_0_6px_#ffcf6b]" /> 04 — MOLDED CRADLE / SPACER
                      </div>
                      <div className="absolute -right-44 top-[92%] font-mono text-[9px] tracking-wider text-[#3ff0ff] bg-[#05080a]/80 border border-[#3ff0ff]/40 px-3 py-1.5 rounded flex items-center gap-2 shadow-lg animate-in fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffcf6b] shadow-[0_0_6px_#ffcf6b]" /> 05 — BACK SHELL + SERIAL
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Stage Controls */}
              <div className="flex gap-3 justify-center flex-wrap mt-4">
                <button
                  onClick={() => setIsExploded(!isExploded)}
                  className="font-mono text-[10px] tracking-widest uppercase bg-[#3ff0ff]/10 border border-[#3ff0ff]/30 text-[#3ff0ff] px-4 py-2 rounded hover:bg-[#3ff0ff]/20 transition-all cursor-pointer"
                >
                  {isExploded ? 'Reassemble Slab' : 'Explode Layers'}
                </button>
                <button
                  onClick={() => setIsAutoCycle(!isAutoCycle)}
                  className="font-mono text-[10px] tracking-widest uppercase bg-[#3ff0ff]/10 border border-[#3ff0ff]/30 text-[#3ff0ff] px-4 py-2 rounded hover:bg-[#3ff0ff]/20 transition-all cursor-pointer"
                >
                  {isAutoCycle ? 'Auto-Cycle: ON' : 'Auto-Cycle: OFF'}
                </button>
                <button
                  onClick={() => { setIsExploded(false); setIsAutoCycle(false); setRotation({ x: -14, y: 22 }); }}
                  className="font-mono text-[10px] tracking-widest uppercase bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded hover:bg-slate-700 transition-all cursor-pointer"
                >
                  Reset View
                </button>
              </div>
              <div className="text-center font-mono text-[10px] text-slate-400 mt-2">Drag cursor over 3D rig to rotate manually</div>
            </div>

            {/* Right Info Panels */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6">
                <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 flex items-center gap-2">
                  <span className="text-[#3ff0ff]">◆</span> CONCEPT SUMMARY
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The VCA slab pairs a traditional <b>tamper-evident graded card holder</b> with an embedded <b>NFC authentication chip</b>. Tapping a phone against the slab instantly verifies the card's grade, serial, and chain of custody – no login, no app lookup, no guesswork.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6">
                <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 flex items-center gap-2">
                  <span className="text-[#3ff0ff]">◆</span> PHYSICAL SPECIFICATION
                </h3>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400">Shell Material</span>
                    <span className="text-white font-semibold">Optical-grade acrylic</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400">Dimensions</span>
                    <span className="text-white font-semibold">85mm × 130mm × 8mm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400">Chip Type</span>
                    <span className="text-white font-semibold">NFC Type 2, 13.56MHz</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400">Memory</span>
                    <span className="text-white font-semibold">Encrypted UID + record hash</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400">Seal</span>
                    <span className="text-white font-semibold">One-way tamper snap seam</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Read Range</span>
                    <span className="text-white font-semibold">~2-4cm (phone tap)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUTH FLOW */}
        {activeTab === 'flow' && (
          <div className="animate-in fade-in duration-500">
            <div className="font-mono text-xs tracking-[4px] text-[#3ff0ff] uppercase mb-6 flex items-center gap-3">
              <span>CONSUMER AUTHENTICATION PIPELINE</span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#3ff0ff]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { num: '01', title: 'TAP SLAB', desc: 'User taps standard NFC smartphone against top-right corner of VCA holder.', icon: Smartphone },
                { num: '02', title: 'CHIP RESPONSE', desc: 'Passive microchip harvests RF energy and broadcasts encrypted UID & signature.', icon: Zap },
                { num: '03', title: 'VCA LOOKUP', desc: 'Secure cloud gateway queries immutable ledger record & scan history.', icon: Shield },
                { num: '04', title: 'INSTANT RESULT', desc: 'Client displays grade, cert #, high-res slab image, and live tamper status.', icon: CheckCircle2 },
                { num: '05', title: 'RESALE PROOF', desc: 'Transfer ownership or verify escrow standing with cryptographic cert key.', icon: Lock }
              ].map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 p-6 rounded-lg flex flex-col items-center text-center gap-3 relative">
                    <span className="font-mono text-2xl font-black text-transparent [-webkit-text-stroke:1px_#ffcf6b]">{step.num}</span>
                    <div className="w-10 h-10 rounded-full bg-[#3ff0ff]/10 flex items-center justify-center text-[#3ff0ff]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-mono text-xs tracking-wider text-white font-bold">{step.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: TAMPER SHIELD */}
        {activeTab === 'tamper' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6 flex flex-col items-center">
              <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 self-start flex items-center gap-2">
                <span>◆</span> CONTINUITY TRACE SIMULATOR
              </h3>
              <p className="text-slate-400 text-xs text-center mb-6">
                Click below to simulate physical prying or cutting of the VCA sonic-weld case perimeter.
              </p>

              <div className="w-full max-w-sm h-64 border border-[#3ff0ff]/30 rounded-lg bg-[#04070a] relative flex items-center justify-center p-4">
                <svg viewBox="0 0 200 300" className={`w-32 h-48 ${isBreached ? 'breached' : ''}`}>
                  {/* Trace loop */}
                  <rect x="20" y="20" width="160" height="260" rx="8" fill="none" stroke={isBreached ? '#ff6b7a' : '#3ff0ff'} strokeWidth="2" strokeDasharray="6 4" className={isBreached ? '' : 'animate-[pulse_2s_infinite]'} />
                  {/* Chip center */}
                  <rect x="80" y="120" width="40" height="40" rx="4" fill="#0d1219" stroke="#ffcf6b" strokeWidth="2" />
                  <circle cx="100" cy="140" r="8" fill="#ffcf6b" />
                  {/* Crack path if breached */}
                  {isBreached && (
                    <path d="M20 60 L50 75 L35 110 L70 130" fill="none" stroke="#ff6b7a" strokeWidth="3" className="animate-in fade-in duration-300" />
                  )}
                </svg>

                <div className="absolute bottom-4 left-4 right-4 text-center font-mono text-[10px] text-slate-300">
                  {isBreached ? <span className="text-red-400 font-bold">⚠ CIRCUIT OPENED — PERMANENTLY BRICKED</span> : <span className="text-cyan-400">● LOOP INTACT (RESISTANCE &lt; 0.2Ω)</span>}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSimulateTamper}
                  className={`font-mono text-xs tracking-wider uppercase px-6 py-3 rounded font-bold transition-all cursor-pointer ${
                    isBreached
                      ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300 hover:bg-red-500/30 shadow-[0_0_20px_rgba(255,107,122,0.3)]'
                  }`}
                >
                  {isBreached ? 'Re-Seal Case' : 'Simulate Tamper Break'}
                </button>
              </div>
            </div>

            {/* Terminal logs */}
            <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#3ff0ff]" /> HARDWARE DIAGNOSTIC STREAM
                </h3>
                <button
                  onClick={handleRunDiagnostics}
                  className="font-mono text-[10px] bg-[#3ff0ff]/10 border border-[#3ff0ff]/30 text-[#3ff0ff] px-3 py-1 rounded hover:bg-[#3ff0ff]/25 transition-all cursor-pointer"
                >
                  Run Diagnostics
                </button>
              </div>

              <div className="bg-[#04070a] border border-[#3ff0ff]/20 rounded p-3 h-[300px] overflow-y-auto font-mono text-xs leading-relaxed space-y-2">
                {terminalLogs.map((log) => (
                  <div key={log.id} className={`flex items-start gap-2 ${log.type === 'warn' ? 'text-red-400' : log.type === 'ok' ? 'text-emerald-400' : 'text-[#3ff0ff]'}`}>
                    <span className="text-slate-500 shrink-0">[{log.time}]</span>
                    <span>{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LEDGER SYNC */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Phone mockup */}
            <div className="lg:col-span-5 bg-[#111823] border border-[#3ff0ff]/30 rounded-[32px] p-4 shadow-[0_0_40px_rgba(63,240,255,0.08)]">
              <div className="w-16 h-1.5 bg-[#3ff0ff]/20 rounded-full mx-auto mb-3" />
              <div className="bg-gradient-to-b from-[#3ff0ff]/5 to-[#0a0d12] border border-[#3ff0ff]/15 rounded-[22px] p-5">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-white font-bold">VCA MOBILE VERIFIER</span>
                  <div className={`flex items-center gap-1.5 font-mono text-[9px] px-2.5 py-1 rounded-full border ${isBreached ? 'border-red-500/40 bg-red-500/10 text-red-400' : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isBreached ? 'bg-red-400' : 'bg-cyan-400'}`} />
                    {isBreached ? 'REVOKED' : 'SECURE'}
                  </div>
                </div>

                <div className="h-36 rounded-lg mb-4 border border-[#3ff0ff]/25 bg-[repeating-linear-gradient(45deg,rgba(63,240,255,0.05)_0_10px,rgba(157,92,255,0.05)_10px_20px)] flex items-end p-3 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent`} />
                  <div className={`relative z-10 font-mono text-xs px-3 py-1.5 rounded-full border ${isBreached ? 'bg-red-950/80 border-red-500/50 text-red-400' : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-400'}`}>
                    {isBreached ? '⚠ TAMPERED SLAB' : '✓ GEM MINT 10'}
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs mb-4">
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400 text-[10px]">ITEM</span>
                    <span className="text-white font-semibold">1999 Charizard Holo #4</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#3ff0ff]/10">
                    <span className="text-slate-400 text-[10px]">CERT UID</span>
                    <span className="text-[#3ff0ff] font-semibold">VCA-9284-77X</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400 text-[10px]">LEDGER STATUS</span>
                    <span className={isBreached ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                      {isBreached ? 'FLAGGED INVALID' : 'VERIFIED IMMUTABLE'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-slate-400 tracking-wider">AUTHENTICITY CONFIDENCE</span>
                  <div className="h-2 rounded-full bg-cyan-950 overflow-hidden">
                    <div className={`h-full transition-all duration-500 ${isBreached ? 'w-[12%]' : 'w-[99.8%]'} bg-gradient-to-r from-cyan-400 to-emerald-400`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Scans ledger */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 rounded-lg p-6">
              <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 flex items-center gap-2">
                <span>◆</span> GLOBAL LEDGER STREAM (LIVE)
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {[
                  { time: '02:04:12', item: '1999 Charizard Holo #4', loc: 'Edmonton, AB', status: 'VERIFIED', ok: true },
                  { time: '01:58:30', item: '1st Ed. Shadowless Pikachu', loc: 'Tokyo, JP', status: 'VERIFIED', ok: true },
                  { time: '01:42:09', item: 'Michael Jordan Rookie #57', loc: 'Chicago, IL', status: isBreached ? 'TAMPER ALERT' : 'VERIFIED', ok: !isBreached },
                  { time: '01:15:44', item: 'Lugia 1st Edition Neo Genesis', loc: 'London, UK', status: 'VERIFIED', ok: true }
                ].map((row, idx) => (
                  <div key={idx} className={`p-3 rounded border flex justify-between items-center ${row.ok ? 'bg-[#3ff0ff]/5 border-[#3ff0ff]/20 text-slate-300' : 'bg-red-500/10 border-red-500/40 text-red-300'}`}>
                    <div>
                      <div className="text-white font-bold">{row.item}</div>
                      <div className="text-[10px] text-slate-400">{row.loc} · <span className="text-[#3ff0ff]">{row.time}</span></div>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-[10px] border ${row.ok ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-red-500/40 bg-red-500/10 text-red-400'}`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MARKET CASE */}
        {activeTab === 'market' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { val: '$42.5M+', lbl: 'Total Authenticated Volume' },
                { val: '128,400', lbl: 'Active Slabs in Circulation' },
                { val: '0.00%', lbl: 'Counterfeit / Clone Rate' },
                { val: '40+', lbl: 'Institutional Vault Partners' }
              ].map((m, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#3ff0ff]/5 to-[#0a0d12] border border-[#3ff0ff]/25 p-6 rounded-lg text-center hover:border-[#3ff0ff] transition-all">
                  <div className="font-['Orbitron',sans-serif] text-3xl font-black text-[#3ff0ff] mb-1">{m.val}</div>
                  <div className="font-mono text-xs tracking-wider text-slate-400">{m.lbl}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 p-6 rounded-lg">
                <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 flex items-center gap-2">
                  <span>◆</span> INSTITUTIONAL AUCTION HOUSES
                </h3>
                <ul className="space-y-2.5 font-mono text-xs text-slate-300">
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Instant escrow settlement without physical re-inspection.</li>
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Zero risk of case-swapping or card-trimming fraud in transit.</li>
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Automated audit trail logged directly onto immutable ledger.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#0d1219] to-[#0a0d12] border border-[#3ff0ff]/25 p-6 rounded-lg">
                <h3 className="font-mono text-xs tracking-[2.5px] text-[#ffcf6b] uppercase mb-4 flex items-center gap-2">
                  <span>◆</span> ELITE COLLECTOR BENEFITS
                </h3>
                <ul className="space-y-2.5 font-mono text-xs text-slate-300">
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Tap phone to verify high-value asset authenticity in seconds.</li>
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Photochromic tamper seal provides undeniable visual proof of breakages.</li>
                  <li className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ffcf6b]">Secure digital title transfer when selling items peer-to-peer.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <footer className="text-center mt-16 pt-6 border-t border-[#3ff0ff]/20 font-mono text-[10px] tracking-[3px] text-slate-500">
          VCA — VERIFIED CARD AUTHORITY · CONCEPT BLUEPRINT · NOT FOR PRODUCTION USE
        </footer>
      </div>
    </section>
  );
}
