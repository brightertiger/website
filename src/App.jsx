import BlurText from './components/BlurText'
import SpotlightCard from './components/SpotlightCard'
import FadeIn from './components/FadeIn'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.233-.036.315L12.54 14.91l6.322 8.451c.069.117.08.22.036.338z"/></svg>
)

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)

const SectionHeader = ({ children }) => (
  <FadeIn>
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-xl font-bold text-text whitespace-nowrap">{children}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  </FadeIn>
)

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-border rounded-lg text-sm text-text-secondary bg-bg-card hover:border-accent hover:text-accent hover:bg-accent-light transition-all"
  >
    {icon}
    {label}
  </a>
)

const projects = [
  { name: 'expstats', desc: 'A/B Testing Calculator & Statistical Significance for Python', tags: ['Python', 'Statistics'], url: 'https://github.com/brightertiger/expstats' },
  { name: 'pygarble', desc: 'Detect gibberish, garbled text with 99.5% precision', tags: ['Python', 'NLP'], url: 'https://github.com/brightertiger/pygarble' },
  { name: 'google-adk-demo', desc: 'LLM Agents Demo using Google ADK', tags: ['Python', 'LLM Agents'], url: 'https://github.com/brightertiger/google-adk-demo' },
  { name: 'kaggle', desc: 'Kaggle Competitions + Playground solutions', tags: ['Python', 'ML'], url: 'https://github.com/brightertiger/kaggle' },
  { name: 'lane-detection', desc: 'Lane Detection using U-Net architecture', tags: ['Jupyter', 'CV'], url: 'https://github.com/brightertiger/lane-detection' },
  { name: 'agentic-college-counselling', desc: 'AI-powered College Counseling Agent', tags: ['Python', 'Agents'], url: 'https://github.com/brightertiger/agentic-college-counselling' },
]

const competitions = [
  { rank: '#3', name: 'Jigsaw Multilingual Toxic Comment Classification', teams: '1,621 teams', category: 'NLP', medal: '\u{1F947}' },
  { rank: '#6', name: 'SIIM-ISIC Melanoma Detection', teams: '3,308 teams', category: 'Computer Vision', medal: '\u{1F947}' },
  { rank: '#16', name: 'TalkingData AdTracking Fraud Detection', teams: '3,943 teams', category: 'Fraud Detection', medal: '\u{1F947}' },
]

const articles = [
  { date: 'Jan 19', title: 'PyExpStats: AB Testing Done Right', url: 'https://brightertiger.substack.com/p/pyexpstats-ab-testing-done-right' },
  { date: 'Dec 23', title: 'PyGarble: Detect Gibberish Text In', url: 'https://brightertiger.substack.com/p/pygarble-detect-gibberish-text-in' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ===== HERO ===== */}
        <header className="pt-24 pb-12 text-center">
          <FadeIn delay={0.05}>
            <div className="w-[140px] h-[140px] rounded-full border-4 border-bg-card shadow-md mx-auto mb-6 overflow-hidden">
              <img
                src="/assets/image.png"
                alt="Ujjwal Singh Rao"
                width="140"
                height="140"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <BlurText
            text="Ujjwal Singh Rao"
            className="text-4xl font-bold text-text tracking-tight mb-1 justify-center"
            delay={60}
            animateBy="words"
            direction="top"
            tag="h1"
          />

          <FadeIn delay={0.3}>
            <p className="font-mono text-sm text-text-muted mb-4">
              @brightertiger &middot; BrighterTiger &middot; 0xbrightertiger
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[560px] mx-auto mb-6">
              Data Scientist &amp; Kaggle Master building intelligent systems with ML, Deep Learning, and LLM Agents
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex justify-center gap-10 mb-6">
              <div className="text-center">
                <div className="font-mono text-xl font-semibold text-text">11</div>
                <div className="text-xs text-text-muted uppercase tracking-wide">Repos</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-xl font-semibold text-text">17</div>
                <div className="text-xs text-text-muted uppercase tracking-wide">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-xl font-semibold text-text">79</div>
                <div className="text-xs text-text-muted uppercase tracking-wide">Following</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex justify-center gap-2.5 flex-wrap">
              <SocialLink href="https://github.com/brightertiger" icon={<GithubIcon />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/brightertiger/" icon={<LinkedInIcon />} label="LinkedIn" />
              <SocialLink href="https://kaggle.com/brightertiger" icon={<KaggleIcon />} label="Kaggle" />
              <SocialLink href="https://brightertiger.substack.com" icon={<SubstackIcon />} label="Substack" />
              <SocialLink href="https://twitter.com/brightertiger" icon={<TwitterIcon />} label="Twitter" />
            </div>
          </FadeIn>
        </header>

        {/* ===== OPEN SOURCE ===== */}
        <section className="py-12">
          <SectionHeader>Open Source</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <FadeIn key={project.name} delay={0.05 * i}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <SpotlightCard className="p-5 h-full flex flex-col" spotlightColor="rgba(37, 99, 235, 0.08)">
                    <div className="font-mono text-[15px] font-medium text-accent mb-1.5">{project.name}</div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">{project.desc}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-accent-light text-accent rounded-[5px] font-medium">{tag}</span>
                      ))}
                    </div>
                  </SpotlightCard>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== KAGGLE ===== */}
        <section className="py-12">
          <SectionHeader>Kaggle</SectionHeader>

          <FadeIn delay={0.05}>
            <div className="flex gap-4 mb-8 flex-wrap">
              {[
                { emoji: '\u{1F947}', count: 3, label: 'Gold' },
                { emoji: '\u{1F948}', count: 12, label: 'Silver' },
                { emoji: '\u{1F949}', count: 4, label: 'Bronze' },
              ].map(medal => (
                <div key={medal.label} className="flex items-center gap-2.5 bg-bg-card border border-border rounded-lg px-4 py-2.5">
                  <span className="text-xl">{medal.emoji}</span>
                  <span className="font-mono font-semibold text-text">{medal.count}</span>
                  <span className="text-sm text-text-muted">{medal.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <div>
            {competitions.map((comp, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className={`flex items-start gap-4 py-4 ${i < competitions.length - 1 ? 'border-b border-border' : ''}`}>
                  <span className="font-mono text-lg font-semibold text-accent min-w-[2.5rem] shrink-0">{comp.rank}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-text mb-0.5">{comp.name}</div>
                    <div className="text-sm text-text-muted flex items-center gap-2">
                      <span>{comp.teams}</span>
                      <span className="w-[3px] h-[3px] bg-text-muted rounded-full" />
                      <span>{comp.category}</span>
                    </div>
                  </div>
                  <span className="text-xl shrink-0">{comp.medal}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== WRITING ===== */}
        <section className="py-12">
          <SectionHeader>Writing</SectionHeader>
          <div>
            {articles.map((article, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 py-4 group ${i < articles.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="font-mono text-sm text-text-muted min-w-[3.5rem] shrink-0 pt-0.5">{article.date}</span>
                  <span className="text-[15px] font-medium text-text group-hover:text-accent transition-colors leading-snug">{article.title}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-border py-10 mt-4">
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              ['GitHub', 'https://github.com/brightertiger'],
              ['Twitter', 'https://twitter.com/brightertiger'],
              ['Kaggle', 'https://kaggle.com/brightertiger'],
              ['Substack', 'https://brightertiger.substack.com'],
              ['LinkedIn', 'https://www.linkedin.com/in/brightertiger/'],
            ].map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-accent transition-colors">
                {label}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </div>
  )
}
