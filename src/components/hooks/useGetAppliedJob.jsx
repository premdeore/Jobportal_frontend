// import React from 'react'
import { setAllAppliedJobs } from '@/redux/features/jobSlice';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios'
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { toast } from 'sonner';

const useGetAppliedJob = () => {
    const dispatch = useDispatch();
useEffect(()=>{
    const fetchAppliedJob = async()=>{
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
            if(res.data.success){
                dispatch(setAllAppliedJobs(res.data.application));
            }

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    fetchAppliedJob();
},[]);
}

export default useGetAppliedJob