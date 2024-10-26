// import React from 'react'

import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import CompaniesTable from "./CompaniesTable"
import useGetAllCompnies from "../hooks/useGetAllCompnies"

const Companies = () => {
    const navigate = useNavigate();
    useGetAllCompnies();
  return (
    <div>
        <Navbar/>
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex items-center justify-between my-5">
            <input
                className="w-fit"
                placeholder="Filter by name"
            />
            <Button onClick={()=>navigate("/admin/companies/create")} className="bg-black text-white">New Company</Button>
            </div>
            <CompaniesTable/>
        </div>
    </div>
  )
}

export default Companies