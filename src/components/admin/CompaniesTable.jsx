// import React from 'react'

import { Edit2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrehq9gcbNSHjCVgSey_37dc7Jd5WO_LECw&s" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>24-10-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
                <Popover>
                    <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                    <PopoverContent className="w-32">
                        <div className="flex items-center gap-2 w-fit cursor-pointer">
                            <Edit2 className="w-4"/>
                            <span>Edit</span>
                        </div>
                    </PopoverContent>
                </Popover>
          </TableCell>

        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
