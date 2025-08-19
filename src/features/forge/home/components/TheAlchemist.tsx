'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconSparkles,
  IconCalendar,
  IconMapPin,
} from '@tabler/icons-react';
import Image from 'next/image';
import { TheAlchemistCard } from '@/features/forge/home/components/the-alchemist';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TheAlchemist() {
  return (
    <section className="relative pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black/20 to-orange-900/10" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <Image
        src="/assets/images/frame.svg"
        alt="Frame"
        fill
        className="absolute inset-0 -z-10 object-cover opacity-30"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 backdrop-blur-sm mb-5">
            <IconSparkles className="w-4 h-4 text-orange-400" />
            <span className="font-serif text-sm text-orange-200 font-medium">
              Digital Alchemist
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-serif font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Tran Hoang Anh Tu
          </h1>
          <p className="text-base font-serif text-gray-300 max-w-2xl mx-auto leading-relaxed mb-1">
            Software Engineer & Digital Blacksmith
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex gap-2 bg-zinc-900/50 border border-zinc-700 rounded-xl p-1">
              <TabsTrigger
                value="about"
                className="px-6 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="px-6 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="px-6 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                Education
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
            <div className="md:w-3/5 w-full">
              <TabsContent value="about">
                <div className="bg-zinc-900/50 border border-red-400/30 rounded-2xl p-8 shadow-2xl h-full">
                  <h2 className="font-serif text-2xl font-bold text-orange-100 mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-200 text-base leading-relaxed mb-6">
                    Hi, I&apos;m{' '}
                    <strong className="text-orange-300">
                      Tran Hoang Anh Tu
                    </strong>
                    , a passionate Software Engineer with expertise in modern
                    web technologies. I specialize in crafting scalable, elegant
                    digital experiences that make a lasting impact.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Driven by curiosity and a love for clean code, I transform
                    complex problems into simple, beautiful solutions. When
                    I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, reading philosophy books, or enjoying a
                    perfect cup of coffee.
                  </p>
                  <div>
                    <h3 className="font-semibold text-orange-200 mb-3">
                      Connect with me:
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <a
                        href="mailto:contact@trhgatu.dev"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium shadow hover:from-orange-700 hover:to-red-700 transition"
                        aria-label="Email"
                      >
                        <IconMail className="w-5 h-5 mr-2" /> Email
                      </a>
                      <a
                        href="https://github.com/trhgatu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:text-orange-400 hover:border-orange-400 transition"
                      >
                        <IconBrandGithub className="w-5 h-5 mr-2" /> GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/trhgatu1103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:text-blue-400 hover:border-blue-400 transition"
                      >
                        <IconBrandLinkedin className="w-5 h-5 mr-2" /> LinkedIn
                      </a>
                      <a
                        href="https://facebook.com/trhgatu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:text-blue-500 hover:border-blue-500 transition"
                      >
                        <IconBrandFacebook className="w-5 h-5 mr-2" /> Facebook
                      </a>
                      <a
                        href="https://instagram.com/th_atu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white hover:text-pink-400 hover:border-pink-400 transition"
                      >
                        <IconBrandInstagram className="w-5 h-5 mr-2" />{' '}
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experience">
                <div className="bg-zinc-900/50 border border-green-400/30 rounded-2xl p-8 shadow-2xl h-full">
                  <h3 className="font-serif text-xl font-bold text-orange-100 mb-6">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-6 py-2">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Full-Stack Developer
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center gap-1">
                          <IconMapPin className="w-4 h-4 text-green-400" />
                          <span>Freelance / Remote</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconCalendar className="w-4 h-4 text-green-400" />
                          <span>2024 - Present</span>
                        </div>
                      </div>
                      <ul className="text-gray-400 text-sm space-y-1 ml-4">
                        <li>
                          • Developed 20+ web applications using React, Next.js,
                          and Node.js
                        </li>
                        <li>
                          • Built scalable APIs with NestJS, PostgreSQL, and
                          MongoDB
                        </li>
                        <li>
                          • Implemented modern UI/UX with Tailwind CSS and
                          Framer Motion
                        </li>
                        <li>
                          • Deployed applications using Docker, Vercel, and
                          cloud services
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-6 py-2">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Frontend Developer Intern
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center gap-1">
                          <IconMapPin className="w-4 h-4 text-yellow-400" />
                          <span>CyberSkill JSC</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconCalendar className="w-4 h-4 text-yellow-400" />
                          <span>2024</span>
                        </div>
                      </div>
                      <ul className="text-gray-400 text-sm space-y-1 ml-4">
                        <li>
                          • Collaborated on e-commerce platform serving 10k+
                          users
                        </li>
                        <li>
                          • Optimized application performance improving load
                          times by 40%
                        </li>
                        <li>
                          • Participated in code reviews and agile development
                          processes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education">
                <div className="bg-zinc-900/50 border border-orange-400/30 rounded-2xl p-8 shadow-2xl h-full">
                  <h3 className="font-serif text-xl font-bold text-orange-100 mb-6">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Bachelor of Information Technology
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center gap-1">
                          <IconMapPin className="w-4 h-4 text-blue-400" />
                          <span>HCMC University of Industry and Trade</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconCalendar className="w-4 h-4 text-blue-400" />
                          <span>2021 - 2025</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Specialized in Software Engineering with focus on web
                        development, algorithms, and system design.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>

            {/* Avatar Card (right side) - luôn hiển thị */}
            <div className="md:w-2/5 w-full flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <TheAlchemistCard />
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
