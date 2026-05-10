import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import HeadingSection from "../../components/HeadingSection";

const CompanyLogos = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ]
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl container mx-auto py-20 px-5">
        <HeadingSection
          heading="Companies we have worked with"
          subHeading="Our trusted partners"
          description="We have paetnered with some of the most inovative and leading companies to bring the best solutions to you" />

        {/* logo container */}
        <div className='relative overflow-hidden border-y-[1px] border-gray-200 p-8'>
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
            {
              logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transform transition">
                  <logo.icon className="text-blue-600 text-4xl" title={logo.name} />
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompanyLogos