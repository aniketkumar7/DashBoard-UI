import { DonutChart } from "@tremor/react";
import { BarChart } from '@tremor/react';
import Visit from "./Visit";


const datahero = [
  {
    name: "Female",
    value: 55,
  },
  {
    name: "Others",
    value: 10,
  },
  {
    name: "Male",
    value: 35,
  },
];

const chartdata = [
  {
    'Male': 35,
    'Female': 44,
    'Others': 25,
  },
  {
    'Male': 30,
    'Female': 35,
    'Others': 18,
  },
  {
    'Male': 20,
    'Female': 28,
    'Others': 12,
  },
  {
    'Male': 12,   
    'Female': 18,
    'Others': 7,  
  },
];

function Charts2() {
  return (
    <div className="flex flex-col w-full"> 
    <div className="head mt-3">
      <h1>Audience DemoGraphy</h1>
    </div>
    <div className="bg-white mt-1  px-2 pt-1 rounded-lg  w-full flex flex-col gap-1">
      
      {/* <Legend
        className=" flex justify-end h-7"
        categories={["Female", "Others", "Male"]}
        colors={["green-500", "yellow-300", "blue-800"]}
      /> */}
      
      <div className="flex justify-between  border-b-gray-100  border-b-2  ">
        
       <div className="h-44 w-[35%]  flex items-center justify-center flex-col">
        <h3>Age Group</h3>
       <DonutChart
          data={datahero}
          variant="donut"          
          colors={["green-500", "yellow-300", "blue-800"]}
          className=" w-[55%]"
        />
       </div>

        <div className=" h-full w-[62%]">
        <BarChart
        className="h-44"
        data={chartdata}
        index="date"
        categories={['Female', 'Others', 'Male']}
        colors={["green-500", "yellow-300", "blue-800"]}
        yAxisWidth={30}
        isStacked={true}
         />
        </div>
        
      </div>
      
    <Visit/>
    </div>
    </div>
  );
}
export default Charts2;
