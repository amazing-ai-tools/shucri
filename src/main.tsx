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

// God of War × Hello Kitty: a cute kitty face wearing Kratos' red war paint,
// flanked by the crossed Blades of Chaos.
function KittyOfWarLogo() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 120 120"
      role="img"
      aria-label="God of War meets Hello Kitty logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crossed Blades of Chaos behind the head */}
      <g stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round">
        <line x1="26" y1="96" x2="74" y2="22" stroke="#c2410c" strokeWidth="5" />
        <line x1="94" y1="96" x2="46" y2="22" stroke="#c2410c" strokeWidth="5" />
      </g>
      <g fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M74 22 L70 12 L80 16 L78 26 Z" />
        <path d="M46 22 L50 12 L40 16 L42 26 Z" />
      </g>

      {/* Ears */}
      <path d="M22 46 L40 14 L54 42 Z" fill="#ffffff" stroke="#be185d" strokeWidth="2" strokeLinejoin="round" />
      <path d="M98 46 L80 14 L66 42 Z" fill="#ffffff" stroke="#be185d" strokeWidth="2" strokeLinejoin="round" />

      {/* Head */}
      <ellipse cx="60" cy="66" rx="44" ry="36" fill="#ffffff" stroke="#be185d" strokeWidth="2.5" />

      {/* Kratos red war paint — diagonal slash across the left eye */}
      <path
        d="M40 34 C44 48 46 64 44 92 L52 92 C53 64 51 48 48 34 Z"
        fill="#dc2626"
        opacity="0.92"
      />

      {/* Eyes */}
      <ellipse cx="46" cy="68" rx="3.6" ry="6" fill="#1f2937" />
      <ellipse cx="74" cy="68" rx="3.6" ry="6" fill="#1f2937" />

      {/* Nose */}
      <ellipse cx="60" cy="79" rx="5" ry="3.4" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

      {/* Whiskers */}
      <g stroke="#4b5563" strokeWidth="2" strokeLinecap="round">
        <line x1="30" y1="70" x2="12" y2="66" />
        <line x1="30" y1="77" x2="11" y2="78" />
        <line x1="30" y1="84" x2="13" y2="90" />
        <line x1="90" y1="70" x2="108" y2="66" />
        <line x1="90" y1="77" x2="109" y2="78" />
        <line x1="90" y1="84" x2="107" y2="90" />
      </g>

      {/* Hello Kitty signature bow on the right ear */}
      <g>
        <path d="M84 30 L72 22 L72 40 Z" fill="#ec4899" stroke="#9d174d" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M84 30 L96 22 L96 40 Z" fill="#ec4899" stroke="#9d174d" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="84" cy="31" r="4.5" fill="#db2777" stroke="#9d174d" strokeWidth="1.5" />
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
