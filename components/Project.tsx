import Link from "next/link";
import Image from "next/image";

const Project = ({ project }: any) => {
  return (
    <div className="bg-[#181818] border border-gray-800 rounded-lg px-4 pt-6 text-center overflow-hidden">
      <div className="mb-3">
        <Link href={project.link} target="_blank">
          <h3 className="text-white text-base lg:text-xl font-semibold transition duration-300 hover:text-[#f72b1c]">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-xs">
          {project.technologies.join(", ")}
        </p>
      </div>
      <div className="relative">
        <div className="shadow-xl overflow-hidden rounded-lg">
          <Image
            alt={`${project.title}`}
            src={project.image_url}
            className="transition duration-300 transform hover:scale-105"
            width={500}
            height={300}
          />
        </div>
        <div className="mt-3 flex justify-center space-x-4 py-4">
          {project.github && (
            <Link href={project.github} target="_blank">
              <div className="bg-red-600 text-white py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:bg-black">
                GitHub Repo
              </div>
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank">
              <div className="bg-black text-white py-2 px-4 rounded-lg cursor-pointer transition duration-300 hover:bg-red-600">
                Live Demo
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;


