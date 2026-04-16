"use client";
import { useTimeline } from "@/components/contexts/timelineContext";
import { useState } from "react";
import Image from "next/image";

export default function Timeline() {
  const { entries } = useTimeline();
  const [criteria, setCriteria] = useState("All Interactions");
  const filteredEntries = entries.filter((entry) => {
    if (criteria === "All Interactions") {
      return true;
    }
    return entry.type === criteria;
  });
  console.log("entries", entries);
  console.log("criteria", criteria);
  console.log("filteredEntries", filteredEntries);
  const menuText =
    criteria === "All Interactions" ? "All Interactions" : criteria;

  return (
    <div className="px-8 lg:px-60 py-4 lg:py-20 bg-base-200">
      <div>
        <h1 className="text-2xl font-bold text-emerald-900">Timeline</h1>
        <div className="dropdown dropdown-start dropdown-right">
          <div tabIndex={0} role="button" className="btn m-4 bg-base-100">
            {menuText}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setCriteria("Audio Call")}>
                Audio Call
              </button>
            </li>
            <li>
              <button onClick={() => setCriteria("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setCriteria("Video Call")}>
                Video Call
              </button>
            </li>
          </ul>
        </div>
      </div>
      {filteredEntries.map((entry) => (
        <div key={entry.id} className="bg-base-100 rounded-lg p-4 mb-4 flex gap-4">
          <Image
            src={
              entry.type === "Audio Call"
                ? "/assets/call.png"
                : entry.type === "Text"
                  ? "/assets/text.png"
                  : "/assets/video.png"
            }
            alt="Friend"
            width={70}
            height={5}
          />
          <div>
            <h2 className="text-lg font-semibold text-emerald-900">
              {entry.friendName}
            </h2>
            <p className="text-sm text-gray-600">{entry.type}</p>
            <p className="text-sm text-gray-600">{entry.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
