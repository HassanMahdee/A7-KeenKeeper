"use client";
import { useTimeline } from "@/components/contexts/timelineContext";
import { useState } from "react";
import Image from "next/image";

export default function Timeline() {
  const { entries } = useTimeline();
  const [criteria, setCriteria] = useState("All Interactions");
  const [toggleSortOrder, setToggleSortOrder] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const filteredEntries = entries.filter((entry) => {
    if (criteria === "All Interactions") {
      return true;
    }
    return entry.type === criteria;
  });
  const menuText =
    criteria === "All Interactions" ? "All Interactions" : criteria;
  const handleFilter = (filter) => {
    setCriteria(filter);
  };
  const sortedEntries = [...filteredEntries].sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return toggleSortOrder ? dateB - dateA : dateA - dateB;
  });
  const searchedName = sortedEntries.filter((entry) =>
    entry.friendName.toLowerCase().includes(searchInput.toLowerCase()),
  );
  return (
    <div className="px-8 lg:px-60 py-4 lg:py-20 bg-base-200">
      <h1 className="text-2xl font-bold text-emerald-900">Timeline</h1>
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={() => setToggleSortOrder(!toggleSortOrder)}
            className="btn shadow-sm bg-base-100 hover:bg-base-200 hover:scale-105 transition-transform"
          >
            {toggleSortOrder ? "↑" : "↓"}
          </button>
          <div className="dropdown dropdown-start dropdown-right">
            <button
              tabIndex={0}
              className="btn m-4 shadow-sm bg-base-100 hover:bg-base-200 hover:scale-105 transition-transform"
            >
              {menuText}
            </button>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleFilter("All Interactions")}>
                  All Interactions
                </button>
              </li>
              <li>
                <button onClick={() => handleFilter("Audio Call")}>
                  Audio Call
                </button>
              </li>
              <li>
                <button onClick={() => handleFilter("Text")}>Text</button>
              </li>
              <li>
                <button onClick={() => handleFilter("Video Call")}>
                  Video Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search by name"
            className="input input-bordered w-full max-w-xs"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="btn btn-xs btn-ghost "
            >
              ✕
            </button>
          )}
        </div>
      </div>
      {searchedName.length > 0 ? (
        searchedName.map((entry) => (
          <div
            key={entry.id}
            className="bg-base-100 rounded-lg p-4 mb-4 flex gap-4 items-center shadow-sm hover:scale-101 transition-transform hover:bg-base-200"
          >
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
              height={70}
              className="w-10 h-10"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-emerald-900">
                  {entry.type}
                </h2>
                <span className="text-sm text-gray-600 ml-2">with</span>
                <p className="text-sm text-gray-600 font-semibold ml-2">
                  {entry.friendName}
                </p>
              </div>
              <p className="text-sm text-gray-600">
                {new Date(entry.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="bg-base-100 rounded-lg p-4 mb-4 flex gap-4 justify-center shadow-sm">
          <p className="text-gray-600 text-center">
            No entries found, Go make some calls!
          </p>
        </div>
      )}
    </div>
  );
}
