import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight, ArrowLeft, ArrowRight, Megaphone, Quote, Cpu, Users, Bot, PlusCircle, Plus,
  GraduationCap, Award, MapPin, Mail, Globe, ChevronDown, Linkedin, Instagram, Youtube,
} from "lucide-react";
import campus from "@/assets/jec-campus.jpg";
import adminBlock from "@/assets/admin-block.jpg";
import about from "@/assets/about.jpg";
import mig21 from "@/assets/mig-21.jpg";
import ieeeLogo from "@/assets/ieee-logo.png";
import jecCrest from "@/assets/jec-crest.png";
import csLogo from "@/assets/cs-logo.png";
import wieLogo from "@/assets/wie-logo.png";
import rasLogo from "@/assets/ras-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IEEE Student Branch – Jabalpur Engineering College (JEC)" },
      { name: "description", content: "Empowering innovation and technology at Jabalpur Engineering College. Explore IEEE societies, events and community." },
      { property: "og:title", content: "IEEE Student Branch – JEC Jabalpur" },
      { property: "og:description", content: "Empowering innovation and technology at Jabalpur Engineering College." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Home", "News & Events", "Committee", "Gallery", "IEEE Fellows / Faculty Mentors", "Achievements", "Society Chapters", "Contact Us"];
const slides = [
  { img: campus, tag: "Our campus · Jabalpur", title: "Where curiosity takes root." },
  { img: adminBlock, tag: "Administration Block · Jabalpur", title: "Built on a century of learning." },
  { img: about, tag: "Hands-on", title: "Ideas, built together." },
];
const societies = [
  { logo: csLogo, code: "CS", title: "IEEE Computer Society (CS)", desc: "Explore computing, software and emerging digital technologies with a worldwide community of practitioners.", tags: "Computing · Software · AI" },
  { logo: wieLogo, code: "WIE", title: "IEEE Women in Engineering (WIE)", desc: "Connect with a global network dedicated to inspiring and supporting women in engineering and science.", tags: "Inclusion · Leadership · Mentorship" },
  { logo: rasLogo, code: "RAS", title: "IEEE Robotics and Automation Society (RAS)", desc: "Discover intelligent systems, robotics and automation at the intersection of hardware, software and imagination.", tags: "Robotics · Controls · Automation" },
];
const people = [
  { icon: Users, title: "Committee", desc: "The students shaping our community.", note: "Roster pending" },
  { icon: GraduationCap, title: "IEEE Fellows / Faculty Mentors", desc: "Guidance for the next generation of engineers.", note: "Profiles pending" },
  { icon: Award, title: "Achievements", desc: "A record of ideas, effort and impact.", note: "Verified records pending" },
];

const wrap = "mx-auto max-w-6xl px-6";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src={ieeeLogo} alt="IEEE" width={432} height={136} className="h-8 w-auto" />
      <img src={jecCrest} alt="Jabalpur Engineering College crest" width={184} height={168} className="h-10 w-auto" />
    </div>
  );
}

