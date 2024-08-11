import { FaCss3Alt, FaReact, FaJava, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import {
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = [
  {
    id: 1,
    title: "Next Js",
    icon: <SiNextdotjs className="w-[28px] h-[28px]" />,
  },
  {
    id: 2,
    title: "React JS",
    icon: <FaReact className="w-[28px] h-[28px] text-[#61DBFB]" />,
  },
  {
    id: 3,
    title: "TypeScript",
    icon: <TbBrandTypescript className="w-[28px] h-[28px] text-[#007acc]" />,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="w-[28px] h-[28px] text-[#6a83f7]" />,
  },
  {
    id: 5,
    title: "CSS",
    icon: <FaCss3Alt className="w-[28px] h-[28px] text-blue-500" />,
  },
  {
    id: 6,
    title: "Prisma ORM",
    icon: <SiPrisma className="w-[28px] h-[28px]" />,
  },
  {
    id: 7,
    title: "Node JS",
    icon: <FaNodeJs className="w-[28px] h-[28px] text-green-700" />,
  },
  {
    id: 8,
    title: "Express JS",
    icon: <SiExpress className="w-[28px] h-[28px]" />,
  },
  {
    id: 9,
    title: "JavaScript",
    icon: <TbBrandJavascript className="w-[28px] h-[28px] text-yellow-500" />,
  },
  {
    id: 10,
    title: "MongoDB",
    icon: <SiMongodb className="w-[28px] h-[28px] text-green-600" />,
  },
  {
    id: 11,
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="w-[28px] h-[28px] text-[#0064a5]" />,
  },
  {
    id: 12,
    title: "Git",
    icon: <FaGitAlt className="w-[28px] h-[28px] text-[#f34f29]" />,
  },
  {
    id: 13,
    title: "GitHub",
    icon: <BsGithub className="w-[28px] h-[28px]" />,
  },
  {
    id: 14,
    title: "Java",
    icon: <FaJava className="w-[28px] h-[28px] text-[#5382a1]" />,
  },
  {
    id: 15,
    title: "C++",
    icon: <TbBrandCpp className="w-[28px] h-[28px] text-blue-900" />,
  },
  {
    id: 16,
    title: "Bootstrap",
    icon: <BsFillBootstrapFill className="w-[28px] h-[28px] text-purple-700" />,
  },
  {
    id: 17,
    title: "HTML",
    icon: <ImHtmlFive2 className="w-[28px] h-[28px] text-red-600" />,
  },
];

const Skill = () => {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {Skills.map((data) => {
        return (
          <div key={data.id}>
            <div className="flex flex-col items-center justify-center px-3 py-3 border rounded-lg border-gray-800 hover:border-white hover:bg-[#f72b1c]">
              <div className="flex items-center justify-center md:w-12 md:h-12 text-white">
                {data.icon}
              </div>
              <h3 className="mt-2 text-xs font-medium text-center text-white md:text-sm">
                {data.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
