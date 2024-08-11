"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const TheDaysICode = () => {
  const [githubData, setGithubData] = useState<any>(null);
  const [leetcodeData, setLeetcodeData] = useState<any>(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/reallywasi');
        setGithubData(response.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    const fetchLeetcodeData = async () => {
      try {
        // Placeholder for LeetCode data fetch; LeetCode API does not have a public endpoint
        const response = await axios.get('https://leetcode.com/u/reallywasi/');
        setLeetcodeData(response.data);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
      }
    };

    fetchGithubData();
    fetchLeetcodeData();
  }, []);

  return (
    <div className="py-10 lg:py-16 px-4 border-b border-opacity-50 text-white">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
        The Days I Code
      </h2>
      <p className="text-center mb-12 text-gray-400">
        "The only way to do great work is to love what you do." - Steve Jobs
      </p>
      <div className="grid grid-cols-1 gap-6">
        {/* GitHub Section */}
        <div className="p-6 border rounded-lg border-gray-800 bg-gray-900 shadow-lg">
       
          <div className="relative w-full h-52 mb-4">
            <Image src="/githubgreen.png" alt="GitHub Green Streaks" layout="fill" objectFit="contain" className="rounded-lg" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">My GitHub   <span className="text-[#f72b1c]">Stats</span> </h3>

          <div className="relative w-full h-52 mb-4">
            <Image src="/githubstats.png" alt="GitHub Stats" layout="fill" objectFit="contain" className="rounded-lg" />
          </div>
          <div className="relative w-full h-36  ">
            <Image src="/githubstreeks.png" alt="GitHub Streaks" layout="fill" objectFit="contain" className="rounded-lg" />
          </div>
          {githubData && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-semibold">Username</p>
                <p className="text-gray-400">{githubData.login}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-semibold">Public Repos</p>
                <p className="text-gray-400">{githubData.public_repos}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-semibold">Followers</p>
                <p className="text-gray-400">{githubData.followers}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-semibold">Following</p>
                <p className="text-gray-400">{githubData.following}</p>
              </div>
            </div>
          )}
     <div className="mt-6">
    <p className="text-center text-sm mb-2 text-gray-400">Check out my projects and  <br/> contributions</p>
    <div className="flex justify-center px-12  ">
      <a href="https://github.com/reallywasi" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#f72b1c] rounded-lg text-center text-white hover:bg-[#d12817]">
        <h4 className="text-lg font-semibold px-20 ">Connect with Me on  <br/>  GitHub</h4>
      </a>
    </div>
  </div>
        </div>

        {/* LeetCode Section */}
       
      </div>
    </div>
  );
};

export default TheDaysICode;
