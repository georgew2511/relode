'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const launchDate = new Date('2026-01-01');
  const today = new Date();

  const daysSinceLaunch = Math.floor(
    (today.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const monthsSinceLaunch =
    (today.getFullYear() - launchDate.getFullYear()) * 12 +
    (today.getMonth() - launchDate.getMonth());

  const weeksSinceLaunch = Math.floor(daysSinceLaunch / 7);

  const leadsGenerated = 180 + (daysSinceLaunch * 2);

  const conversionRate = Math.max(
    20,
    32 + ((monthsSinceLaunch % 2 === 0 ? 1 : -1) * monthsSinceLaunch)
  );

  const serviceRevenue = (10000 + monthsSinceLaunch * 100).toLocaleString();
  const revenueGrowth = (1500 + monthsSinceLaunch * 100).toLocaleString();
  const activeLicences = 70 + (weeksSinceLaunch * 2);

  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    top: `${(i * 17) % 100}%`,
    size: (i % 3) + 1,
    speed: ((i % 5) + 1) * 0.15,
  }));
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${particle.id % 4 === 0 ? 'bg-cyan-300/60' : 'bg-white/50'}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              transform: `translateY(${Math.sin((scrollY * particle.speed + particle.id) * 0.05) * 40}px) translateX(${Math.cos((scrollY * particle.speed + particle.id) * 0.03) * 20}px)`,
              opacity: 0.3 + (particle.size * 0.15),
              boxShadow: '0 0 8px rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute -left-60 -top-60 h-[1000px] w-[1000px] rounded-full bg-cyan-400/20 blur-[180px] transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div
        className="pointer-events-none absolute -right-60 top-0 h-[1000px] w-[1000px] rounded-full bg-blue-500/60 blur-[120px] transition-transform duration-300"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]"
        style={{
          transform: `translateX(calc(-50% + ${mousePosition.x * 0.5}px)) translateY(${scrollY * 0.08}px)`,
        }}
      />

      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">Relode</div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects">Projects</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm">
            Client Login
          </button>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]" />
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Instant Quote Technology
            </div>

            <h1 className="text-6xl font-bold leading-tight md:text-7xl">
              Turn your website into a 24/7 sales machine.
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-slate-300">
              Relode helps businesses generate instant online quotes, capture more qualified leads and automate their sales process with powerful customer-facing software.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500">
                Try The Quote Calculator
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium">
                Book A Demo
              </button>
            </div>

            <div className="mt-12 flex gap-10 text-sm text-slate-400">
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div>Automated Quoting</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div>Custom Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">∞</div>
                <div>Scalable</div>
              </div>
            </div>
          </div>

          <div
            style={{
              transform: `translateY(${mousePosition.y * 0.3}px) translateX(${mousePosition.x * 0.15}px)`,
            }}
            className="transition-transform duration-300"
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-500/10">
              <div className="mb-6 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-xs text-slate-400">Leads Generated</div>
                    <div className="mt-2 text-3xl font-bold">{leadsGenerated}</div>
                    <div className="mt-1 text-sm text-slate-400">Updated in real time</div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-xs text-slate-400">Conversion Rate</div>
                    <div className="mt-2 text-3xl font-bold">{conversionRate}%</div>
                    <div className="mt-1 text-sm text-slate-400">Updates monthly</div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Service Plan Revenue (MRR)</span>
                    <span className="text-green-400">+£{revenueGrowth}</span>
                  </div>

                  <div className="mt-3 text-4xl font-bold">£{serviceRevenue}</div>
                  <div className="mt-1 text-sm text-slate-400">Generated from active service plan subscriptions</div>

                  <div className="mt-4 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-3/4 rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Active Licences</span>
                    <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                      Active
                    </span>
                  </div>

                  <div className="mt-2 text-3xl font-bold">{activeLicences}</div>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="mb-3 text-sm font-semibold">Recent Quote Requests</div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span>Boiler Replacement</span>
                      <span className="text-cyan-400">£3,250</span>
                    </div>

                    <div className="flex justify-between border-b border-slate-700 pb-2">
                      <span>Service Plan</span>
                      <span className="text-cyan-400">£20/mo</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Heat Pump Survey</span>
                      <span className="text-cyan-400">New Lead</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Try It Yourself
          </div>

          <h2 className="text-5xl font-bold">
            Experience the quote calculator.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            See exactly how your customers interact with Relode. Fast, simple and built to maximise conversions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-cyan-500/5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-cyan-400">Demo Quote Calculator</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">Step 1 of 6</span>
            </div>

            <div className="mb-6 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-1/6 rounded-full bg-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold">
              What type of boiler do you currently have?
            </h3>

            <div className="mt-8 space-y-4">
              <button className="w-full rounded-2xl border border-slate-700 p-5 text-left transition-all hover:border-cyan-500 hover:bg-slate-800">
                Combi Boiler
              </button>

              <button className="w-full rounded-2xl border border-slate-700 p-5 text-left transition-all hover:border-cyan-500 hover:bg-slate-800">
                System Boiler
              </button>

              <button className="w-full rounded-2xl border border-slate-700 p-5 text-left transition-all hover:border-cyan-500 hover:bg-slate-800">
                Regular Boiler
              </button>

              <button className="w-full rounded-2xl border border-slate-700 p-5 text-left transition-all hover:border-cyan-500 hover:bg-slate-800">
                I'm Not Sure
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-4 text-sm font-medium text-cyan-400">
              WHY IT WORKS
            </div>

            <h3 className="text-4xl font-bold">
              Designed for conversions.
            </h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">82%</div>
                <div className="text-slate-400">Average completion rate</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">&lt; 2 mins</div>
                <div className="text-slate-400">Typical completion time</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-slate-400">Lead generation even while you sleep</div>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-medium text-slate-950 hover:bg-cyan-400">
              Launch Interactive Demo
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Featured Projects
          </div>

          <h2 className="text-5xl font-bold">
            Software built to generate more leads.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Every Relode platform is designed around one goal: helping businesses capture more enquiries, automate more processes and increase revenue.
          </p>
        </div>

        <div className="space-y-8">
          <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-10">
                <div className="mb-4 text-sm font-medium text-cyan-400">
                  FLAGSHIP PLATFORM
                </div>

                <h3 className="text-4xl font-bold">
                  Boiler Quote Calculator
                </h3>

                <p className="mt-6 text-lg text-slate-400">
                  Allow customers to receive fixed-price boiler quotes online in minutes without requiring a home survey.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">Instant Pricing</span>
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">Lead Capture</span>
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">CRM Integration</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-10">
                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
                  <div className="text-sm text-slate-400">Average Quote Value</div>
                  <div className="mt-2 text-4xl font-bold">£3,250</div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-900 p-4">
                      <div className="text-xs text-slate-400">Leads</div>
                      <div className="text-2xl font-bold">247</div>
                    </div>

                    <div className="rounded-xl bg-slate-900 p-4">
                      <div className="text-xs text-slate-400">Conversion</div>
                      <div className="text-2xl font-bold">34%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="mb-3 text-sm font-medium text-cyan-400">
                RECURRING REVENUE
              </div>

              <h3 className="text-2xl font-bold">
                Service Plan Platform
              </h3>

              <p className="mt-4 text-slate-400">
                Sell, manage and renew recurring service plans with automated payments and customer self-service.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="mb-3 text-sm font-medium text-cyan-400">
                CUSTOM DEVELOPMENT
              </div>

              <h3 className="text-2xl font-bold">
                Bespoke Business Software
              </h3>

              <p className="mt-4 text-slate-400">
                Tailor-made systems built around your workflows, team and customer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Why Businesses Choose Relode
          </div>

          <h2 className="text-5xl font-bold">
            Built to increase conversions.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Every feature is designed to help businesses capture more leads, automate more admin and create a better customer experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold">Instant Online Pricing</h3>
            <p className="mt-3 text-slate-400">
              Give customers prices instantly without waiting for a phone call or survey.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              📈
            </div>
            <h3 className="text-xl font-bold">Higher Conversion Rates</h3>
            <p className="mt-3 text-slate-400">
              Optimised customer journeys designed to convert more visitors into enquiries.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              🔐
            </div>
            <h3 className="text-xl font-bold">Licensing Control</h3>
            <p className="mt-3 text-slate-400">
              Manage subscriptions, customer access and recurring revenue from one platform.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              🔄
            </div>
            <h3 className="text-xl font-bold">CRM Integrations</h3>
            <p className="mt-3 text-slate-400">
              Connect seamlessly with your CRM, automation tools and existing systems.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            How Relode Works
          </div>

          <h2 className="text-5xl font-bold">
            Everything you need to generate more leads.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Relode gives businesses the tools to capture more enquiries, automate customer journeys and create recurring revenue streams.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              ⚡
            </div>
            <h3 className="text-2xl font-bold">Instant Quote Calculators</h3>
            <p className="mt-4 text-slate-400">
              Allow customers to receive prices online instantly while capturing high-quality leads 24/7.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              👤
            </div>
            <h3 className="text-2xl font-bold">Customer Portals</h3>
            <p className="mt-4 text-slate-400">
              Give customers access to quotes, documents, subscriptions and account information in one place.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              💳
            </div>
            <h3 className="text-2xl font-bold">Service Plan Management</h3>
            <p className="mt-4 text-slate-400">
              Create recurring revenue with automated subscriptions, renewals and payment collection.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              🔄
            </div>
            <h3 className="text-2xl font-bold">CRM & Automation</h3>
            <p className="mt-4 text-slate-400">
              Connect seamlessly with your existing systems to automate follow-ups, workflows and reporting.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Flexible Pricing
          </div>

          <h2 className="text-5xl font-bold">
            Start small. Scale as you grow.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Whether you need a simple quote calculator or a complete customer platform, Relode grows with your business.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-sm font-medium text-cyan-400">STARTER</div>
            <h3 className="mt-3 text-3xl font-bold">Quote Calculator</h3>
            <div className="mt-6 text-5xl font-bold">£99</div>
            <div className="text-slate-400">per month</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Instant online quotes</li>
              <li>✓ Lead capture forms</li>
              <li>✓ Hosted by Relode</li>
              <li>✓ Monthly updates</li>
            </ul>

            <button className="mt-8 w-full rounded-xl border border-slate-700 py-3">
              Get Started
            </button>
          </div>

          <div className="relative rounded-3xl border border-cyan-500 bg-slate-900 p-8 shadow-2xl shadow-cyan-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950">
              MOST POPULAR
            </div>

            <div className="text-sm font-medium text-cyan-400">GROWTH</div>
            <h3 className="mt-3 text-3xl font-bold">Business Platform</h3>
            <div className="mt-6 text-5xl font-bold">£299</div>
            <div className="text-slate-400">per month</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Everything in Starter</li>
              <li>✓ Customer accounts</li>
              <li>✓ CRM integrations</li>
              <li>✓ Service plan management</li>
              <li>✓ Priority support</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-medium text-slate-950">
              Book A Demo
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-sm font-medium text-cyan-400">ENTERPRISE</div>
            <h3 className="mt-3 text-3xl font-bold">Bespoke Software</h3>
            <div className="mt-6 text-5xl font-bold">Custom</div>
            <div className="text-slate-400">tailored pricing</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Fully bespoke platform</li>
              <li>✓ Custom integrations</li>
              <li>✓ White-label options</li>
              <li>✓ Dedicated development</li>
            </ul>

            <button className="mt-8 w-full rounded-xl border border-slate-700 py-3">
              Speak To Us
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-12">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Built For Growth
            </div>

            <h2 className="text-5xl font-bold">
              Everything you need to scale.
            </h2>
          </div>

          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-bold text-cyan-400">24/7</div>
              <div className="mt-3 text-slate-400">Lead Capture</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">Instant</div>
              <div className="mt-3 text-slate-400">Customer Pricing</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">∞</div>
              <div className="mt-3 text-slate-400">Unlimited Scalability</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">MRR</div>
              <div className="mt-3 text-slate-400">Recurring Revenue Ready</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
        <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-slate-950">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Ready To Get Started?
            </div>

            <h2 className="text-6xl font-bold leading-tight">
              Ready to see Relode in action?
            </h2>

            <p className="mt-6 text-xl text-slate-900/80">
              Book a personalised demo and discover how instant quoting, customer portals and automated workflows can help your business generate more leads and close more sales.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-950 px-8 py-4 font-medium text-white">
                Book Your Demo
              </button>

              <button className="rounded-xl border border-slate-900/20 px-8 py-4 font-medium">
                Try The Quote Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}