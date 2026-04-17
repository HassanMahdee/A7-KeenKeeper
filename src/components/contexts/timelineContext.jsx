"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
const TimelineContext = createContext();
export default function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    if (typeof window !== "undefined") {
      const savedEntries = localStorage.getItem("Timeline Entries");
      return savedEntries ? JSON.parse(savedEntries) : [];
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("Timeline Entries", JSON.stringify(entries));
  }, [entries]);
  const addEntry = (type, friendId, friendName) => {
    setEntries((prev) => [
      {
        id: crypto.randomUUID(),
        type,
        friendId,
        friendName,
        timestamp: new Date().toISOString(),
      },
      ...prev,
    ]);
    toast.success(`${type} to ${friendName} added to timeline!`);
  };

  return (
    <TimelineContext.Provider value={{ entries, setEntries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}
export const useTimeline = () => useContext(TimelineContext);
