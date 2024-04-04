import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <header className="header px-[30px] h-[54px] flex items-center justify-between shadow-lg shadow-green-300/10">
      <p className="text-sm font-[100] text-zinc-800">
        Metrics looking good, Snow!
      </p>
      <div className="w-1/3 search border-[1px] rounded-md  px-3 flex items-center text-zinc-300">
        <IoIosSearch className="text-xl mr-2" />
        <input
          className=" bg-transparent placeholder:text-zinc-300 focus:outline-none font-thin font-sm text-zinc-500 outline-none border-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-4 mr-5">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src="https://img.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg?t=st=1710389220~exp=1710392820~hmac=57db0dc7e9cfd94c8349c61a009f3248e226635820d95abac96521135891f0e6&w=740"
          alt=""
        />
        <div>
          <p className="text-[0.88rem] text-zinc-800">Snow Olohjere</p>
          <p className="text-[0.7rem] text-zinc-500">uch23@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
