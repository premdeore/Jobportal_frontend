import { useDispatch, useSelector } from "react-redux";
import Navbar from "../shared/Navbar"
import Job from "./Job";
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/features/jobSlice";
import useGetAllJobs from "../hooks/useGetAllJobs";

const Browse = () => {
    useGetAllJobs()
    const dispatch = useDispatch();
    const {allJobs} = useSelector(store=>store.job);

    useEffect(()=>{
        dispatch(setSearchedQuery(""));
    },[]);

  return (
    <div>
        <Navbar/>
        <div>
            <h1>Serach Results ({allJobs?.length})</h1>
            <div className="grid grid-cols-3 gap-4">
            {
                allJobs.map((job)=>{
                    return(
                        <Job key={job._id} job={job}/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse