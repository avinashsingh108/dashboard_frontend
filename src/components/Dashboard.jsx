import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2 px-28 py-2 max-h-screen font-outfit bg-gray-100">
      <div className="row-span-5 ">
        <Sidebar/>
      </div>
      <div className="col-span-3 "><One/></div>
      <div className="col-span-3 row-span-2 col-start-2 row-start-2"><Two/></div>
      <div className="col-span-3 row-span-2 col-start-2 row-start-4"><Three/></div>
      <div className="row-span-2 col-start-5 row-start-1  "><Four/></div>
      <div className="row-span-2 col-start-5 row-start-3 "><Five/></div>
      <div className="col-start-5 row-start-5 rounded-xl"><Six/></div>
    </div>
  );
};

export default Dashboard;
