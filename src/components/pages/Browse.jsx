import Navbar from "../shared/Navbar"
import Job from "./Job";

const Browse = () => {
    const randomJobs = [1,2,3];
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Serach Results ({randomJobs.length})</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                randomJobs.map((item,index)=>{
                    return(
                        <div key={index}><Job/></div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse