import Blogs from "../blogs/Blogs"
import CompanyLogos from "./CompanyLogos"
import FAQs from "./FAQs"
import HomeSection from "./HomeSection"
import NewsLetter from "./NewsLetter"
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
      <FAQs />
      <NewsLetter />
    </>
  )
}

export default Home