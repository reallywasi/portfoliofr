import React from 'react';
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';
import { SiCoursera, SiHackerrank } from 'react-icons/si';

const Resume = () => {
  return (
    <section className="py-10 lg:py-16 px-3 border-b border-opacity-50 border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">
          Resume of <span className="text-[#f72b1c]">Mohammad Wasi</span>
        </h2>
        <p className="text-gray-400 mt-2">Last Updated on 8th August 2024</p>
        <p className="text-gray-400 mt-2">reallywasi@gmail.com | +91 7900225025</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-4">Links</h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/m-wasi-4a5825242/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[#0077b5] rounded-lg text-white hover:bg-[#005582]"
          >
            <FaLinkedin className="mr-2 text-lg" />
            LinkedIn: m-wasi
          </a>
          <a
            href="https://github.com/reallywasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[#333] rounded-lg text-white hover:bg-[#222]"
          >
            <FaGithub className="mr-2 text-lg" />
            GitHub: reallywasi
          </a>
          <a
            href="https://reallywasi.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[#f72b1c] rounded-lg text-white hover:bg-[#d12817]"
          >
            <FaLink className="mr-2 text-lg" />
            Portfolio: reallywasi.github.io
          </a>
        </div>
      </div>

      {/* <div className="mb-10">
  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">UPES</h4>
      <p className="text-gray-400">B.Tech in Computer Science</p>
      <p className="text-gray-400">Oct 2022 - May 2026 | CGPA: 8.93 (4th sem)</p>
      <p className="text-gray-400">Continuous meritorious scholarship holder since the first semester.</p>
    </div>
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">FREECODECAMP</h4>
      <p className="text-gray-400">Front End Development</p>
      <p className="text-gray-400">May 2023 - Aug 2023</p>
    </div>
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">MOUNT FORT ACADEMY</h4>
      <p className="text-gray-400">Graduated 2021 | Dehradun, India</p>
      <p className="text-gray-400">School Captain (2020-2021) - Led the school council and conducted various events like sports day and annual functions.</p>
      <p className="text-gray-400">Head of the Literary Club - Organized debates, SUPW workshops, and more.</p>
    </div>
  </div>
</div> */}
<div className="mb-10">
  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">UPES</h4>
      <p className="text-gray-400">B.Tech in Computer Science</p>
      <p className="text-gray-400">Oct 2022 - May 2026 | CGPA: 8.93 (4th sem)</p>
      <ul className="text-gray-400 list-disc list-inside mt-2">
        <li>Continuous meritorious scholarship holder since the first semester.</li>
        <li>Involved in various academic and extracurricular activities.</li>
      </ul>
    </div>
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">FREECODECAMP</h4>
      <p className="text-gray-400">Front End Development</p>
      <p className="text-gray-400">May 2023 - Aug 2023</p>
    </div>
    <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
      <h4 className="text-lg font-semibold text-white">MOUNT FORT ACADEMY</h4>
      <p className="text-gray-400">Graduated 2021 | Dehradun, India</p>
      <ul className="text-gray-400 list-disc list-inside mt-2">
        <li>School Captain (2020-2021) - Led the school council and conducted various events like sports day and annual functions.</li>
        <li>Head of the Literary Club - Organized debates, SUPW workshops, and more.</li>
      </ul>
    </div>
  </div>
</div>


      <div className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">OCTANET SERVICES PVT LTD.</h4>
            <p className="text-gray-400">Web Development Intern</p>
            <p className="text-gray-400">Jan 2024 - Present | Remote</p>
            <p className="text-gray-400">Working on MERN Stack for web development.</p>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">UPES ACM STUDENT CHAPTER</h4>
            <p className="text-gray-400">Technical Core Committee Member</p>
            <p className="text-gray-400">Aug 2023 - Present | Hybrid, Dehradun, India</p>
            <p className="text-gray-400">Working on front-end development and organizing technical events.</p>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">GITHUB</h4>
            <p className="text-gray-400">Global Campus Student</p>
            <p className="text-gray-400">Aug 2023 - Present | Remote</p>
            <p className="text-gray-400">Contributing to open source projects through GitHub.</p>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">OASIS INFOBYTE</h4>
            <p className="text-gray-400">Web Development Intern</p>
            <p className="text-gray-400">Dec 2023 - Jan 2024 | Remote</p>
            <p className="text-gray-400">Working on web development using the MERN Stack.</p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-4">Projects</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">NudgeQuest</h4>
            <p className="text-gray-400">An AI-powered mock interview platform that helps users prepare for real interviews. Built with Next.js, PostgreSQL, and ShadCN.</p>
            <a href="https://github.com/reallywasi/NudgeQuest" target="_blank" rel="noopener noreferrer" className="text-[#61DBFB] hover:underline">Repository</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">House Rental Application</h4>
            <p className="text-gray-400">A full-stack property renting app featuring seamless user login, property listing, and online payment capabilities. Built with MERN Stack and Redux.</p>
            <a href="https://github.com/reallywasi/House_Rental_Application" target="_blank" rel="noopener noreferrer" className="text-[#61DBFB] hover:underline">Repository</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">Prompt Scribe</h4>
            <p className="text-gray-400">An AI content generation app that produces various content with a single click. Built with NextJS.</p>
            <a href="https://github.com/reallywasi/PromptScribe" target="_blank" rel="noopener noreferrer" className="text-[#61DBFB] hover:underline">Repository</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">News Web App</h4>
            <p className="text-gray-400">A web app built using HTML, CSS, and JavaScript to fetch real-time news via APIs. Highly responsive and user-friendly.</p>
            <a href="https://github.com/reallywasi/News-Web-App" target="_blank" rel="noopener noreferrer" className="text-[#61DBFB] hover:underline">Repository</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#f72b1c] hover:bg-[#f72b1c] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">Tic Tac Toe Game</h4>
            <p className="text-gray-400">A web-based Tic Tac Toe game created using React. Classic game with a sleek interface and smooth interactions.</p>
            <a href="https://github.com/reallywasi/React_Tic_Tac_Toe" target="_blank" rel="noopener noreferrer" className="text-[#61DBFB] hover:underline">Repository</a>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#007bff] hover:bg-[#007bff] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">AWS Cloud Practitioner Essentials</h4>
            <p className="text-gray-400">Coursera</p>
            <p className="text-gray-400">Issued Feb 2024</p>
            <a href="https://www.coursera.org/learn/aws-cloud-practitioner-essentials" target="_blank" rel="noopener noreferrer" className="text-[#007bff] hover:underline">View Credential</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#28a745] hover:bg-[#28a745] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">CSS Developer</h4>
            <p className="text-gray-400">HackerRank</p>
            <p className="text-gray-400">Issued Jun 2023</p>
            <a href="https://www.hackerrank.com/certificates/AD7D37A6FB60" target="_blank" rel="noopener noreferrer" className="text-[#28a745] hover:underline">View Credential</a>
          </div>
          <div className="p-6 border rounded-lg border-gray-800 hover:border-[#28a745] hover:bg-[#28a745] hover:text-white transition-all">
            <h4 className="text-lg font-semibold text-white">Problem Solving (Basic)</h4>
            <p className="text-gray-400">HackerRank</p>
            <p className="text-gray-400">Issued Jun 2023</p>
            <a href="https://www.hackerrank.com/certificates/0BB1896EF66F" target="_blank" rel="noopener noreferrer" className="text-[#28a745] hover:underline">View Credential</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <blockquote className="text-gray-400 italic">
          "The best way to predict the future is to invent it." – Alan Kay
        </blockquote>
      </div>
    </section>
  );
};

export default Resume;



