import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Arrow() {
  return <span className="arrow">→</span>;
}

function PlayIcon() {
  return (
    <span className="play-icon">
      ▶
    </span>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="feature-icon-svg">
      <path
        d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="feature-icon-svg">
      <path
        d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M14 3v5h5M9 12h6M9 16h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="feature-icon-svg">
      <path
        d="M12 3l7 3v5c0 4.7-2.9 8.4-7 10-4.1-1.6-7-5.3-7-10V6l7-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="feature-icon-svg">
      <path
        d="M13 2L5 13h6l-1 9 8-12h-6l1-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatMockup() {
  return (
    <div className="mockup-wrapper">
      <div className="glow glow-blue" />
      <div className="glow glow-purple" />

      <div className="chat-mockup">
        {/* Sidebar */}
        <aside className="mock-sidebar">
          <div className="mock-brand">
            <div className="mock-brand-icon">
              <DocumentIcon />
            </div>
            <span>
              CogniDoc <b>AI</b>
            </span>
          </div>

          <button className="new-chat">
            <span>+</span>
            New Chat
          </button>

          <div className="sidebar-menu">
            <div className="sidebar-item active">
              <span>▣</span>
              Documents
            </div>

            <div className="sidebar-item">
              <span>◫</span>
              Conversations
            </div>

            <div className="sidebar-item">
              <span>⚙</span>
              Settings
            </div>
          </div>
        </aside>

        {/* Main chat */}
        <div className="mock-content">
          <div className="mock-content-header">
            <span>Chat with your documents</span>
            <span className="mock-online">
              <i />
              AI Ready
            </span>
          </div>

          <div className="question-box">
            Ask anything about your PDF...
            <span>➤</span>
          </div>

          <div className="mock-documents">
            <div className="mock-document">
              <div className="pdf-icon">PDF</div>

              <div className="document-info">
                <strong>Annual_Report_2024.pdf</strong>
                <small>2.4 MB · 12 pages</small>
              </div>

              <span className="uploaded">Uploaded</span>
            </div>

            <div className="mock-document">
              <div className="pdf-icon">PDF</div>

              <div className="document-info">
                <strong>Research_Paper.pdf</strong>
                <small>1.8 MB · 8 pages</small>
              </div>

              <span className="uploaded">Uploaded</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-icon floating-chat">
        <span>•••</span>
      </div>

      <div className="floating-icon floating-document">
        <DocumentIcon />
      </div>

      <div className="floating-icon floating-spark">
        <SparkIcon />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, children, color }) {
  return (
    <div className="feature-card">
      <div
        className="feature-icon"
        style={{ color }}
      >
        {icon}
      </div>

      <div className="feature-content">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">

      {/* =====================================
          NAVBAR
      ====================================== */}
      <header className="navbar">
        <div className="container navbar-inner">

          <button
            className="brand"
            onClick={() => navigate("/")}
          >
            <span className="brand-mark">
              <DocumentIcon />
            </span>

            <span className="brand-name">
              CogniDoc <strong>AI</strong>
            </span>
          </button>

          <nav className="desktop-nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button
              className="login-button"
              onClick={() => navigate("/login")}
            >
              <span>♙</span>
              Login
            </button>

            <button
              className="primary-button nav-get-started"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>


      {/* =====================================
          HERO
      ====================================== */}
      <section className="hero-section">
        <div className="container hero-grid">

          {/* LEFT */}
          <div className="hero-copy">

            <div className="eyebrow">
              <SparkIcon />
              <span>Enterprise AI Document Intelligence</span>
            </div>

            <h1>
              Chat with PDFs
              <br />
              Like <span>Never</span> Before.
            </h1>

            <p className="hero-description">
              Upload any PDF. Search instantly. Generate summaries.
              <br className="desktop-only" />
              Ask questions.
            </p>

            <p className="hero-powered">
              Powered by Gemini AI, OCR, ChromaDB, and
              <br className="desktop-only" />
              Neon PostgreSQL.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button hero-start"
                onClick={() => navigate("/register")}
              >
                Start Free
                <Arrow />
              </button>

              <button className="secondary-button">
                Live Demo
                <PlayIcon />
              </button>
            </div>

            <div className="hero-note">
              <span>✓</span>
              No credit card required
              <span className="dot">•</span>
              Cancel anytime
            </div>
          </div>


          {/* RIGHT */}
          <div className="hero-visual">
            <ChatMockup />
          </div>

        </div>
      </section>


      {/* =====================================
          FEATURES STRIP
      ====================================== */}
      <section className="features-strip" id="features">
        <div className="container features-grid">

          <FeatureCard
            color="#756cff"
            icon={<SparkIcon />}
            title="AI-Powered Chat"
          >
            Ask questions and get accurate answers from your documents.
          </FeatureCard>

          <FeatureCard
            color="#13a9ff"
            icon={<DocumentIcon />}
            title="Smart Summaries"
          >
            Generate concise summaries of long documents instantly.
          </FeatureCard>

          <FeatureCard
            color="#8b5cf6"
            icon={<ShieldIcon />}
            title="Secure & Private"
          >
            Your data is encrypted and never shared with third parties.
          </FeatureCard>

          <FeatureCard
            color="#14b8ff"
            icon={<LightningIcon />}
            title="Lightning Fast"
          >
            Built for speed and accuracy with modern AI models.
          </FeatureCard>

        </div>
      </section>


      {/* =====================================
          HOW IT WORKS
      ====================================== */}
      <section
        className="how-section"
        id="how-it-works"
      >
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              Simple workflow
            </span>

            <h2>
              From PDF to Answers
            </h2>

            <p>
              Everything you need to understand your documents
              faster and smarter.
            </p>
          </div>

          <div className="steps-grid">

            <div className="step-card">
              <span className="step-number">01</span>

              <div className="step-icon">
                <span>↑</span>
              </div>

              <h3>Upload PDF</h3>

              <p>
                Upload any scanned or digital PDF securely
                to your workspace.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>

              <div className="step-icon">
                <DocumentIcon />
              </div>

              <h3>AI Reads</h3>

              <p>
                OCR and Gemini automatically process
                every page.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>

              <div className="step-icon">
                <SparkIcon />
              </div>

              <h3>Smart Search</h3>

              <p>
                ChromaDB indexes your content for
                semantic retrieval.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">04</span>

              <div className="step-icon">
                <span>?</span>
              </div>

              <h3>Ask Anything</h3>

              <p>
                Get accurate answers with contextual
                document references.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================
          CTA
      ====================================== */}
      <section className="cta-section">
        <div className="container">

          <div className="cta-card">

            <div className="cta-glow" />

            <div className="cta-content">
              <span className="section-label">
                AI document intelligence
              </span>

              <h2>
                Ready to experience
                <br />
                smarter documents?
              </h2>

              <p>
                Upload your first PDF and start chatting with
                your documents using Gemini AI, OCR and
                Retrieval-Augmented Generation.
              </p>

              <div className="cta-actions">

                <button
                  className="primary-button"
                  onClick={() => navigate("/register")}
                >
                  Get Started Free
                  <Arrow />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          FOOTER
      ====================================== */}
      <footer
        className="footer"
        id="contact"
      >
        <div className="container">

          <div className="footer-grid">

            <div className="footer-brand">
              <div className="brand-name">
                CogniDoc <strong>AI</strong>
              </div>

              <p>
                Enterprise AI document intelligence
                for students, researchers and professionals.
              </p>

              <div className="footer-tech">
                <span>Gemini</span>
                <span>FastAPI</span>
                <span>ChromaDB</span>
                <span>Neon</span>
              </div>
            </div>


            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">AI Chat</a>
              <a href="#features">Smart Summaries</a>
              <a href="#features">OCR Engine</a>
              <a href="#features">Semantic Search</a>
            </div>


            <div className="footer-column" id="docs">
              <h4>Resources</h4>
              <a href="#docs">Documentation</a>
              <a href="#docs">API</a>
              <a href="#docs">GitHub</a>
              <a href="#contact">Support</a>
            </div>


            <div className="footer-column">
              <h4>Contact</h4>
              <a href="mailto:hello@cognidoc.ai">
                hello@cognidoc.ai
              </a>
              <span>India</span>
              <span>Enterprise Ready</span>
            </div>

          </div>


          <div className="footer-bottom">
            <span>
              © 2026 CogniDoc AI. All rights reserved.
            </span>

            <div>
              Built with React · FastAPI · Gemini
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}