function Index() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  const s = slides[i] ?? slides[0]!;

  return (
    <div className="min-h-screen text-sm">
      <div className="bg-primary text-primary-foreground">
        <div className={`${wrap} flex h-8 items-center justify-between text-[11px]`}>
          <span>Advancing Technology for Humanity</span>
          <div className="flex gap-5">
            <a href="https://www.ieee.org" target="_blank" rel="noreferrer">IEEE.org ↗</a>
            <a href="https://ieeexplore.ieee.org" target="_blank" rel="noreferrer">IEEE Xplore ↗</a>
          </div>
        </div>
      </div>

      <header className="border-b">
        <div className={`${wrap} flex items-center justify-between py-5`}>
          <div className="flex items-center gap-5">
            <Logo />
            <div className="border-l pl-5">
              <p className="font-semibold">Jabalpur Engineering College</p>
              <p className="text-xs text-muted-foreground">IEEE Student Branch · Jabalpur, India</p>
            </div>
          </div>
          <div className="hidden text-right md:block">
            <p className="text-lg font-semibold text-primary">कर्म ज्यायो ह्यकर्मणः</p>
            <p className="text-xs text-muted-foreground">Karma Jyaya Hi Karmanah</p>
          </div>
        </div>
        <nav className={`${wrap} flex justify-between gap-8 overflow-x-auto border-t text-xs`}>
          {nav.map((n, k) => (
            <a key={n} href="#" className={`whitespace-nowrap border-b-2 py-4 ${k === 0 ? "border-primary font-semibold text-primary" : "border-transparent hover:text-primary"}`}>{n}</a>
          ))}
        </nav>
      </header>

      <section className={`${wrap} grid gap-8 py-12 md:grid-cols-[1.6fr_1fr] md:items-end`}>
        <div>
          <span className="eyebrow">Curiosity. Community. Impact.</span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">IEEE Student Branch – Jabalpur Engineering College (JEC)</h1>
        </div>
        <div>
          <p className="text-base text-muted-foreground">Empowering Innovation and Technology at Jabalpur Engineering College</p>
          <a href="#societies" className="mt-5 inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90">Explore our community <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <section className="relative h-[480px] overflow-hidden">
        {slides.map((sl, k) => (
          <img key={k} src={sl.img} alt={sl.title} width={1584} height={672} className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-overlay" />
        <div className={`${wrap} relative flex h-full items-end justify-between pb-8 text-primary-foreground`}>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider">{s.tag}</p>
            <h2 className="mt-2 text-3xl font-medium">{s.title}</h2>
            <div className="mt-8 flex items-center gap-3 text-[10px]">
              01 {slides.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-0.5 transition-all ${k === i ? "w-10 bg-primary-foreground" : "w-4 bg-primary-foreground/50"}`} />)} 03
            </div>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="hidden w-80 rounded-sm bg-card p-6 text-card-foreground shadow-xl md:block">
              <div className="flex justify-between"><span className="text-[10px] font-bold uppercase text-primary">Quote of the day</span><Quote className="size-4 text-primary" /></div>
              <p className="mt-3 text-lg font-semibold">कर्म ज्यायो ह्यकर्मणः</p>
              <p className="mt-2 text-[11px] text-muted-foreground">Karma Jyaya Hi Karmanah</p>
              <p className="mt-3 text-2xl leading-snug text-primary">Action is superior to inaction</p>
            </div>
            <div className="flex gap-2">
              <button aria-label="Previous" onClick={() => setI((i + 2) % 3)} className="grid size-8 place-items-center rounded-full border border-primary-foreground/70"><ArrowLeft className="size-4" /></button>
              <button aria-label="Next" onClick={() => setI((i + 1) % 3)} className="grid size-8 place-items-center rounded-full border border-primary-foreground/70"><ArrowRight className="size-4" /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b bg-surface">
        <div className={`${wrap} flex items-center justify-between py-3 text-xs text-muted-foreground`}>
          <span className="flex items-center gap-3"><Megaphone className="size-4 text-primary" />The next chapter starts here. Verified branch news and event announcements will be added soon.</span>
          <a href="#" className="flex items-center gap-1 font-semibold text-primary">News & Events <ArrowRight className="size-3" /></a>
        </div>
      </div>

      <section className={`${wrap} grid gap-12 py-20 md:grid-cols-2 md:items-center`}>
        <img src={mig21} alt="MiG-21 aircraft displayed on the JEC campus" loading="lazy" width={1600} height={1200} className="aspect-[4/3] w-full rounded-sm object-cover" />
        <div>
          <span className="eyebrow">About IEEE SB JEC</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Learning together.<br />Building what's next.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">We connect the students of Jabalpur Engineering College with the world of technology — and with each other. We champion technical learning, collaboration and leadership through workshops, talks, projects and competitions.</p>
        </div>
      </section>

      <section id="societies" className={`${wrap} pb-20`}>
        <span className="eyebrow">Society chapters &amp; affinity groups</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Find your field. Expand your world.</h2>
        <p className="mt-3 text-muted-foreground">Explore IEEE’s technical communities and shared interests. JEC chapter and affinity-group charter status is awaiting confirmation.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {societies.map((c) => (
            <article key={c.title} className="flex flex-col rounded-sm border p-6 transition hover:shadow-md">
              <div className="flex h-12 items-start justify-between">
                <img src={c.logo} alt={c.code} loading="lazy" className="h-12 w-auto" />
                <span className="text-[10px] font-semibold text-muted-foreground">{c.code}</span>
              </div>
              <h3 className="mt-6 min-h-14 text-xl font-semibold">{c.title}</h3>
              <p className="mt-6 leading-relaxed text-muted-foreground">{c.desc}</p>
              <p className="mt-3 text-[11px] text-primary">{c.tags}</p>
              <a href="#" className="mt-6 inline-flex w-fit items-center gap-3 rounded-sm border px-4 py-2 text-xs font-semibold text-primary hover:bg-accent">View More <ArrowUpRight className="size-3.5" /></a>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-sm bg-surface p-6">
          <div className="flex gap-3"><PlusCircle className="size-5 text-primary" /><div><p className="font-semibold">More ways to explore</p><p className="text-xs text-muted-foreground">Customizable options · Add local groups once confirmed.</p></div></div>
          <div className="mt-4 flex gap-3">
            {["Signal Processing", "Power Electronics"].map((t) => <span key={t} className="inline-flex items-center gap-3 rounded-sm bg-card px-3 py-2 text-xs text-primary">{t} <Plus className="size-3" /></span>)}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className={wrap}>
          <span className="eyebrow">The people behind the ideas</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">A community, powered by people.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {people.map(({ icon: Icon, ...c }) => (
              <a key={c.title} href="#" className="rounded-sm bg-card p-6 transition hover:shadow-md">
                <div className="flex justify-between"><Icon className="size-5 text-primary" /><ArrowUpRight className="size-4 text-primary" /></div>
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-block rounded-sm bg-muted px-2 py-1 text-[10px] text-muted-foreground">• {c.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-ink-foreground">
        <div className={`${wrap} grid gap-12 md:grid-cols-2 md:items-center`}>
          <div>
            <span className="eyebrow !text-ink-foreground/80">Contact us</span>
            <h2 className="mt-5 text-4xl font-medium leading-tight">Your next idea starts with a conversation.</h2>
            <p className="mt-5 text-ink-foreground/75">Curious about IEEE, a collaboration or getting involved? There's a place for your curiosity here.</p>
            <ul className="mt-8 space-y-4 text-xs">
              <li className="flex gap-3"><MapPin className="size-4" /><div><p className="font-semibold">Jabalpur Engineering College (JEC)</p><p className="text-ink-foreground/70">Jabalpur, Madhya Pradesh, India</p></div></li>
              <li className="flex gap-3"><Mail className="size-4" />Branch email · Update pending</li>
              <li className="flex gap-3"><Globe className="size-4" /><a href="https://jecjabalpur.ac.in" target="_blank" rel="noreferrer">jecjabalpur.ac.in ↗</a></li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-sm bg-card p-7 text-card-foreground">
            <div><h3 className="text-2xl font-semibold">Say hello.</h3><p className="text-[11px] text-muted-foreground">Enquiry form preview · Not connected for delivery</p></div>
            {[["Full name", "Your full name", "text"], ["Email address", "you@example.com", "email"]].map(([l, p, t]) => (
              <label key={l} className="block text-xs font-semibold">{l}<input type={t} placeholder={p} className="mt-2 w-full rounded-sm border border-input px-3 py-3 font-normal outline-none focus:border-primary" /></label>
            ))}
            <label className="block text-xs font-semibold">I'm interested in
              <div className="relative mt-2">
                <select className="w-full appearance-none rounded-sm border border-input bg-card px-3 py-3 font-normal outline-none focus:border-primary">
                  <option>Membership / volunteering</option><option>Collaboration</option><option>Events</option><option>Other</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-3.5 size-4" />
              </div>
            </label>
            <label className="block text-xs font-semibold">Your message<textarea rows={4} placeholder="Tell us what you'd like to explore..." className="mt-2 w-full rounded-sm border border-input px-3 py-3 font-normal outline-none focus:border-primary" /></label>
            <button className="inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground hover:opacity-90">Send enquiry <ArrowUpRight className="size-4" /></button>
            <p className="text-[10px] text-muted-foreground">The branch's official contact channel will be published after confirmation.</p>
          </form>
        </div>
      </section>

      <footer className={`${wrap} py-14`}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 font-semibold">IEEE Student Branch<br />Jabalpur Engineering College (JEC)</p>
            <p className="mt-2 text-xs text-muted-foreground">Technology with purpose. Learning without limits.</p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Instagram, Youtube].map((I, k) => <a key={k} href="#" aria-label="Social" className="grid size-8 place-items-center rounded-sm bg-accent text-primary"><I className="size-4" /></a>)}
            </div>
            <p className="mt-3 text-[10px] text-muted-foreground">Official social links · To be updated</p>
          </div>
          {[
            ["Explore", ["Home", "News & Events", "Committee", "Gallery"]],
            ["Community", ["IEEE Fellows / Faculty Mentors", "Achievements", "Society Chapters", "Contact Us"]],
            ["IEEE Network", ["IEEE.org ↗", "IEEE Xplore ↗", "IEEE membership ↗", "JEC official website ↗"]],
          ].map(([h, links]) => (
            <div key={h as string}>
              <p className="text-[11px] font-bold uppercase text-primary">{h}</p>
              <ul className="mt-4 space-y-3 text-xs text-muted-foreground">{(links as string[]).map((l) => <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-between border-t pt-6 text-[10px] text-muted-foreground">
          <span>© 2026 IEEE Student Branch · Jabalpur Engineering College (JEC). All rights reserved.</span>
          <span className="text-primary">Action is superior to inaction</span>
        </div>
      </footer>
    </div>
  );
}
