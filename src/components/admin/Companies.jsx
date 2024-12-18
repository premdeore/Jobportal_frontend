// import React from 'react'

import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import CompaniesTable from "./CompaniesTable"
import useGetAllCompnies from "../hooks/useGetAllCompnies"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchCompanyByText } from "@/redux/features/companySlice"

const Companies = () => {
    const navigate = useNavigate();
    useGetAllCompnies();
    const [input , setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(setSearchCompanyByText(input));
    },[input , dispatch]);
    
  return (
    <div>
        <Navbar/>
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex items-center justify-between my-5">
            <input
                className="w-fit"
                placeholder="Filter by name"
                onChange={(e)=>setInput(e.target.value)}
            />
            <Button onClick={()=>navigate("/admin/companies/create")} className="bg-black text-white">New Company</Button>
            </div>
            <CompaniesTable/>
        </div>
    </div>
  )
}

export default Companies