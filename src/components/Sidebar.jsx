import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { MdDashboard, MdOutlineCampaign } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { TiFlowChildren } from "react-icons/ti";
import { GrIntegration } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-200 h-full p-4 rounded-2xl shadow-lg">
      <div className="text-2xl font-semibold mb-2 px-4 py-2">Salesway</div>

      <div className="flex flex-col mb-6">
        <button className="text-gray-500 text-left font-medium px-4 py-2 flex items-center gap-x-2">
          <IoSettingsOutline /> Settings
        </button>
        <button className="text-gray-500 text-left font-medium px-4 py-2 flex items-center gap-x-2">
          <AiOutlineTeam />
          Team
        </button>
      </div>

      <div className="text-xs font-medium text-gray-700 px-4 py-2 uppercase">
        Menu
      </div>

      <div className="flex flex-col text-gray-500 text-left">
        <button className="flex items-center gap-x-2 px-4 py-2 bg-white text-black rounded-lg">
          <MdDashboard className="text-blue-600" />
          Dashboard
        </button>
        <button className="flex items-center gap-x-2 px-4 py-2">
          <MdOutlineCampaign /> Campaigns
        </button>
        <button className="flex items-center gap-x-2 px-4 py-2">
          <TiFlowChildren /> Flows
        </button>
        <button className="flex items-center gap-x-2 px-4 py-2">
          <GrIntegration /> Integrations
        </button>
        <button className="flex items-center gap-x-2 px-4 py-2">
          <FaPeopleGroup /> Customers
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
