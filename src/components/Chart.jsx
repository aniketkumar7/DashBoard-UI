import { BarChart } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { AiFillEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const chartdata = [
  {
    name: "Mon",
    Sales: 30,
  },
  {
    name: "Tue",
    Sales: 20,
  },
  {
    name: "Wed",
    Sales: 65,
  },
  {
    name: "Thu",
    Sales: 42,
  },
  {
    name: "Fri",
    Sales: 98,
  },
  {
    name: "Sat",
    Sales: 48,
  },
  {
    name: "Sun",
    Sales: 80,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat("en").format(number).toString();

function Charts() {
  return (
    <div className="flex justify-between flex-col gap-2 w-full">
      
      <div className=" bg-white mt-3  p-4 rounded-lg w-full">
        
        <div className="flex justify-between gap-24  items-center">
          
          <h3 className="font-semibold w-full">Engagement Rates</h3>
          
          <Select className="w-10" defaultValue="1">
            <SelectItem value="1">Weekly</SelectItem>
            <SelectItem value="2">Monthly</SelectItem>
            <SelectItem value="3">Yearly</SelectItem>
          </Select>
          
        </div>
        
        <BarChart
          className="mt-1 w-full h-[30vh]"
          data={chartdata}
          index="name"
          categories={["Sales"]}
          colors={["green-200"]}
          valueFormatter={dataFormatter}
          yAxisWidth={38}
        />
      </div>

      <div>
        <h1 className="mb-1">Post Activity</h1>

        <div className="flex gap-1 flex-col">
          <div className="bar bg-white text-black p-2 flex  items-center justify-between rounded-md">
            <img
              width=" 35px"
              className="rounded-md"
              src="https://i.ibb.co/0Fqk8Z9/Rectangle-4.png"
              alt=""
            />
            <p className="text-[0.6rem] max-w-[8vw]">
              Success can be achieved by being bold enough...
            </p>
            <p className="date text-[.7rem] font-semibold">May 30</p>
            <span className="flex gap-1">
              <AiFillEye className="bg-green-400 rounded-lg" />
              <p className="follow text-[.6rem]">1.1k</p>
            </span>
            <span>
              <BsThreeDots />
            </span>
          </div>

          <div className="bar bg-white text-black p-2 flex  items-center justify-between rounded-md">
            <img
              width=" 35px"
              className="rounded-md"
              src="https://i.ibb.co/0Fqk8Z9/Rectangle-4.png"
              alt=""
            />
            <p className="text-[0.6rem] max-w-[8vw]">
              Success can be achieved by being bold enough...
            </p>
            <p className="date text-[.7rem] font-semibold">May 30</p>
            <span className="flex gap-1">
              <AiFillEye className="bg-green-400 rounded-lg" />
              <p className="follow text-[.6rem]">1.1k</p>
            </span>
            <span>
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Charts;
