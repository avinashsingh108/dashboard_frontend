import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Two = () => {
  const [chartData, setChartData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl + "/api/component2");
      const data = await response.json();
      if (response.ok) {
        setChartData(data);
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-4xl bg-white p-4 h-full rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold mb-2 text-gray-800">Comparison</h1>
        <select className="rounded-full px-4 py-1.5 border border-gray-500 outline-none font-medium text-xs">
          <option>6 months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={210}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: "12px" }} />
          <YAxis tick={{ fontSize: "12px" }} />
          <Tooltip />
          <Legend
            wrapperStyle={{
              fontSize: "11px",
            }}
          />

          <Bar
            dataKey="last_year"
            fill="#3b82f6"
            name="Last Year"
            barSize={40}
          />
          <Bar
            dataKey="this_year"
            fill="#80ddff"
            name="This Year"
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Two;
