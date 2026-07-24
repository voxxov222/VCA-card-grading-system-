# Verified Card Authority (VCA)

## Video Demo
<video src="https://github.com/user-attachments/assets/vca-demo-video.mp4" controls="controls" width="100%" style="max-width: 800px;">
  Your browser does not support the video tag.
</video>
*Above: VCA product pitch and demo video.*

![VCA Card Authentication Overview](./src/assets/images/vca_overview_1784577595886.jpg)
*Above: The VCA Card Authentication platform overview and interactive graded slab view.*

**Verified Card Authority (VCA)** is revolutionizing the collectible grading industry by introducing the world's first **Active NFC Cryptographic Seal**. We provide absolute integrity, immutable registry tracking, and tamper-proof security for high-value collector items (TCG, Sports Cards, and more).

## Leading the Industry with NFC Technology

At VCA, we are setting a new standard for collectible security and leading the industry by closing the loop on high-value collectible fraud. Our target audience encompasses high-end auction houses, institutional vaulting services, elite collectors, and trading card authentication platforms who demand zero-trust asset verification.

Even if card cases are perfectly reconstructed physically by bad actors, their digital ledger keys are severed permanently upon any physical opening. We are replacing subjective visual-only authentication with undeniable, mathematically backed cryptographic proof.

![VCA Case Diagnostics](./src/assets/images/vca_diagnostics_1784577608909.jpg)
*Above: Passive NFC Microchip loop architecture protecting the sonic-welded slab.*

Our proprietary case architecture integrates physical airtight chemical sensors with passive microchip circuits:

### 1. NFC Microchip Loop Thread
A microscopic continuous loop trace runs inside the sonic-weld lining of the VCA holder. It acts as an electronic tamper indicator. Prying, cutting, or drilling severs this path permanently.

### 2. Passive, Battery-Free Energy
The security circuit is passive and does not rely on an integrated battery. It dynamically harvests RF energy from the scanner device (smartphone or handheld reader) when placed nearby.

![VCA Breach Alert System](./src/assets/images/vca_breach_1784577622387.jpg)
*Above: Live tamper simulation demonstrating an immediate breach alert and ledger invalidation.*

### 3. Photochromic VCA Black-out Foil
If the airtight seal is broken, the internal holographic "VCA" watermark undergoes oxygen-induced photochromic oxidation. It changes permanently from a shimmering rainbow color to solid carbon black.

### 4. Cryptographic Ledger Record
Each successful scan is cross-checked against our global secure public database. Cloned microchips are detected instantly if physical location sequences or scan count signatures clash.

---

## Core Highlights

* **Advanced Cryptographic Grading:** A meticulous, multi-layered approach to authentication combining cutting-edge technology with decades of expert knowledge.
* **Real-Time Ledger:** Live database tracking authenticated collectibles, finished slab images, and current delivery states (Processing, In Transit, Delivered).
* **Interactive Case Diagnostics:** Users can simulate physical tampering or scan the embedded NFC transponder chip right from the platform to understand the underlying security mechanics.
* **Uncompromising Standards:** Every card undergoes double-blind testing. Two separate authenticators must grade the card independently before any score is registered on the global registry ledger.

---

## VCA — NFC Slab Blueprint (HTML Spec)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>VCA — NFC Slab Blueprint</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800;900&family=Rajdhani:wght@400;500;600;700&display=swap');

:root{
  --void:#050608;
  --void-2:#0a0d12;
  --panel:#0d1219;
  --cyan:#3ff0ff;
  --cyan-dim:#1a7a85;
  --violet:#9d5cff;
  --gold:#ffcf6b;
  --gold-dim:#8a6f2e;
  --glass:rgba(63,240,255,0.06);
  --line:rgba(63,240,255,0.25);
  --text:#dff6f8;
  --text-dim:#7fa3a8;
}

*{box-sizing:border-box;margin:0;padding:0;}

body{
  background:
    radial-gradient(ellipse at 20% 0%, rgba(157,92,255,0.08), transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(63,240,255,0.08), transparent 50%),
    var(--void);
  color:var(--text);
  font-family:'Rajdhani',sans-serif;
  min-height:100vh;
  overflow-x:hidden;
  position:relative;
}

