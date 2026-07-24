/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlueprintArtifact from './components/BlueprintArtifact';
import HowItWorks from './components/HowItWorks';
import GradingGuide from './components/GradingGuide';
import NfcSecurityExplainer from './components/NfcSecurityExplainer';
import Infographic from './components/Infographic';
import InteractiveModels from './components/InteractiveModels';
import Dashboard from './components/Dashboard';
import SubmissionForm from './components/SubmissionForm';
import Auth from './components/Auth';
import ScrollIndicator from './components/ScrollIndicator';

export default function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('vca_splash_seen')) {
      sessionStorage.setItem('vca_splash_seen', 'true');
      window.location.href = '/splash.html';
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30">
      <Header />
      <main>
        <BlueprintArtifact />
        <Hero />
        <HowItWorks />
        <GradingGuide />
        <NfcSecurityExplainer />
        <InteractiveModels />
        <Infographic />
        <SubmissionForm />
        <Dashboard />
        <Auth />
      </main>
      <ScrollIndicator />
      
      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center" id="contact">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Verified Card Authority. Secure Authentication Ledger.
        </p>
      </footer>
    </div>
  );
}


