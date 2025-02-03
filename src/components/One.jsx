import React, { useEffect, useState } from "react";

const One = () => {
  const [data, setData] = useState({ purchases: 0, revenue: 0, refunds: 0 });
  const apiUrl = import.meta.env.VITE_SAMPLE_API_URL;
  const username = import.meta.env.VITE_API_USERNAME;
  const password = import.meta.env.VITE_API_PASSWORD;
  useEffect(() => {
    fetch(apiUrl+"/sample_assignment_api_1/", {
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

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center p-3 shadow-lg rounded-2xl bg-white h-full">
        <div className="p-4 rounded-2xl border border-gray-400">
          <h2 className="text-gray-400 text-sm mb-2">Purchases</h2>
          <p className="text-2xl font-semibold">{data.purchases.toLocaleString()}</p>
        </div>

        <div className="p-4 rounded-2xl border border-gray-400">
          <h2 className="text-gray-400 text-sm mb-2">Revenue</h2>
          <p className="text-2xl font-semibold">${data.revenue.toLocaleString()}</p>
        </div>

        <div className="p-4 rounded-2xl border border-gray-400">
          <h2 className="text-gray-400 text-sm mb-2">Refunds</h2>
          <p className="text-2xl font-semibold">${data.refunds.toLocaleString()}</p>
        </div>
      </div>
  );
};

export default One;
