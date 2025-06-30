import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import StackIcon from 'tech-stack-icons';

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
  { name: 'Sass', icon: 'sass', category: 'frontend' },
];

export const TechArsenal = () => {
  // Hàm tạo màu sắc dựa trên category
  const getForgeColor = (category: string) => {
    const colorMap: Record<string, string> = {
      frontend: 'from-orange-500/10 to-red-600/20',
      backend: 'from-blue-500/10 to-indigo-600/20',
      database: 'from-emerald-500/10 to-green-600/20',
      tools: 'from-amber-500/10 to-yellow-600/20',
      language: 'from-purple-500/10 to-violet-600/20',
    };
    return colorMap[category] || 'from-gray-500/10 to-gray-600/20';
  };

  return (
    <div className="relative py-12">
      {/* Hiệu ứng nền lò rèn */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-orange-900/10 to-red-900/5" />
        <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <h2 className="text-3xl font-serif font-bold text-center text-orange-300 mb-2 tracking-wider">
        Forge Arsenal
      </h2>
      <p className="text-center text-orange-200 mb-10 italic text-base max-w-xl mx-auto">
        Unleash the arsenal of technologies and tools forged through relentless
        battles and creative quests.
      </p>

      <TooltipProvider delayDuration={100}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div
                      className={`
                        rounded-md
                        group relative overflow-hidden cursor-pointer
                        border border-orange-900/30 bg-gradient-to-b
                        from-orange-950/30 to-orange-900/20
                        transition-all duration-300
                        hover:scale-110 hover:shadow-xl
                        hover:shadow-orange-800/20
                        aspect-square
                        p-0
                      `}
                    >
                      <div
                        className={`
                          absolute inset-0 opacity-0 group-hover:opacity-100
                          transition-opacity duration-500
                          bg-gradient-to-br ${getForgeColor(skill.category)}
                        `}
                      />

                      {/* Hiệu ứng ánh sáng lửa */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -inset-[100%] opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-r from-transparent via-orange-400 to-transparent rotate-45 group-hover:animate-shimmer" />
                      </div>

                      <div className="flex flex-col items-center justify-center h-full relative z-10">
                        <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                          <StackIcon
                            name={skill.icon}
                            className="text-orange-200 group-hover:text-white"
                          />
                        </div>
                        <p className="text-xs font-medium text-center text-orange-200 group-hover:text-white transition-colors duration-300 mt-2">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  className="bg-gradient-to-r from-orange-800 to-red-900 border border-orange-600 text-orange-100 shadow-lg"
                >
                  <div className="px-3 py-2 text-center">
                    <p className="font-bold">{skill.name}</p>
                    <p className="text-xs text-orange-200 capitalize mt-1">
                      {skill.category}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};
