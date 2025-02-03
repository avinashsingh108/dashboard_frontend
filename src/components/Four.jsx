import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Three = () => {
  const [data, setData] = useState({ score: 0, title: "", message: "" });
  const apiUrl = import.meta.env.VITE_SAMPLE_API_URL;
  const username = import.meta.env.VITE_API_USERNAME;
  const password = import.meta.env.VITE_API_PASSWORD;
  
  useEffect(() => {
    fetch(apiUrl + "/sample_assignment_api_3/", {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const pieData = [
    { name: "Score", value: data.score },
    { name: "Remaining", value: 100 - data.score },
  ];

  const COLORS = ["#3b82f6", "#e5e7eb"];

  return (
    <div className="flex flex-col h-full bg-white  p-4 max-w-md w-full text-center rounded-2xl shadow-lg">
      <div className="relative w-full flex justify-center pb-4 mb-4 border-b border-gray-300">
        <PieChart width={200} height={100}>
          <Pie
            data={pieData}
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="100%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute flex flex-col top-14 text-2xl font-bold text-blue-600">
          <span>{data.score}</span>
          <span className="text-xs text-gray-500 font-normal">
            of 100 points
          </span>
        </div>
      </div>
      <h1 className="text-lg text-left font-semibold text-black mb-2">
        {data.title}
      </h1>

      <p className="text-gray-500 text-left text-sm mb-2">{data.message}</p>
      <button className="px-4 py-1.5 w-fit rounded-full border border-gray-500 text-xs">
        Improve your score
      </button>
    </div>
  );
};

export default Three;
