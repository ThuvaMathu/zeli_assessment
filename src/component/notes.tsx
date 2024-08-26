import React from "react";
import { MeetingData } from "../service/demo_data";
import { downloadUrl } from "../service/utils";
import docImage from "../assets/docx.png";

function Notes({ meeting }: MeetingData) {
  return (
    <div className=" mt-6 flex flex-col gap-2 ">
      <div className=" min-w-52 ">
        <p className=" font-semibold text-primary-600 text-xl ">Notes</p>
      </div>{" "}
      <div className=" flex flex-col text-xl text-primary-500 gap-2">
        <p>Discuss the latest financial reports for the business</p>
        <div className=" flex gap-3 ">
          {meeting.attachments?.map((data, key) => (
            <div
              key={key}
              className=" cursor-pointer overflow-hidden w-12 h-12 rounded-md bg-neutral-100 flex justify-center items-center  "
              onClick={() => downloadUrl(data.url)}
            >
              {data.type === "image" ? (
                <img
                  className=" w-full h-full object-cover "
                  src={data.url}
                  alt=""
                />
              ) : (
                <img
                  className=" w-9 h-9  object-cover "
                  src={docImage}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
