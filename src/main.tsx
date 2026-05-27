import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bug, Rocket, ShieldCheck } from 'lucide-react';
import './styles.css';

const appName = import.meta.env.VITE_APP_NAME || 'New Amazing App';
const appDomain = import.meta.env.VITE_APP_DOMAIN || window.location.hostname;
const bugzeroAppKey = import.meta.env.VITE_BUGZERO_APP_KEY || '';
const bugzeroWidgetUrl =
  import.meta.env.VITE_BUGZERO_WIDGET_URL || 'https://bugzero.amazing-ai.tools/widget.js';

type Member = {
  emoji: string;
  name: string;
  role: string;
};

// The Fellowship — shucri squad (Lord of the Rings theme).
const fellowship: Member[] = [
  { emoji: '👔', name: 'Gandalf', role: 'CEO' },
  { emoji: '📋', name: 'Aragorn', role: 'PM' },
  { emoji: '📣', name: 'Legolas', role: 'Marketing' },
  { emoji: '🔧', name: 'Gimli', role: 'Backend' },
  { emoji: '🎨', name: 'Galadriel', role: 'Frontend' },
  { emoji: '🧪', name: 'Samwise', role: 'QA' },
  { emoji: '🔍', name: 'Elrond', role: 'Reviewer' },
  { emoji: '🤖', name: 'Saruman', role: 'AI / Runner' },
  { emoji: '🏗️', name: 'Sauron', role: 'Infra / DevOps' },
  { emoji: '🔒', name: 'Saruman 🔮', role: 'Security' },
];

function ensureBugZeroWidget() {
  if (!bugzeroAppKey || document.querySelector('script[data-bugzero-widget]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = bugzeroWidgetUrl;
  script.async = true;
  script.dataset.bugzeroWidget = 'true';
  script.dataset.appKey = bugzeroAppKey;
  document.body.appendChild(script);
}

// God of War × Hello Kitty — Kitty-led: a soft Hello Kitty is the star, with
// God of War reduced to two subtle nods — a slim Kratos red war-stripe over one
// eye and a tiny crossed Blades of Chaos charm nestled in her signature bow.
function KittyOfWarLogo() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 120 120"
      role="img"
      aria-label="Hello Kitty with a subtle Kratos war-stripe logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ears */}
      <path d="M20 44 L38 12 L54 42 Z" fill="#ffffff" stroke="#be185d" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M100 44 L82 12 L66 42 Z" fill="#ffffff" stroke="#be185d" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Head */}
      <ellipse cx="60" cy="64" rx="46" ry="38" fill="#ffffff" stroke="#be185d" strokeWidth="2.5" />

      {/* Blush cheeks */}
      <ellipse cx="33" cy="74" rx="6.5" ry="3.8" fill="#fbb6ce" opacity="0.85" />
      <ellipse cx="87" cy="74" rx="6.5" ry="3.8" fill="#fbb6ce" opacity="0.85" />

      {/* Kratos red war-stripe — slim, framing the left eye */}
      <path d="M43 36 C46 50 46 62 44 86 L49 86 C50 62 50 50 47.5 36 Z" fill="#dc2626" opacity="0.9" />

      {/* Eyes */}
      <ellipse cx="46" cy="66" rx="4" ry="6.4" fill="#1f2937" />
      <ellipse cx="74" cy="66" rx="4" ry="6.4" fill="#1f2937" />

      {/* Nose */}
      <ellipse cx="60" cy="76" rx="5" ry="3.4" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

      {/* Whiskers */}
      <g stroke="#9ca3af" strokeWidth="2" strokeLinecap="round">
        <line x1="29" y1="66" x2="10" y2="62" />
        <line x1="29" y1="73" x2="9" y2="74" />
        <line x1="29" y1="80" x2="11" y2="86" />
        <line x1="91" y1="66" x2="110" y2="62" />
        <line x1="91" y1="73" x2="111" y2="74" />
        <line x1="91" y1="80" x2="109" y2="86" />
      </g>

      {/* Signature bow on the right ear, with a tiny crossed Blades of Chaos charm */}
      <g>
        <path d="M86 30 L72 21 L72 41 Z" fill="#ec4899" stroke="#9d174d" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M86 30 L100 21 L100 41 Z" fill="#ec4899" stroke="#9d174d" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="86" cy="30" r="5" fill="#db2777" stroke="#9d174d" strokeWidth="1.5" />
        {/* crossed Blades of Chaos — tiny gold X peeking from the knot */}
        <g stroke="#fde68a" strokeWidth="1.6" strokeLinecap="round">
          <line x1="80" y1="36" x2="92" y2="24" />
          <line x1="92" y1="36" x2="80" y2="24" />
        </g>
      </g>
    </svg>
  );
}

function App() {
  React.useEffect(() => {
    ensureBugZeroWidget();
  }, []);

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <Rocket size={16} />
            Static frontend on amazing-ai.tools
          </span>
          <div className="hero-title">
            <KittyOfWarLogo />
            <h1>{appName}</h1>
          </div>
          <p>
            This app was created by BugZero. It is ready for product copy,
            real screens, GitHub Actions deploys, and in-app bug reporting.
          </p>
          <div className="actions">
            <a href={`https://${appDomain}`} className="button primary">
              Open production URL
            </a>
            <a href="https://bugzero.amazing-ai.tools" className="button secondary">
              BugZero dashboard
            </a>
          </div>
        </div>
      </section>

      <section className="status-grid" aria-label="Provisioned capabilities">
        <article>
          <Bug size={22} />
          <h2>BugZero widget</h2>
          <p>Embedded automatically with this app's key.</p>
        </article>
        <article>
          <ShieldCheck size={22} />
          <h2>Azure Static Web Apps</h2>
          <p>Deployed from GitHub Actions on every main branch update.</p>
        </article>
        <article>
          <Rocket size={22} />
          <h2>Amazing Chat ready</h2>
          <p>Your app agent can evolve this template into the product you need.</p>
        </article>
      </section>

      <section className="team" aria-label="The Fellowship squad">
        <div className="team-head">
          <span className="eyebrow team-eyebrow">The Pink Fellowship 🌸</span>
          <h2>Meet the squad</h2>
          <p>Ten agents — one quest. The Lord of the Rings crew shipping this app.</p>
        </div>
        <div className="team-grid">
          {fellowship.map((member) => (
            <article className="team-card" key={`${member.name}-${member.role}`}>
              <span className="team-emoji" aria-hidden="true">
                {member.emoji}
              </span>
              <div className="team-meta">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
