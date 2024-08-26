import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { fetchData } from "../service/data-fetcher";
import { MeetingData } from "../service/demo_data";
import Notes from "./notes";
import Invitees from "./invitees";
import Action from "./action";
import { formatDate, formatTime } from "../service/utils";
function Layout() {
  const [meetingData, setMeetingData] = useState<MeetingData>();
  // Here I am calling API but due to CORS error I supply demo data.
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData({
        url: "https://tokljlwppwz3ywvjpu3odx6vea0esqhm.lambda-url.ap-southeast-2.on.aws/",
        method: "GET",
      });

      if (result.status === "success") {
        setMeetingData(result.response);
        console.log("Data fetched successfully:", result.response);
      } else {
        console.error("Error fetching data:", result.response);
      }
    };

    fetchDataFromApi();
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md w-3/4 p-8">
        {/*  start of the header  */}
        <div className=" flex justify-between items-center ">
          <div className=" flex items-center gap-8 ">
            <img src={logo} alt="" className=" w-16 " />
            <h2 className="text-purple-800 text-4xl">
              {meetingData?.meeting.title}
            </h2>
          </div>
          <a
            href={meetingData?.meeting.actions.join_meeting}
            target="_blank"
            rel="noreferrer"
            className=" bg-primary-800 hover:bg-primary-400 text-white font-bold py-2 px-4 rounded-lg flex gap-2 items-center"
          >
            Join
            <MdOutlineVideoCameraFront className=" " size={24} />
          </a>
        </div>
        {/*  Start of the meating details  */}

        <div className="mt-4 ">
          <p className=" font-semibold text-primary-600 text-2xl ">
            {meetingData?.meeting.category}
          </p>
          <p className=" text-primary-600 text-2xl mt-1 ">
            {formatDate(meetingData?.meeting?.date || 0)}{" "}
            <span className=" font-bold ">Start</span>{" "}
            {formatTime(meetingData?.meeting.start_time || 0)}{" "}
            <span className=" font-bold ">Finish</span>{" "}
            {formatTime(meetingData?.meeting.end_time || 0)}
          </p>
          <div className=" mt-6 flex gap-2 ">
            <div className=" min-w-52 ">
              <p className=" font-semibold text-primary-600 text-xl ">
                Organizer
              </p>
            </div>{" "}
            <p className=" font-semibold text-primary-200 text-xl ">
              {meetingData?.meeting.organizer.name}
            </p>
          </div>
          {/* Invitees details */}
          {meetingData && <Invitees meeting={meetingData?.meeting} />}
          {/* Meeting attachments */}
          {meetingData && <Notes meeting={meetingData?.meeting} />}
          {/* Action Items */}
          {meetingData && <Action meeting={meetingData?.meeting} />}
        </div>
      </div>
    </>
  );
}

export default Layout;
