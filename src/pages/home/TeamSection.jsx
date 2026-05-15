import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import HeadingSection from "../../components/HeadingSection";
const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];
const TeamSection = () => {
    return (
        <div className="bg-gray-200">
            <div className="max-w-screen-xl container mx-auto py-20 px-5 ">
                <HeadingSection heading="Meet The Experts" subHeading="Our Team" />
                {/* Blog Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        teamMembers.map((member, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                                <img src={member.image} alt={member.title} className="w-full h-48 object-cover hover:scale-105 transition transform" />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                                    <p className="text-sm font-medium text-gray-500 mb-4">{member.role}</p>
                                    {/* social icon */}
                                    <div className="flex items-center space-x-4 mb-5 ">
                                        <Link to={member.linkedIn}><FaLinkedinIn className="text-blue-800 hover:text-blue-600" /></Link>
                                        <Link to={member.facebook}><FaFacebookF className="text-blue-600 hover:text-blue-800" /></Link>
                                        <Link to={member.twitter}><FaTwitter className="text-blue-500 hover:text-blue-700" /></Link>
                                        <Link to={member.instagram}><FaInstagram className="text-red-600 hover:text-red-800" /></Link>
                                    </div>
                                    {/* button */}
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                                        Contact {member.name.split(" ")[0]}
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamSection