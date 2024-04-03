import { BiSolidDashboard } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function SideBar() {
  return (
    <aside className="sidebar relative h-full overflow-y-auto transition-all transition-duration-500 border-r-[1px] flex flex-col justify-between py-4">
      <div>
        <div className="flex justify-between items-center mb-10 px-6">
          <div className="logo">
            <h1 className="text-3xl font-bold text-green-500">LYT</h1>
          </div>
          <span className="close hidden">X</span>
        </div>

        <ul className="sidebar-list list-none p-0">
          
          <li className="p-4 bg-green-400">
            <a
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600"
              href="#">
              <BiSolidDashboard className="text-xl" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <SiGoogleanalytics />
              <span>Analytics</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <IoIosPeople className="text-2xl" />
              <span>Users</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <IoNotificationsOutline className="text-xl" />
              <span>Notifications</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <MdOutlinePermMedia className="text-xl" />
              <span>Media</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <MdOutlineContactSupport className="text-xl" />
              <span>Support</span>
            </a>
          </li>

          <li className="p-4 ">
            <a
              href="#"
              className="flex items-center hover:cursor-pointer gap-4 text-[1.1vw] text-gray-600">
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer relative bottom-0 text-green-500 flex items-center p-5 gap-4">
        <a href="#" className="flex gap-4 items-center"><IoIosLogOut className="text-xl font-bold" /> <span>Log-Out</span></a>
      </div>
    </aside>
  );
}
export default SideBar;