body::before{
  content:'';
  position:fixed;
  inset:0;
  background-image:
    linear-gradient(rgba(63,240,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63,240,255,0.035) 1px, transparent 1px);
  background-size:42px 42px;
  pointer-events:none;
  z-index:0;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 75%);
}

.scanline{
  position:fixed; inset:0; pointer-events:none; z-index:50; mix-blend-mode:overlay;
  background:repeating-linear-gradient(0deg, rgba(63,240,255,0.03) 0px, rgba(63,240,255,0.03) 1px, transparent 1px, transparent 3px);
}

.wrap{position:relative; z-index:1; max-width:1280px; margin:0 auto; padding:36px 28px 90px;}

/* HEADER */
header{
  display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:18px;
  border-bottom:1px solid var(--line); padding-bottom:20px; margin-bottom:34px;
}
.header-left{display:flex; align-items:center; gap:20px;}
.vca-logo{
  width:74px; height:74px; flex-shrink:0; position:relative;
  filter:drop-shadow(0 0 10px rgba(63,240,255,0.35));
}
.vca-logo svg{width:100%; height:100%; display:block;}
.vca-logo .holo-shimmer{
  animation:holoShift 5s ease-in-out infinite;
}
@keyframes holoShift{
  0%,100%{ filter:hue-rotate(0deg) brightness(1); }
  50%{ filter:hue-rotate(35deg) brightness(1.25); }
}
.logo-mark{position:relative;}
.logo-mark::after{
  content:''; position:absolute; inset:-6px; border-radius:50%;
  background:conic-gradient(from 0deg, transparent, rgba(63,240,255,0.35), transparent 30%);
  animation:rotateGlow 4s linear infinite; z-index:-1; opacity:.7;
}
@keyframes rotateGlow{ to{ transform:rotate(360deg); } }
.brand-tag{
  font-family:'Orbitron',sans-serif; font-size:11px; letter-spacing:6px; color:var(--gold); text-transform:uppercase;
  display:flex; align-items:center; gap:10px; margin-bottom:8px;
}
.brand-tag::before{content:'';width:22px;height:1px;background:var(--gold);}
h1{
  font-family:'Orbitron',sans-serif; font-weight:900; font-size:clamp(28px,4vw,46px);
  letter-spacing:2px; line-height:1.05;
  background:linear-gradient(120deg,#eafeff 0%, var(--cyan) 45%, var(--violet) 100%);
  -webkit-background-clip:text; background-clip:text; color:transparent;
}
.subhead{color:var(--text-dim); font-size:15px; letter-spacing:1px; margin-top:8px; max-width:560px;}
.header-meta{text-align:right; font-family:'Orbitron',sans-serif; font-size:10px; color:var(--text-dim); letter-spacing:2px;}
.header-meta div{margin-bottom:4px;}
.status-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan);margin-right:6px;animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.35;}}
.sys-status{
  color:var(--cyan); border:1px solid rgba(63,240,255,0.35); border-radius:20px; padding:4px 12px;
  display:inline-flex; align-items:center; background:rgba(63,240,255,0.05);
  transition:.35s;
}
.sys-status.breached{
  color:#ff6b7a; border-color:rgba(255,107,122,0.45); background:rgba(255,107,122,0.06);
}
.sys-status.breached .status-dot{background:#ff6b7a; box-shadow:0 0 8px #ff6b7a;}

/* futuristic top glow sweep across the whole page */
.glow-sweep{
  position:fixed; top:0; left:-30%; width:30%; height:2px; z-index:40; pointer-events:none;
  background:linear-gradient(90deg, transparent, var(--cyan), transparent);
  box-shadow:0 0 12px 2px rgba(63,240,255,0.6);
  animation:sweepAcross 7s linear infinite;
  opacity:.7;
}
@keyframes sweepAcross{ to{ left:130%; } }

.noise-overlay{
  position:fixed; inset:0; z-index:2; pointer-events:none; opacity:0.035; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* TABS */
.tabs{display:flex; gap:2px; margin-bottom:28px; border:1px solid var(--line); width:fit-content; border-radius:3px; overflow:hidden;}
.tab-btn{
  font-family:'Orbitron',sans-serif; font-size:11px; letter-spacing:2px; text-transform:uppercase;
  background:transparent; color:var(--text-dim); border:none; padding:12px 26px; cursor:pointer;
  transition:.25s; border-right:1px solid var(--line);
}
.tab-btn:last-child{border-right:none;}
.tab-btn:hover{color:var(--cyan);}
.tab-btn.active{background:linear-gradient(180deg, rgba(63,240,255,0.14), rgba(63,240,255,0.02)); color:var(--cyan); box-shadow:inset 0 -2px 0 var(--cyan);}

.view{display:none;}
.view.active{display:block; animation:fadein .5s ease both;}
@keyframes fadein{from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);}}

