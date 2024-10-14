import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import HOW_IT_WORKS from "@/components/HowItWorks"
import FeatureProperty from "@/components/FeatureProperty"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HOW_IT_WORKS />
      <FeatureProperty />
    </div>
  )
}

export default Home