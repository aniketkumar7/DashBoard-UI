import Charts from "./Chart";
import Card from "./Card";
import Charts2 from "./Charts2";

function Home() {
  return (
    <main className="main-container bg-[#F0FAEE] pl-7 pr-12">
      <div className="title flex justify-between items-center py-3">
        <h1 className="text-semibold text-[1.1rem]">Performance Metrics</h1>
        <a href="#" className="text-sm text-green-500 border-b-2 border-green-500">
          Download Summary
        </a>
      </div>

     <Card/>
     
     <div className="flex justify-between w-full gap-4 pr-2">
      <Charts/>
      <Charts2 />
     </div>

    </main>
  );
}
export default Home;
