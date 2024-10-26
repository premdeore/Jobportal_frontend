// import React from 'react'

import { useNavigate } from "react-router-dom"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import axios from "axios"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import { useState } from "react"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { setSingleCompany } from "@/redux/features/companySlice"

const CompanyCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyName , setCompanyName] = useState();

    const registerNewCompany = async()=>{
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            if(res?.data?.success){
                dispatch(setSingleCompany(res?.data?.company));
                const companyId = res?.data?.company?._id;
                toast.success(res.data.message);
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
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
            onChange={(e)=> setCompanyName(e.target.value)}
            placeholder="jobHunt, Microsoft etc."
            />
            <div className="flex items-center gap-2 my-10">
                <Button onClick={()=>navigate("/admin/companies")} variant="outline">Cancel</Button>
                <Button onClick={registerNewCompany} className="bg-black text-white">Continue</Button>
            </div>

        </div>
    </div>
  )
}

export default CompanyCreate