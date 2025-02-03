import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Five = () => {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl + "/api/component4");
        const result = await response.json();
        if (response.ok) {
          const formattedData = result.map((item) => ({
            ...item,
            date: new Date(item.date).toLocaleString(),
          }));
          setData(formattedData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg h-full w-full ">
      <h2 className="text-xl font-semibold mb-2">Customers by device</h2>
      <ResponsiveContainer width="100%" height={210}>
        <LineChart
          data={data}
          margin={{ left: -20, top: 0, right: 2, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis tick={{ fontSize: "12px" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="web_sales"
            stroke="#8884d8"
            strokeWidth={1}
            name="Web Sales"
          />
          <Line
            type="monotone"
            dataKey="offline_sales"
            stroke="#82ca9d"
            strokeWidth={0.5}
            name="Offline Sales"
          />
          <Legend wrapperStyle={{ color: "#000000", fontSize: "10px" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Five;
