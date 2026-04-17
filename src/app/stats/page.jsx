"use client";
import { useTimeline } from "@/components/contexts/timelineContext";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
const colors = ["#48A160", "#254E40", "#856BF5"];
export default function Stats() {
  const { entries } = useTimeline();
  const data = [
    {
      name: "Text",
      value: entries.filter((entry) => entry.type === "Text").length,
    },
    {
      name: "Audio Call",
      value: entries.filter((entry) => entry.type === "Audio Call").length,
    },

    {
      name: "Video Call",
      value: entries.filter((entry) => entry.type === "Video Call").length,
    },
  ].filter((item) => item.value > 0);
  return (
    <div className="px-8 lg:px-60 py-4 lg:py-20 bg-base-200">
      <h1 className="text-3xl font-bold mb-4">Friendship Analytics</h1>
      <div className="bg-base-100 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-900">
          By Interaction Type
        </h2>
        {entries.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                label
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center">
            No entries yet. Start adding some interactions!
          </p>
        )}
      </div>
    </div>
  );
}
