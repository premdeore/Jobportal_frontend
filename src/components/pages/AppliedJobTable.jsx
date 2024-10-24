import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2].map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell>13-10-2024</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right text-white"><Badge className="bg-black">Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
