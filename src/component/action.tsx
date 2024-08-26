import React from "react";
import { LuTrash } from "react-icons/lu";
import Dropdown from "./dropdown";
import { MeetingData } from "../service/demo_data";
function Action({ meeting }: MeetingData) {
  return (
    <div className=" mt-6 flex items-center ">
      <div className=" flex-grow ">
        {" "}
        <LuTrash size={28} className=" text-neutral-600 " />
      </div>
      <div className=" flex items-center gap-4 ">
        {" "}
        <button className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-[#2D0083] border border-[#2D0083] rounded-lg hover:bg-gray-100">
          Close
        </button>
        <Dropdown
          options={meeting.actions.attendance_options}
          onChange={(selectedOption) => {}} // we can get selected option and pass it on the API
        />
      </div>
    </div>
  );
}

export default Action;
