import CategoryCarousel from "./pages/CategoryCarousel"
import Footer from "./shared/Footer"
import HeroSection from "./pages/HeroSection"
import LatestJobs from "./pages/LatestJobs"
import Navbar from "./shared/Navbar"
import useGetAllJobs from "./hooks/useGetAllJobs"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user?.role === "recruiter"){
      navigate("/admin/companies");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
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