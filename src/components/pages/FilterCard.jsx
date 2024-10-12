import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const FilterCard = () => {

    const fitlerData = [
        {
            fitlerType: "Location",
            array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
        },
        {
            fitlerType: "Industry",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
        },
        {
            fitlerType: "Salary",
            array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
        },
    ]

  return (
    <div className="w-full bg-white p-3 rounded-md">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3"/>
        <RadioGroup>
            {
                fitlerData.map((data,index)=>(
                    <div key={index}>
                        <h1 className="font-bold">{data.fitlerType}</h1>
                        {
                            data.array.map((item,index)=>{
                                return(
                                    <div className="flex items-center space-x-2 my-2" key={index}>
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCard