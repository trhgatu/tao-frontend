'use client';

import { motion } from 'framer-motion';
import {
  IconFlame,
  IconHammer,
  IconCode,
  IconRocket,
  IconCoffee,
  IconMusic,
  IconBook,
  IconSword,
  IconTarget,
  IconBolt,
  IconMail,
  IconBrandGithub,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeSimple = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const battleLog = [
  {
    year: '2024',
    title: 'Master Craftsman Era',
    description:
      'Forged TAO, mastered Next.js 14 & advanced TypeScript patterns.',
    icon: <IconTarget className="w-5 h-5" />,
    color: 'red',
  },
  {
    year: '2023',
    title: 'The Great Scaling',
    description:
      'Conquered micro-services & cloud infra for high-traffic apps.',
    icon: <IconRocket className="w-5 h-5" />,
    color: 'orange',
  },
  {
    year: '2022',
    title: 'Full-Stack Ascension',
    description: 'Unified frontend & backend craft into one seamless flow.',
    icon: <IconBolt className="w-5 h-5" />,
    color: 'yellow',
  },
] as const;

const arsenal = [
  {
    label: 'Frontend Arsenal',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    icon: <IconCode className="w-6 h-6" />,
  },
  {
    label: 'Backend Forge',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: <IconRocket className="w-6 h-6" />,
  },
  {
    label: 'DevOps Artillery',
    items: ['Docker', 'Render', 'Vercel', 'GitHub Actions', 'Nginx'],
    icon: <IconBolt className="w-6 h-6" />,
  },
  {
    label: 'Design Weapons',
    items: ['Figma'],
    icon: <IconTarget className="w-6 h-6" />,
  },
];

export default function TheAlchemistPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10" />
      <Image
        src="/assets/images/frame.svg"
        alt="Frame"
        fill
        className="absolute inset-0 -z-10 object-cover opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 xl:grid-cols-3">
        <motion.aside
          variants={fadeSimple}
          initial="hidden"
          animate="show"
          className="xl:sticky xl:top-8 h-fit bg-zinc-800/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-red-900/20"
        >
          <div className="relative w-40 sm:w-48 h-40 sm:h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur-xl opacity-40" />
            <Image
              src="/assets/images/trhgatu.jpg"
              alt="Avatar"
              fill
              className="relative rounded-2xl object-cover border-2 border-red-500/40"
            />
          </div>

          <h1 className="text-center text-2xl font-bold">Tran Hoang Anh Tu</h1>
          <p className="text-center mt-1 bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-bold">
            The Alchemist
          </p>
          <p className="text-center text-gray-400 text-sm mb-6">
            Full-stack Developer & Digital Blacksmith
          </p>

          {[
            { icon: <IconFlame />, label: 'Experience', value: '1+ Years' },
            { icon: <IconHammer />, label: 'Projects Forged', value: '20+' },
            { icon: <IconCoffee />, label: 'Coffee', value: '∞' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/20 mb-3 last:mb-6 text-sm"
            >
              <span className="flex items-center gap-2 text-gray-300">
                <span className="text-red-400 w-6 h-6">{stat.icon}</span>
                <span className="ml-2">{stat.label}</span>
              </span>
              <span className="text-red-400 font-semibold">{stat.value}</span>
            </div>
          ))}

          <a
            href="mailto:contact@trhgatu.dev"
            className="block w-full mb-3 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-center font-semibold hover:from-red-700 hover:to-orange-700 transition"
          >
            <IconMail className="inline w-4 h-4 mr-2" />
            Hire Me
          </a>
          <a
            href="https://github.com/trhgatu"
            target="_blank"
            className="block w-full px-4 py-3 border border-red-500 rounded-lg text-center text-red-300 hover:bg-red-500/10 transition"
          >
            <IconBrandGithub className="inline w-4 h-4 mr-2" />
            View Arsenal
          </a>
        </motion.aside>

        <div className="xl:col-span-2 space-y-14">
          <Section
            title="The Forge Philosophy"
            icon={<IconFlame className="text-red-500 w-8 h-8" />}
          >
            <p className="text-lg italic leading-relaxed text-gray-300 mb-4">
              Code is not just written—it&apos;s <strong>forged</strong>. Every
              line tempered by challenge, every function sharpened by purpose. I
              craft experiences that endure.
            </p>
          </Section>

          <Section
            title="Battle History"
            icon={<IconSword className="text-orange-500 w-8 h-8" />}
          >
            <div className="space-y-6">
              {battleLog.map((b) => (
                <article
                  key={b.year}
                  className="bg-zinc-800/50 border-l-4 border-red-500 rounded-xl p-6 hover:bg-zinc-800/70 transition"
                >
                  <header className="flex items-start gap-4 mb-2">
                    <div className="p-2 bg-red-600/20 rounded-lg text-red-400">
                      {b.icon}
                    </div>
                    <h3 className="text-xl font-bold">
                      {b.title}{' '}
                      <span className="text-sm ml-2 bg-red-600/20 px-2 py-0.5 rounded-full text-red-300">
                        {b.year}
                      </span>
                    </h3>
                  </header>
                  <p className="text-gray-300">{b.description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            title="Weapons of Choice"
            icon={<IconHammer className="text-yellow-500 w-8 h-8" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {arsenal.map((box) => (
                <div
                  key={box.label}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 shadow-lg hover:border-red-500/50 transition"
                >
                  <header className="flex items-center gap-3 mb-4">
                    <span className="text-red-400">{box.icon}</span>
                    <h4 className="font-bold">{box.label}</h4>
                  </header>
                  <div className="flex flex-wrap gap-2">
                    {box.items.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-red-800/30 text-red-200 rounded-full text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Beyond the Forge">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: <IconBook />,
                  title: 'Knowledge Seeker',
                  desc: 'Obsessed with new tech & philosophy books.',
                },
                {
                  icon: <IconMusic />,
                  title: 'Rhythm Coder',
                  desc: 'Lo-fi & epic scores fuel my sessions.',
                },
                {
                  icon: <IconCoffee />,
                  title: 'Caffeine Alchemist',
                  desc: 'Turning coffee into code since 2019.',
                },
                {
                  icon: <IconRocket />,
                  title: 'Future Builder',
                  desc: 'Passionate about emerging tech.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="flex items-center gap-3 p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-orange-500/50 transition"
                >
                  <span className="text-orange-400">{p.icon}</span>
                  <div>
                    <h5 className="font-semibold">{p.title}</h5>
                    <p className="text-gray-400 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section center>
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Forge Something Epic?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every great application starts with a spark. Let&apos;s turn
                your vision into a battle-tested reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@trhgatu.dev"
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition"
                >
                  <IconMail className="inline w-4 h-4 mr-2" />
                  Start a Project
                </a>
                <Link
                  href="/forge/craftings"
                  className="px-8 py-3 border border-red-500 text-red-300 rounded-lg font-semibold hover:bg-red-500/10 transition"
                >
                  <IconHammer className="inline w-4 h-4 mr-2" />
                  View My Work
                </Link>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
  center = false,
}: {
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section>
      {title && (
        <h2
          className={`text-3xl font-bold mb-6 flex ${
            center ? 'justify-center' : 'items-center'
          } gap-3`}
        >
          {icon}
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
