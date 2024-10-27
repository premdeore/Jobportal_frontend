// import React from 'react'

import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {

  const navigate = useNavigate();
  const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);
  const [filterJobs , setFilterJobs] = useState(allAdminJobs);

  useEffect(()=>{
    const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=>{
      if(!searchJobByText){
        return true
      };
      return job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.title.toLowerCase().includes(searchJobByText.toLowerCase());
    });
    setFilterJobs(filteredJobs);
  },[searchJobByText , allAdminJobs]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
       
              {filterJobs?.map((job) => (
                <tr key={job._id}>
                    <TableCell>{job?.company?.name}</TableCell>
                    <TableCell>{job?.title}</TableCell>
                    <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                    <TableCell className="text-right cursor-pointer">
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32 bg-white">
                          <div onClick={()=>navigate(`/admin/jobs/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                            <Edit2 className="w-4" />
                            <span>Edit</span>
                          </div>
                          <div onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center w-fit gap-2 cursor-pointer mt-2">
                            <Eye className="w-4"/>
                            <span>Applicants</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                </tr>
              ))}
        
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;