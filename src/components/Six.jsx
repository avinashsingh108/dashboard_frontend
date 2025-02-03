import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, setData] = useState({ negative: 0, positive: 0, neutral: 0 });
  const apiUrl = import.meta.env.VITE_SAMPLE_API_URL;
  const username = import.meta.env.VITE_API_USERNAME;
  const password = import.meta.env.VITE_API_PASSWORD;

  useEffect(() => {
    fetch(apiUrl + "/sample_assignment_api_5/", {
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

  const getDominantSentiment = () => {
    const { positive, negative, neutral } = data;
    const maxValue = Math.max(positive, negative, neutral);
    if (positive === maxValue) return "Mostly Positive";
    if (negative === maxValue) return "Mostly Negative";
    return "Mostly Neutral";
  };

  const total = data.positive + data.negative + data.neutral;

  const getPercentage = (value) => ((value / total) * 100).toFixed(1);

  return (
    <div className="bg-white p-4 text-left h-full rounded-2xl max-w-md w-full shadow-lg">
      <p className="text-xs text-gray-400 ">Community feedback</p>
      <h1 className="text-lg mb-1 font-semibold text-gray-800 ">
        {getDominantSentiment()}
      </h1>

      <div className="flex w-full gap-x-0.5 h-2 rounded-full overflow-hidden shadow-inner">
        <div
          className="bg-red-500 rounded-full"
          style={{ width: `${getPercentage(data.negative)}%` }}
        ></div>
        <div
          className="bg-green-500 rounded-full"
          style={{ width: `${getPercentage(data.positive)}%` }}
        ></div>
        <div
          className="bg-yellow-500 rounded-full"
          style={{ width: `${getPercentage(data.neutral)}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mt-1">
        <div className="flex flex-col ">
          <span className=" text-gray-400 text-xs">Negative</span>
          <span className="text-black">{data.negative}</span>
        </div>
        <div className="flex flex-col ">
          <span className=" text-gray-400 text-xs">Positive</span>
          <span className="text-black">{data.positive}</span>
        </div>
        <div className="flex flex-col ">
          <span className=" text-gray-400 text-xs">Neutral</span>
          <span className="text-black">{data.neutral}</span>
        </div>
      </div>
    </div>
  );
};

export default Six;