/* ================= HERO 3D STAGE ================= */
.stage-section{
  display:grid; grid-template-columns: 1.15fr 0.85fr; gap:30px; margin-bottom:40px;
}
@media(max-width:900px){.stage-section{grid-template-columns:1fr;}}

.stage-card{
  background:linear-gradient(160deg, var(--panel), var(--void-2));
  border:1px solid var(--line); border-radius:6px; padding:26px; position:relative; overflow:hidden;
  min-height:520px; display:flex; flex-direction:column;
}
.stage-card::before{
  content:'FIG.01 — ASSEMBLY'; position:absolute; top:14px; right:18px;
  font-family:'Orbitron',sans-serif; font-size:9px; letter-spacing:3px; color:var(--gold-dim);
}
.corner{position:absolute; width:16px; height:16px; border:1px solid var(--cyan); opacity:.6;}
.corner.tl{top:10px;left:10px;border-right:none;border-bottom:none;}
.corner.tr{top:10px;right:10px;border-left:none;border-bottom:none;}
.corner.bl{bottom:10px;left:10px;border-right:none;border-top:none;}
.corner.br{bottom:10px;right:10px;border-left:none;border-top:none;}

.stage-3d{
  flex:1; display:flex; align-items:center; justify-content:center;
  perspective:1400px; position:relative;
}

