import Blogs from "../blogs/Blogs"
import CompanyLogos from "./CompanyLogos"
import HomeSection from "./HomeSection"
import Priceing from "./Priceing"
import ServicesSection from "./ServicesSection"
import TeamSection from "./TeamSection"
import Testimonials from "./Testimonials"
import ToolsSection from "./ToolsSection"

const Home = () => {
  return (
    <>
      <HomeSection />
      <ToolsSection />
      <CompanyLogos />
      <ServicesSection />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Priceing />
    </>
  )
}

export default Home