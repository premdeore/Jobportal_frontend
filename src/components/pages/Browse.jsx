import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar"
import Job from "./Job";

const randomJobs = [1,2,3];
const Browse = () => {
    const {allJobs} = useSelector(store=>store.job);

  return (
    <div>
        <Navbar/>
        <div>
            <h1>Serach Results ({randomJobs.length})</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                allJobs.map((job)=>{
                    return(
                        <div key={job._id}><Job job={job}/></div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse