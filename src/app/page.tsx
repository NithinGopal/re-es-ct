import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import HOW_IT_WORKS from "@/components/HowItWorks"
import FeatureProperty from "@/components/FeatureProperty"
import Services from "@/components/Services"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HOW_IT_WORKS />
      <FeatureProperty />
      <Services />
    </div>
  )
}

export default Home