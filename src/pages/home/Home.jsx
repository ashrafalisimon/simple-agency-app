import Blogs from "../blogs/Blogs"
import CompanyLogos from "./CompanyLogos"
import HomeSection from "./HomeSection"
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
    </>
  )
}

export default Home