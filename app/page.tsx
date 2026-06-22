'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
          backgroundSize: '60px 60px',
          transform: mounted ? `translateY(${scrollY * 0.15}px)` : undefined,
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
              transform: mounted
                ? `translateY(${Math.sin((scrollY * particle.speed + particle.id) * 0.05) * 40}px) translateX(${Math.cos((scrollY * particle.speed + particle.id) * 0.03) * 20}px)`
                : undefined,
              opacity: 0.3 + (particle.size * 0.15),
              boxShadow: '0 0 8px rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute -left-60 -top-60 h-[1000px] w-[1000px] rounded-full bg-cyan-400/20 blur-[180px] transition-transform duration-300"
        style={{ transform: mounted ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : undefined }}
      />
      <div
        className="pointer-events-none absolute -right-60 top-0 h-[1000px] w-[1000px] rounded-full bg-blue-500/60 blur-[120px] transition-transform duration-300"
        style={{ transform: mounted ? `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` : undefined }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]"
        style={{
          transform: mounted
            ? `translateX(calc(-50% + ${mousePosition.x * 0.5}px)) translateY(${scrollY * 0.08}px)`
            : 'translateX(-50%)',
        }}
      />

      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Image
            src="/relode-logo-white.png"
            alt="Relode"
            width={220}
            height={50}
            className="h-12 w-auto"
            priority
          />

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects">Platform</a>
            <a href="#api">API</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://portal.relode.io"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm"
          >
            Client Login
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)]" />
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Built for Gas Safe engineers
            </div>

            <h1 className="text-6xl font-bold leading-tight md:text-7xl">
              Lead generation that works while you sleep.
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-slate-300">
              Relode gives small and medium heating businesses an online quote calculator that books in surveys, captures leads and takes the admin off your plate — so you spend less time on the phone and more time on the tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://portal.relode.io/calculator?company_id=6578dad8-9e8a-4189-abf7-d578bda4af47"
                className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
              >
                Try The Quote Calculator
              </a>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium">
                Book A Demo
              </button>
            </div>

            <div className="mt-12 flex gap-10 text-sm text-slate-400">
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div>Lead Capture</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">0</div>
                <div>Missed Calls Chasing Quotes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Less</div>
                <div>Admin, More Jobs Booked</div>
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
                      <span>Survey Booked — Tue 10am</span>
                      <span className="text-cyan-400">Confirmed</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Photo Survey Submitted</span>
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
            See it from your customer's side.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            This is exactly what your customers see when they land on your site at 9pm wanting a price. No phone call, no waiting for a callback — just a quote and a booked-in survey.
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
              Built to win the job, not just the click.
            </h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">82%</div>
                <div className="text-slate-400">Of customers complete their quote in one sitting</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">&lt; 2 mins</div>
                <div className="text-slate-400">From "just browsing" to booked-in survey</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-slate-400">Quoting and booking jobs while you're on the tools or asleep</div>
              </div>
            </div>

            <a
              href="https://portal.relode.io/calculator?company_id=6578dad8-9e8a-4189-abf7-d578bda4af47"
              className="mt-8 block w-full rounded-xl bg-cyan-500 py-4 text-center font-medium text-slate-950 hover:bg-cyan-400"
            >
              Launch Interactive Demo
            </a>
          </div>
        </div>
      </section>

      <section id="api" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Less Admin, More Jobs
          </div>

          <h2 className="text-5xl font-bold">
            Surveys booked before you've finished your tea.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Customers can request a survey online, pick a date that suits them, or send photos of their existing setup straight away — no back-and-forth, no chasing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-cyan-500/5">
            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-500">New Job Notification</span>
            </div>
            <div className="p-6 text-sm leading-relaxed text-slate-300">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold text-white">📸 Photo Survey Received</span>
                <span className="text-slate-500">2 mins ago</span>
              </div>
              <div className="space-y-1 text-slate-400">
                <div>Mrs. Patterson — GU1 3AB</div>
                <div>4 photos of existing boiler &amp; pipework attached</div>
                <div>Preferred date: Thursday AM</div>
              </div>
              <div className="mt-4 rounded-lg bg-slate-800 px-3 py-2 text-cyan-400">
                Booked straight into your calendar — no admin needed
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-4 text-sm font-medium text-cyan-400">
              HOW IT TAKES THE LOAD OFF
            </div>

            <h3 className="text-4xl font-bold">
              Built around how engineers actually work.
            </h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-lg font-bold">Online Survey Requests</div>
                <div className="text-slate-400">Customers request a survey from your site, with their details ready and waiting for you.</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-lg font-bold">Self-Service Booking</div>
                <div className="text-slate-400">Customers pick a date and time that suits them straight from your availability — no diary tennis.</div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <div className="text-lg font-bold">Photo Surveys</div>
                <div className="text-slate-400">Customers upload photos of their boiler and pipework so you can scope the job before you even arrive.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            For Heating Engineers
          </div>

          <h2 className="text-5xl font-bold">
            Software that fills your diary, not your inbox.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Built for small and medium Gas Safe businesses who'd rather be on a job than on the phone chasing quotes.
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
                  Give customers a fixed-price boiler quote online in minutes, then let them book their own survey — fewer wasted calls, more jobs in the diary.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">Instant Pricing</span>
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">Survey Booking</span>
                  <span className="rounded-full bg-slate-800 px-3 py-2 text-sm">Photo Surveys</span>
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
                Boiler Service Plans
              </h3>

              <p className="mt-4 text-slate-400">
                Sell and renew annual service plans online with automated payments, so customers come back to you every year without you lifting a finger.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="mb-3 text-sm font-medium text-cyan-400">
                ZERO ADMIN BOOKING
              </div>

              <h3 className="text-2xl font-bold">
                Survey &amp; Job Booking
              </h3>

              <p className="mt-4 text-slate-400">
                Customers request a survey, book a date and submit photos of their existing system — it lands in your calendar ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Why Engineers Choose Relode
          </div>

          <h2 className="text-5xl font-bold">
            More jobs booked, less admin done.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Every feature is designed to win you more work and cut the hours you spend on quoting, chasing and paperwork.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold">Instant Online Pricing</h3>
            <p className="mt-3 text-slate-400">
              Customers get a fixed-price boiler quote in seconds, day or night, so you stop losing jobs to whoever calls back first.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              📅
            </div>
            <h3 className="text-xl font-bold">Self-Service Survey Booking</h3>
            <p className="mt-3 text-slate-400">
              Customers pick a survey date straight from your availability — no diary tennis over text or voicemail.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              📸
            </div>
            <h3 className="text-xl font-bold">Photo Surveys</h3>
            <p className="mt-3 text-slate-400">
              Customers send photos of their boiler and pipework upfront, so you can scope and price the job before you've even left the van.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
              🔄
            </div>
            <h3 className="text-xl font-bold">No More Chasing Leads</h3>
            <p className="mt-3 text-slate-400">
              Every enquiry, survey and booking lands in one place, so nothing slips through the cracks and no lead goes cold.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            How It Works
          </div>

          <h2 className="text-5xl font-bold">
            From quote to job, with no admin in between.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Relode handles the bit between "I'm interested" and "you're on site" — so you can focus on the install, not the inbox.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              ⚡
            </div>
            <h3 className="text-2xl font-bold">Instant Quote</h3>
            <p className="mt-4 text-slate-400">
              Customers get a fixed price online instantly, 24/7, without needing to speak to you first.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              📅
            </div>
            <h3 className="text-2xl font-bold">Survey Booked Online</h3>
            <p className="mt-4 text-slate-400">
              They pick a date that works for both of you, straight into your calendar.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              📸
            </div>
            <h3 className="text-2xl font-bold">Photos Submitted</h3>
            <p className="mt-4 text-slate-400">
              Photos of the existing boiler and pipework land with you before you've even set off.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-slate-950">
              💳
            </div>
            <h3 className="text-2xl font-bold">Service Plans Renewed</h3>
            <p className="mt-4 text-slate-400">
              Customers stay on the books year after year with automated renewals and payments.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Plans For Heating Engineers
          </div>

          <h2 className="text-5xl font-bold">
            Start small. Scale as your business grows.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Whether you're a one-man band or running a small team, there's a plan that pays for itself in your first booked job.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-sm font-medium text-cyan-400">SOLO ENGINEER</div>
            <h3 className="mt-3 text-3xl font-bold">Quote Calculator</h3>
            <div className="mt-6 text-5xl font-bold">£99</div>
            <div className="text-slate-400">per month</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Instant online boiler quotes</li>
              <li>✓ Online survey requests</li>
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

            <div className="text-sm font-medium text-cyan-400">GROWING TEAM</div>
            <h3 className="mt-3 text-3xl font-bold">Booking &amp; Plans</h3>
            <div className="mt-6 text-5xl font-bold">£299</div>
            <div className="text-slate-400">per month</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Everything in Solo Engineer</li>
              <li>✓ Self-service survey booking</li>
              <li>✓ Photo surveys</li>
              <li>✓ Service plan renewals</li>
              <li>✓ Priority support</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-medium text-slate-950">
              Book A Demo
            </button>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-sm font-medium text-cyan-400">MULTI-ENGINEER</div>
            <h3 className="mt-3 text-3xl font-bold">Bespoke Platform</h3>
            <div className="mt-6 text-5xl font-bold">Custom</div>
            <div className="text-slate-400">tailored pricing</div>

            <ul className="mt-8 space-y-3 text-slate-300">
              <li>✓ Multiple engineer diaries</li>
              <li>✓ Custom integrations</li>
              <li>✓ White-label options</li>
              <li>✓ Dedicated support</li>
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
              Built For Engineers
            </div>

            <h2 className="text-5xl font-bold">
              Everything you need to grow without the grind.
            </h2>
          </div>

          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-bold text-cyan-400">24/7</div>
              <div className="mt-3 text-slate-400">Quoting While You Sleep</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">Instant</div>
              <div className="mt-3 text-slate-400">Customer Pricing</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">Zero</div>
              <div className="mt-3 text-slate-400">Survey-Booking Admin</div>
            </div>

            <div>
              <div className="text-5xl font-bold text-cyan-400">Repeat</div>
              <div className="mt-3 text-slate-400">Customers Via Service Plans</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
        <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-slate-950">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Ready To Get Started?
            </div>

            <h2 className="text-6xl font-bold leading-tight">
              Stop chasing quotes. Start booking jobs.
            </h2>

            <p className="mt-6 text-xl text-slate-900/80">
              Book a personalised demo and see how instant quoting, online survey booking and photo surveys can win you more boiler installs with a lot less admin.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-950 px-8 py-4 font-medium text-white">
                Book Your Demo
              </button>

              <a
                href="https://portal.relode.io/calculator?company_id=6578dad8-9e8a-4189-abf7-d578bda4af47"
                className="rounded-xl border border-slate-900/20 px-8 py-4 font-medium"
              >
                Try The Quote Calculator
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}