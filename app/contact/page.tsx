import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <nav className="border-b border-slate-800">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <Link href="/">
                        <Image
                            src="/relode-logo-white.png"
                            alt="Relode"
                            width={220}
                            height={50}
                            className="h-12 w-auto"
                            priority
                        />
                    </Link>

                    <Link
                        href="/"
                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900"
                    >
                        ← Back to home
                    </Link>
                </div>
            </nav>

            <section className="mx-auto max-w-5xl px-6 py-24">
                <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Let's Talk
                </div>

                <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                    Book a demo, or just ask us anything.
                </h1>

                <p className="mt-6 max-w-2xl text-xl text-slate-400">
                    Whether you want to see the quote calculator, the lead pipeline or the analytics in action — or you're on the Scale plan and want to talk bespoke — drop us a line and we'll get back to you.
                </p>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
                        <h2 className="text-2xl font-bold">Email Us</h2>
                        <p className="mt-3 text-slate-400">
                            The fastest way to reach us. Tell us a bit about your business and what you'd like to see, and we'll book in a time that suits you.
                        </p>
                        <a
                            href="mailto:support@relode.io?subject=Demo%20Request"
                            className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-400"
                        >
                            support@relode.io
                        </a>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
                        <h2 className="text-2xl font-bold">Already A Customer?</h2>
                        <p className="mt-3 text-slate-400">
                            Log in to your dashboard to manage leads, pricing, branding and your service plans.
                        </p>
                        <a
                            href="https://portal.relode.io"
                            className="mt-6 inline-block rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-800"
                        >
                            Client Login
                        </a>
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
                    <h2 className="text-2xl font-bold">Want To Try It First?</h2>
                    <p className="mt-3 text-slate-400">
                        See the quote calculator your customers would use, or start your own 14-day free trial — no card required.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <a
                            href="https://portal.relode.io/calculator?company_id=6578dad8-9e8a-4189-abf7-d578bda4af47"
                            className="rounded-xl bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
                        >
                            Try The Quote Calculator
                        </a>
                        <a
                            href="https://portal.relode.io/signup"
                            className="rounded-xl border border-slate-700 px-6 py-3 font-medium hover:bg-slate-800"
                        >
                            Start Free For 14 Days
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
