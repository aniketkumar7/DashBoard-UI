import { MdOutlineArrowOutward } from "react-icons/md";
import { LuArrowUp } from "react-icons/lu";
import { RiBarChartFill } from "react-icons/ri";


function Card() {
  return (
    <div>
          <div className="cards flex justify-between">
        
        <div className="card bg-white w-[30%] p-4 flex flex-col gap-2">
          <div className="card-header flex justify-between">
            <h1 className="">Followers</h1>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
          
          <span className="text-4xl font-bold ">93.2k</span>
          
          <div className="card-foot flex justify-between">
            <p className="text-sm flex gap-2 items-center">
              <span className="text-green-500 flex items-center gap-2">
                <LuArrowUp />
                0.8%
              </span>{" "}
              in last 7 days
            </p>
            <div className="bar flex items-center text-green-600 text-xl">
              <RiBarChartFill />
              <RiBarChartFill className="translate-x-[-2px]" />
            </div>
          </div>
        </div>
        
        
        <div className="card bg-white w-[30%] p-4 flex flex-col gap-3">
          <div className="card-header flex justify-between">
            <h1 className="">Followers</h1>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
          
          <span className="text-4xl font-bold ">93.2k</span>
          
          <div className="card-foot flex justify-between">
            <p className="text-sm flex gap-2 items-center">
              <span className="text-green-500 flex items-center gap-2">
                <LuArrowUp />
                0.8%
              </span>{" "}
              in last 7 days
            </p>
            <div className="bar flex items-center text-green-600 text-xl">
              <RiBarChartFill />
              <RiBarChartFill className="translate-x-[-2px]" />
            </div>
          </div>
        </div>
        
        
        <div className="card bg-white w-[30%] p-4 flex flex-col gap-3">
          <div className="card-header flex justify-between">
            <h1 className="">Followers</h1>
            <MdOutlineArrowOutward className="text-xl" />
          </div>
          
          <span className="text-4xl font-bold ">93.2k</span>
          
          <div className="card-foot flex justify-between">
            <p className="text-sm flex gap-2 items-center">
              <span className="text-green-500 flex items-center gap-2">
                <LuArrowUp />
                0.8%
              </span>{" "}
              in last 7 days
            </p>
            <div className="bar flex items-center text-green-600 text-xl">
              <RiBarChartFill />
              <RiBarChartFill className="translate-x-[-2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card