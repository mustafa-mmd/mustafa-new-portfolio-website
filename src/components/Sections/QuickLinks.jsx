import { Link } from "react-router-dom";
// Importing from react-icons
import { FaUserAlt } from "react-icons/fa";        // Profile/User Icon
import { GiSkills } from "react-icons/gi";        // Skills Icon
import { AiOutlineProject } from "react-icons/ai"; // Project Icon
import { MdOutlineContactMail } from "react-icons/md"; // Contact Icon

export default function QuickLinks() {
  const links = [
    { name: "About Me", href: "/about", icon:<FaUserAlt className="text-red-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />, color: "from-blue-500 to-indigo-500" },
    { name: "My Skills", href: "/skills", icon:<GiSkills className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
, color: "from-green-500 to-emerald-500" },
    { name: "All Projects", href: "/projects", icon:<AiOutlineProject className="text-teal-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />, color: "from-purple-500 to-pink-500" },
    { name: "Contact Me", href: "/contact", icon: <MdOutlineContactMail className="text-purple-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />, color: "from-red-500 to-orange-500" },
  ];

  return (
    <section className="w-full py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">✨ Explore More</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link, i) => (
            <Link key={i} to={link.href} className="w-full">
              <div
                className={`p-5 sm:p-6 rounded-xl shadow-lg bg-gradient-to-r ${link.color} 
                flex flex-col items-center justify-center gap-3 
                hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <span className="text-3xl sm:text-4xl">{link.icon}</span>
                <p className="font-semibold text-lg sm:text-xl">{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


