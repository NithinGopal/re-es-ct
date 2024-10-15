import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import HOW_IT_WORKS from "@/components/HowItWorks"
import FeatureProperty from "@/components/FeatureProperty"
import Services from "@/components/Services"
import AboutUs from "@/components/AboutUs"
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HOW_IT_WORKS />
      <FeatureProperty />
      <Services />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home