.slab-rig{
  width:260px; height:370px; position:relative; transform-style:preserve-3d;
  transform: rotateX(-14deg) rotateY(22deg);
  transition:transform .15s ease-out;
  cursor:grab;
}
.layer{
  position:absolute; inset:0; transform-style:preserve-3d;
  transition:transform .7s cubic-bezier(.2,.9,.25,1), opacity .5s;
  border-radius:10px;
}
/* front acrylic shell */
.layer-front{
  background:linear-gradient(135deg, rgba(63,240,255,0.10), rgba(157,92,255,0.05) 60%, rgba(63,240,255,0.14));
  border:1px solid rgba(63,240,255,0.55);
  box-shadow: 0 0 30px rgba(63,240,255,0.15), inset 0 0 40px rgba(63,240,255,0.06);
  transform:translateZ(30px);
  backdrop-filter:blur(1px);
}
.layer-front::after{
  content:''; position:absolute; inset:0; border-radius:10px;
  background:linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.10) 45%, transparent 60%);
}
.shell-seal{
  position:absolute; top:10px; right:10px; width:34px; height:34px; opacity:0.85;
  filter:drop-shadow(0 0 4px rgba(63,240,255,0.5));
  animation:holoShift 5s ease-in-out infinite;
}
.shell-seal svg{width:100%;height:100%;}
/* card */
.layer-card{
  transform:translateZ(15px);
  background:linear-gradient(160deg,#1c2430,#0c1015 60%);
  border:1px solid rgba(255,207,107,0.35);
  display:flex; align-items:center; justify-content:center; flex-direction:column; gap:6px;
  box-shadow:inset 0 0 30px rgba(0,0,0,0.6);
}
.layer-card .card-face{
  width:78%; height:88%; border:1px solid rgba(157,92,255,0.4); border-radius:6px;
  background:
    repeating-linear-gradient(45deg, rgba(157,92,255,0.05) 0 6px, transparent 6px 12px),
    linear-gradient(160deg,#151b24,#090b0e);
  display:flex; align-items:center; justify-content:center;
  font-family:'Orbitron',sans-serif; color:var(--violet); font-size:11px; letter-spacing:2px; text-align:center; padding:10px;
}
/* NFC chip module */
.layer-nfc{
  transform:translateZ(0px);
  display:flex; align-items:center; justify-content:center;
}
.nfc-coil{
  width:64px; height:64px; border-radius:50%;
  border:2px dashed var(--gold);
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 0 22px rgba(255,207,107,0.5);
  animation:spin 6s linear infinite;
  position:relative;
}
.nfc-coil::before{content:'';position:absolute; inset:10px; border-radius:50%; border:1px solid var(--gold); opacity:.6;}
.nfc-chip-core{width:16px;height:16px;background:var(--gold); border-radius:3px; box-shadow:0 0 14px var(--gold);}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
/* cradle */
.layer-cradle{
  transform:translateZ(-15px);
  background:linear-gradient(160deg, rgba(157,92,255,0.08), rgba(10,13,18,0.9));
  border:1px solid rgba(157,92,255,0.3);
}
/* back shell */
.layer-back{
  transform:translateZ(-30px);
  background:linear-gradient(200deg, rgba(10,13,18,0.98), rgba(20,10,30,0.9));
  border:1px solid rgba(63,240,255,0.2);
}
.layer-back .serial{
  position:absolute; bottom:14px; left:0; right:0; text-align:center;
  font-family:'Orbitron',sans-serif; font-size:8px; letter-spacing:2px; color:var(--text-dim);
}

.slab-rig.exploded .layer-front{transform:translateZ(160px) translateY(-40px);}
.slab-rig.exploded .layer-card{transform:translateZ(80px) translateY(-14px);}
.slab-rig.exploded .layer-nfc{transform:translateZ(15px);}
.slab-rig.exploded .layer-cradle{transform:translateZ(-60px) translateY(14px);}
.slab-rig.exploded .layer-back{transform:translateZ(-140px) translateY(40px);}

.leader{
  position:absolute; font-family:'Orbitron',sans-serif; font-size:9px; letter-spacing:1.5px;
  color:var(--cyan); white-space:nowrap; opacity:0; transform:translateX(-8px);
  transition:opacity .45s ease, transform .45s ease;
  display:flex; align-items:center; gap:8px;
  background:rgba(5,8,10,0.6); border:1px solid rgba(63,240,255,0.35); border-radius:3px;
  padding:5px 12px 5px 8px; backdrop-filter:blur(2px);
  box-shadow:0 0 12px rgba(63,240,255,0.15);
}
.slab-rig.exploded .leader{opacity:1; transform:translateX(0);}
.leader::before{
  content:''; width:6px; height:6px; border-radius:50%; background:var(--gold); flex-shrink:0;
  box-shadow:0 0 6px var(--gold); animation:leaderBlink 1.6s ease-in-out infinite;
}
.leader.l1{top:-6%; left:104%; transition-delay:.10s;}
.leader.l2{top:16%; left:104%; transition-delay:.28s;}
.leader.l3{top:44%; left:104%; transition-delay:.46s;}
.leader.l4{top:68%; left:104%; transition-delay:.64s;}
.leader.l5{top:92%; left:104%; transition-delay:.82s;}
@keyframes leaderBlink{0%,100%{opacity:1;}50%{opacity:.3;}}

.stage-controls{
  display:flex; gap:10px; justify-content:center; margin-top:18px; flex-wrap:wrap;
}
.ctrl-btn{
  font-family:'Orbitron',sans-serif; font-size:10px; letter-spacing:2px; text-transform:uppercase;
  background:rgba(63,240,255,0.06); border:1px solid var(--line); color:var(--cyan);
  padding:10px 18px; border-radius:3px; cursor:pointer; transition:.2s; position:relative; overflow:hidden;
}
.ctrl-btn::before{
  content:''; position:absolute; top:0; left:-60%; width:40%; height:100%;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transform:skewX(-20deg); transition:.5s;
}
.ctrl-btn:hover::before{ left:130%; }
.ctrl-btn:hover{background:rgba(63,240,255,0.16); box-shadow:0 0 18px rgba(63,240,255,0.35); border-color:var(--cyan); transform:translateY(-1px);}
.ctrl-btn.danger{border-color:rgba(255,107,122,0.4); color:#ff6b7a;}
.ctrl-btn.danger:hover{background:rgba(255,107,122,0.14); box-shadow:0 0 18px rgba(255,107,122,0.35); border-color:#ff6b7a;}
.hint{text-align:center; font-size:11px; color:var(--text-dim); margin-top:10px; letter-spacing:1px;}

/* SIDE INFO PANEL */
.info-stack{display:flex; flex-direction:column; gap:16px;}
.info-panel{
  background:linear-gradient(160deg, var(--panel), var(--void-2));
  border:1px solid var(--line); border-radius:6px; padding:20px 22px; position:relative;
  transition:.3s;
}
.info-panel:hover{ box-shadow:0 0 24px rgba(63,240,255,0.10); border-color:rgba(63,240,255,0.4); }
.info-panel h3{
  font-family:'Orbitron',sans-serif; font-size:12px; letter-spacing:2.5px; color:var(--gold);
  margin-bottom:12px; text-transform:uppercase; display:flex; align-items:center; gap:8px;
}
.info-panel h3::before{content:'◆'; font-size:9px; color:var(--cyan);}
.spec-row{display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px dashed rgba(63,240,255,0.15); font-size:13.5px;}
.spec-row span:first-child{color:var(--text-dim);}
.spec-row span:last-child{color:var(--text); font-weight:600;}

.tagline{font-size:14px; line-height:1.6; color:var(--text-dim);}
.tagline b{color:var(--cyan); font-weight:600;}

/* ============ AUTH FLOW ============ */
.flow-section{margin-bottom:40px;}
.section-title{
  font-family:'Orbitron',sans-serif; font-size:13px; letter-spacing:4px; color:var(--cyan);
  text-transform:uppercase; margin-bottom:18px; display:flex; align-items:center; gap:14px;
}
.section-title::after{content:''; flex:1; height:1px; background:linear-gradient(90deg, var(--line), transparent);}

.flow-grid{display:grid; grid-template-columns:repeat(5,1fr); gap:0; align-items:stretch;}
@media(max-width:900px){.flow-grid{grid-template-columns:1fr; gap:14px;}}
.flow-step{
  background:linear-gradient(160deg, var(--panel), var(--void-2)); border:1px solid var(--line);
  padding:20px 16px; position:relative; text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px;
}
.flow-step .num{
  font-family:'Orbitron',sans-serif; font-size:22px; font-weight:900; color:transparent;
  -webkit-text-stroke:1px var(--gold); line-height:1;
}
.flow-step h4{font-family:'Orbitron',sans-serif; font-size:11px; letter-spacing:1.5px; color:var(--text);}
.flow-step p{font-size:12.5px; color:var(--text-dim); line-height:1.5;}
.flow-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;}
.arrow-connector{
  display:flex; align-items:center; justify-content:center; color:var(--cyan); font-size:18px;
  background:var(--void-2); border-top:1px solid var(--line); border-bottom:1px solid var(--line);
}
@media(max-width:900px){.arrow-connector{display:none;}}

/* ============ LAYER LEGEND GRID ============ */
.legend-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px; margin-bottom:40px;}
.legend-card{
  background:linear-gradient(160deg, var(--panel), var(--void-2)); border:1px solid var(--line); border-radius:6px;
  padding:18px; position:relative; overflow:hidden; transition:.3s;
}
.legend-card:hover{ border-color:rgba(157,92,255,0.5); box-shadow:0 0 22px rgba(157,92,255,0.12); transform:translateY(-2px); }
.legend-card .chip-num{
  position:absolute; top:12px; right:14px; font-family:'Orbitron',sans-serif; font-size:26px; font-weight:900;
  color:rgba(63,240,255,0.10);
}
.legend-card h4{font-family:'Orbitron',sans-serif; font-size:12px; letter-spacing:1.5px; color:var(--violet); margin-bottom:8px;}
.legend-card p{font-size:12.5px; color:var(--text-dim); line-height:1.55;}

/* ============ MARKET / INVESTOR PANELS ============ */
.metrics-row{display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:30px;}
@media(max-width:800px){.metrics-row{grid-template-columns:repeat(2,1fr);}}
.metric-box{
  background:linear-gradient(160deg, rgba(63,240,255,0.05), var(--void-2)); border:1px solid var(--line);
  padding:18px; text-align:center; border-radius:6px; transition:.3s;
}
.metric-box:hover{ border-color:var(--cyan); box-shadow:0 0 20px rgba(63,240,255,0.15); }
.metric-box .val{font-family:'Orbitron',sans-serif; font-size:26px; font-weight:800; color:var(--cyan);}
.metric-box .lbl{font-size:11px; color:var(--text-dim); letter-spacing:1px; margin-top:4px;}

.two-col{display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:36px;}
@media(max-width:800px){.two-col{grid-template-columns:1fr;}}
.text-panel{background:linear-gradient(160deg, var(--panel), var(--void-2)); border:1px solid var(--line); border-radius:6px; padding:22px;}
.text-panel ul{list-style:none; display:flex; flex-direction:column; gap:10px; margin-top:10px;}
.text-panel li{font-size:13.5px; color:var(--text-dim); padding-left:18px; position:relative; line-height:1.5;}
.text-panel li::before{content:'▸'; position:absolute; left:0; color:var(--gold);}

footer{
  text-align:center; margin-top:50px; padding-top:20px; border-top:1px solid var(--line);
  font-family:'Orbitron',sans-serif; font-size:10px; letter-spacing:3px; color:var(--text-dim);
}

/* ============ TAMPER SHIELD ============ */
.tamper-readout{
  width:100%; max-width:280px; margin:14px auto 4px; display:flex; flex-direction:column; gap:6px;
  font-family:'Orbitron',sans-serif; font-size:10.5px; letter-spacing:1px;
}
.readout-row{
  display:flex; justify-content:space-between; padding:8px 12px; border:1px solid var(--line);
  border-radius:3px; background:rgba(63,240,255,0.04); color:var(--text-dim); transition:.4s;
}
.readout-row span:last-child{color:var(--cyan); font-weight:700;}
.readout-row.alert{border-color:rgba(255,107,122,0.5); background:rgba(255,107,122,0.08);}
.readout-row.alert span:last-child{color:#ff6b7a;}

#continuityPath{ animation:flowDash 2.4s linear infinite; }
@keyframes flowDash{ to{ stroke-dashoffset:-102; } }

#tamperSvg.breached #continuityPath{ animation:none; opacity:0.12; stroke-dasharray:none; }
#tamperSvg.breached #crackPath{ opacity:1; stroke-width:3; animation:crackFlash .5s ease-out; }
#tamperSvg.breached #spark1{ r:4; opacity:1; animation:sparkPop .6s ease-out; }
#tamperSvg.breached #spark2{ r:3; opacity:1; animation:sparkPop .6s ease-out .1s; }
@keyframes crackFlash{ from{ stroke-width:0; } to{ stroke-width:3; } }
@keyframes sparkPop{ 0%{ opacity:1; } 70%{ opacity:.6; } 100%{ opacity:0; r:0; } }

.terminal{
  background:#04070a; border:1px solid rgba(63,240,255,0.2); border-radius:4px; padding:12px 14px;
  height:190px; overflow-y:auto; font-family:'Consolas','Courier New',monospace; font-size:11.5px;
  line-height:1.7; color:var(--cyan);
}
.terminal .log-line{opacity:0; animation:logIn .35s forwards;}
.terminal .log-line.warn{color:#ff6b7a;}
.terminal .log-line.ok{color:#7effa0;}
.terminal .log-line .ts{color:var(--text-dim); margin-right:8px;}
@keyframes logIn{ from{opacity:0; transform:translateY(4px);} to{opacity:1; transform:translateY(0); } }
.terminal::-webkit-scrollbar{width:5px;}
.terminal::-webkit-scrollbar-thumb{background:rgba(63,240,255,0.3); border-radius:3px;}

/* ============ TOAST ============ */
.toast{
  position:fixed; top:22px; right:22px; z-index:100; display:flex; gap:12px; align-items:flex-start;
  background:linear-gradient(160deg, rgba(20,8,10,0.95), rgba(10,5,6,0.95));
  border:1px solid rgba(255,107,122,0.5); border-radius:6px; padding:14px 18px; max-width:300px;
  box-shadow:0 0 30px rgba(255,107,122,0.25), 0 8px 24px rgba(0,0,0,0.5);
  transform:translateX(120%); opacity:0; transition:transform .45s cubic-bezier(.2,.9,.25,1), opacity .45s;
}
.toast.show{ transform:translateX(0); opacity:1; }
.toast-icon{font-size:20px; color:#ff6b7a; text-shadow:0 0 10px rgba(255,107,122,0.6); flex-shrink:0;}
.toast-title{font-family:'Orbitron',sans-serif; font-size:11px; letter-spacing:1.5px; color:#ff6b7a; margin-bottom:4px;}
.toast-body{font-size:12px; color:var(--text-dim); line-height:1.4;}
</style>
</head>
<body>
<!-- Blueprint Spec Included -->
</body>
</html>
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

