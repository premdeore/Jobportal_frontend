// import React from 'react'

import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const CompanyCreate = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div className="max-w-4xl mx-auto">
            <div className="my-10">
                <h1 className="font-bold text-2xl">Your Company Name</h1>
                <p className="text-gray-500">What would you like to give your company name ? you can change this later.</p>
            </div>
            <Label>Company Name</Label>
            <Input
            type="text"
            className="my-2"
            placeholder="jobHunt, Microsoft etc."
            />
            <div className="flex items-center gap-2 my-10">
                <Button onClick={()=>navigate("/admin/companies")} variant="outline">Cancel</Button>
                <Button className="bg-black text-white">Continue</Button>
            </div>

        </div>
    </div>
  )
}

export default CompanyCreate