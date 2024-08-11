import DesignLine from "@/components/DesignLine";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaStackOverflow,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SiHashnode } from "react-icons/si";

const ContactData = [
  {
    id: 1,
    Title: "Github",
    icon: <FaGithub />,
    AccountName: "reallywasi",
    link: "https://github.com/reallywasi",
  },
  {
    id: 2,
    Title: "LinkedIn",
    icon: <FaLinkedinIn />,
    AccountName: "M Wasi",
    link: "https://www.linkedin.com/in/m-wasi-4a5825242/",
  },
  {
    id: 4,
    Title: "Twitter",
    icon: <FaTwitter />,
    AccountName: "reallywasi",
    link: "https://twitter.com/reallywasi",
  },
  {
    id: 5,
    Title: "Gmail",
    icon: <HiOutlineMail />,
    AccountName: "reallywasi@gmail.com",
    link: "mailto:reallywasi@gmail.com",
  },
  {
    id: 6,
    Title: "Location",
    icon: <FaLocationDot />,
    AccountName: "Dehradun, Uttarakhand",
    link: "https://goo.gl/maps/HDktK3izEcA4YdSx6",
  },
  {
    id: 7,
    Title: "Hashnode",
    icon: <SiHashnode />,
    AccountName: "reallywasi",
    link: "https://hashnode.com/@reallywasi",
  },
];

const ContactPage = () => {
  return (
    <section className="py-10 lg:py-16 px-3">
      <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white">
        <span className="text-primary"> </span>
      </h2>
      <div className="mt-10 lg:mt-20 bg-gray-700 p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          <span className="text-[#f72b1c]">C</span>ontact
        </h1>
        <p className="text-xs lg:text-sm text-gray-400 max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
        Feel free to reach out! Whether it's a call or a message, I'm always open to a conversation.
        </p>
      </div>

      <section className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Connect With<span className="text-[#f72b1c]"> Me </span>
        </h2>
        <DesignLine />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {ContactData.map((data) => (
            <div key={data.id}>
              <Link
                href={data.link}
                target="_blank"
                className="flex flex-col items-center border border-gray-800 rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full border border-[#f72b1c] grid place-items-center">
                  <div className="text-xl text-white">{data.icon}</div>
                </div>
                <h3 className="text-white font-semibold mt-3">{data.Title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {data.AccountName}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
