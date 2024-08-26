import React from "react";
import IconProvider from "./icon-provider";
import { MeetingData } from "../service/demo_data";

function Invitees({ meeting }: MeetingData) {
  return (
    <div className=" mt-6 flex gap-2 ">
      <div className=" min-w-52 ">
        <p className=" font-semibold text-primary-600 text-xl ">Invitees</p>
      </div>{" "}
      <div className=" flex flex-col gap-2">
        {meeting.invitees?.map((data, key) => (
          <div key={key} className=" flex gap-2 items-center ">
            <IconProvider name={data.status} />
            <p className=" text-primary-600 text-lg ">
              {data.name}, {data.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invitees;
