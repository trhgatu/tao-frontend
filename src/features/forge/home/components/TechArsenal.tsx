'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import StackIcon from 'tech-stack-icons';
import { motion, cubicBezier } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'language';
};

const skills: Skill[] = [
  { name: 'HTML5', icon: 'html5', category: 'frontend' },
  { name: 'CSS3', icon: 'css3', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'language' },
  { name: 'JavaScript', icon: 'js', category: 'language' },
  { name: 'ReactJS', icon: 'react', category: 'frontend' },
  { name: 'NextJS', icon: 'nextjs2', category: 'frontend' },
  { name: 'TailwindCSS', icon: 'tailwindcss', category: 'frontend' },
  { name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { name: 'ExpressJS', icon: 'expressjs', category: 'backend' },
  { name: 'NestJS', icon: 'nestjs', category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'database' },
  { name: 'MySQL', icon: 'mysql', category: 'database' },
  { name: 'GraphQL', icon: 'graphql', category: 'backend' },
  { name: 'Redis', icon: 'redis', category: 'backend' },
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'VSCode', icon: 'vscode', category: 'tools' },
  { name: 'Postman', icon: 'postman', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
  { name: 'Redux', icon: 'redux', category: 'frontend' },
];

export const TechArsenal = () => {
  return (
    <>
      <div className="relative w-full bg-[#f0f0f0] flex items-center justify-center py-20">
        <div className="absolute -top-[50px] md:-top-[150px] z-10 pointer-events-none">
          <Image
            src="/assets/images/mountain_divider.webp"
            alt="Divider"
            width={1200}
            height={150}
            className="h-full object-cover select-none w-full"
          />
        </div>
        <div className="absolute -top-[18px] md:-top-[35px] left-0 right-0 w-full z-10 pointer-events-none">
          <Image
            src="/assets/images/mountain_2.svg"
            alt="Divider"
            width={1600}
            height={200}
            className="h-auto object-cover select-none w-full"
          />
        </div>
        <div className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left side - Dragon */}
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src="/assets/images/medieval_dragon.png"
              alt="Dragon"
              width={800}
              height={800}
              className="object-contain drop-shadow-[0_0_20px_rgba(255,100,0,0.4)]"
            />
          </div>

          {/* Right side - Tech Arsenal */}
          <div className="relative w-full px-4">
            <h2 className="text-4xl font-serif font-bold text-center md:text-left text-orange-500 mb-2 tracking-wider">
              Forge Arsenal
            </h2>
            <p className="text-center md:text-left text-orange-400 mb-10 italic text-base max-w-xl">
              Unleash the arsenal of technologies and tools forged through
              relentless battles and creative quests.
            </p>

            <TooltipProvider delayDuration={100}>
              <div className="max-w-2xl mx-auto md:mx-0">
                <motion.div
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {skills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-col items-center justify-center cursor-pointer group"
                        >
                          <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                            <StackIcon
                              name={skill.icon}
                              style={{ fontSize: 40 }}
                            />
                          </div>
                          <p className="text-xs md:hidden font-medium text-center text-orange-400 group-hover:text-red-600 group-hover:font-bold transition-colors duration-300 mt-2">
                            {skill.name}
                          </p>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-background text-white border border-orange-600 shadow-lg z-50"
                      >
                        <div className="px-3 py-2 text-center">
                          <p className="font-bold">{skill.name}</p>
                          <p className="text-xs capitalize mt-1">
                            {skill.category}
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </motion.div>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};
