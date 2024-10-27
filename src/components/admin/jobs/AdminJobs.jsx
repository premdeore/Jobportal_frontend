// import React from 'react'

import { useNavigate } from "react-router-dom"
import Navbar from "../../shared/Navbar"
import { Button } from "../../ui/button"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AdminJobsTable from "./AdminJobsTable"
import useGetAllAdminJobs from "@/components/hooks/useGetAllAdminJobs"
import { setSearchJobByText } from "@/redux/features/jobSlice"

const AdminJobs = () => {
    useGetAllAdminJobs();
    const navigate = useNavigate();
    const [input , setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(setSearchJobByText(input));
    },[input , dispatch]);
    
  return (
    <div>
        <Navbar/>
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex items-center justify-between my-5">
            <input
                className="w-fit"
                placeholder="Filter by name, role"
                onChange={(e)=>setInput(e.target.value)}
            />
            <Button onClick={()=>navigate("/admin/jobs/create")} className="bg-black text-white">New Jobs</Button>
            </div>
          </div>
          <AdminJobsTable/>
    </div>
  )
}

export default AdminJobs