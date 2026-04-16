"use client";
import friendsData from "@/data/friendListData.json";
import Image from "next/image";
import { TbAlarmSnooze } from "react-icons/tb";
import { PiArchiveLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { useTimeline } from "@/components/contexts/timelineContext";
import { useParams } from "next/navigation";

export default function FriendDetail() {
  const { friendId } = useParams();
  const friend = friendsData.find((f) => f.id === parseInt(friendId));
  const statusBadge = {
    "on-track": "bg-green-900",
    overdue: "bg-red-500",
    "almost due": "bg-yellow-500",
  };
  const { addEntry } = useTimeline();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 lg:px-60 py-4 lg:py-20 bg-base-200">
      <div className="flex flex-col gap-3 col-span-1">
        <div className="flex flex-col items-center gap-3 bg-base-100 rounded-lg px-3 py-4 shadow-md">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={78}
            height={78}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">{friend.name}</h1>
          <p
            className={`badge badge-sm capitalize text-white p-3 rounded-full ${statusBadge[friend.status]}`}
          >
            {friend.status}
          </p>
          <div className="flex flex-wrap gap-1">
            {friend.tags.map((tag) => (
              <p
                key={tag}
                className={`badge badge-sm bg-green-200 text-emerald-900 capitalize rounded-full`}
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-gray-500 italic text-center">
            &quot;{friend.bio}&quot;
          </p>
          <p className="text-gray-500 text-sm">{friend.email}</p>
        </div>
        <button className="btn flex items-center gap-2 bg-base-100 shadow-md py-2">
          <span className="text-lg">
            <TbAlarmSnooze />
          </span>{" "}
          Snooze 2 Weeks
        </button>
        <button className="btn flex items-center gap-2 bg-base-100 shadow-md py-2">
          <span className="text-lg">
            <PiArchiveLight />
          </span>{" "}
          Archive
        </button>
        <button className="btn text-red-500 flex items-center gap-2 bg-base-100 shadow-md py-2">
          <span className="text-lg">
            <RiDeleteBin6Line />
          </span>{" "}
          Delete
        </button>
      </div>
      <div className="col-span-2 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-lg w-full shadow-md">
            <h4 className="text-2xl font-bold text-center text-emerald-900">
              {friend.days_since_contact}
            </h4>
            <p className="text-center text-gray-500">days since last contact</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-lg w-full shadow-md">
            <h4 className="text-2xl font-bold text-center text-emerald-900">
              {friend.goal}
            </h4>
            <p className="text-center text-gray-500">Goal (days)</p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-lg w-full shadow-md">
            <h4 className="text-2xl font-bold text-center text-emerald-900">
              {friend.next_due_date}
            </h4>
            <p className="text-center text-gray-500">Next due date</p>
          </div>
        </div>
        <div className="bg-base-100 p-4 py-8 rounded-lg shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg text-emerald-900 font-semibold">
              Relationship Goal
            </h4>
            <button className="btn btn-sm btn-ghost btn-outline">Edit</button>
          </div>
          <p className="text-sm">
            Contact every{" "}
            <span className="font-semibold">{friend.goal} days</span>
          </p>
        </div>
        <div className="p-4 bg-base-100 rounded-lg shadow-md flex flex-col gap-4">
          <h4 className="text-lg text-emerald-900 font-semibold">
            Quick Check-in
          </h4>
          <div className="flex justify-between gap-4">
            <button onClick={() => addEntry("Audio Call", friendId, friend.name)} className="w-full bg-base-200 flex flex-col items-center justify-center gap-2 border border-base-300 py-10 rounded-lg cursor-pointer hover:bg-base-300">
              <span className="text-2xl"><TbPhoneCall /></span>
              Call
            </button>
            <button onClick={() => addEntry("Text", friendId, friend.name)} className="w-full bg-base-200 flex flex-col items-center justify-center gap-2 border border-base-300 py-10 rounded-lg cursor-pointer hover:bg-base-300">
              <span className="text-2xl"><BsChatSquareText /></span>
              Text
            </button>
            <button onClick={() => addEntry("Video Call", friendId, friend.name)} className="w-full bg-base-200 flex flex-col items-center justify-center gap-2 border border-base-300 py-10 rounded-lg cursor-pointer hover:bg-base-300">
              <span className="text-2xl"><FiVideo /></span>
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
