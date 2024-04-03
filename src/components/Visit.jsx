import { FaLongArrowAltUp } from "react-icons/fa";

function Visit() {
  return (
    <div className="location  h-fit px-3 flex flex-col gap-2">
        
        <div className="heading flex justify-between items-center">
          <h2 className="text-[1rem]">Top Location</h2>
          <button className="text-[.8rem] border-2 border-green-400 p-1 text-green-500 rounded-md hover:text-white hover:bg-green-400 transition-all  ease-in">
            See More
          </button>
        </div>

        <div className="place">
          
          <div className="visit flex items-center justify-between">
            <p className="text-[.8rem] text-gray-500">Country</p>
            <p className="text-[.8rem] text-gray-500">Visitors</p>
          </div>
          
          <div className="visit-data">
            
            <div className="flex items-center justify-between  border-t-2">
              <h3 className="text-sm">Nigeria</h3>
              <span>
                <p className="text-sm">5,430</p>
                <p className="text-green-500 text-[0.7rem] flex items-center"><FaLongArrowAltUp />2.2%</p>
              </span>
            </div>
            
            <div className="flex items-center justify-between border-t-2">
              <h3 className="text-sm">India</h3>
              <span>
                <p className="text-sm">5,453</p>
                <p className="text-green-500 text-[0.7rem] flex items-center"><FaLongArrowAltUp />1.2%</p>
              </span>
            </div>
            
            <div className="flex items-center justify-between  border-t-2">
              <h3 className="text-sm">India</h3>
              <span>
                <p className="text-sm">5,453</p>
                <p className="text-green-500 text-[0.7rem]">+2.5%</p>
              </span>
            </div>
            
            <div className="flex items-center justify-between  border-t-2">
              <h3 className="text-sm">India</h3>
              <span>
                <p className="text-sm">5,453</p>
                <p className="text-green-500 text-[0.7rem]">+2.5%</p>
              </span>
            </div>
            
          </div>
          
        </div>
      </div>
  )
}
export default Visit