import CategoryCarousel from "./pages/CategoryCarousel"
import Footer from "./shared/Footer"
import HeroSection from "./pages/HeroSection"
import LatestJobs from "./pages/LatestJobs"
import Navbar from "./shared/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home