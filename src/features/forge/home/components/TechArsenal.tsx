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
  { name: 'MongoDB', icon: 'mongodb', category: 'database' },
  { name: 'MySQL', icon: 'mysql', category: 'database' },
  { name: 'GraphQL', icon: 'graphql', category: 'backend' },
  { name: 'Redis', icon: 'redis', category: 'backend' },
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'VSCode', icon: 'vscode', category: 'tools' },
  { name: 'Postman', icon: 'postman', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
  { name: 'Figma', icon: 'figma', category: 'tools' },
  { name: 'Redux', icon: 'redux', category: 'frontend' },
];

export const TechArsenal = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-20">
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-auto z-10 pointer-events-none opacity-35">
        <Image
          src="/assets/images/mediaval_frame.png"
          alt="Frame"
          className="w-full h-full object-contain"
          width={1000}
          height={600}
        />
      </div>

      <div className="relative w-[90%] max-w-[1000px]">
        <h2 className="text-3xl font-serif font-bold text-center text-orange-300 mb-2 tracking-wider">
          Forge Arsenal
        </h2>
        <p className="text-center text-orange-200 mb-10 italic text-base max-w-xl mx-auto">
          Unleash the arsenal of technologies and tools forged through
          relentless battles and creative quests.
        </p>

        <TooltipProvider delayDuration={100}>
          <div className="max-w-2xl mx-auto">
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
                          className="text-orange-200 group-hover:text-white transition-colors duration-300"
                          style={{ fontSize: 40 }}
                        />
                      </div>
                      <p className="text-xs font-medium text-center text-orange-200 group-hover:text-white transition-colors duration-300 mt-2">
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
  );
};
