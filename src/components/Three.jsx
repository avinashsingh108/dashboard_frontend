import { useEffect, useState } from "react";

const Three = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl + "/api/component6");
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl p-4 mb-2 h-full shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">
          Product Sales Overview
        </h1>
        <button className="px-4 py-1.5 rounded-full outline-none font-medium text-xs border border-gray-500">
          Full results
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className=" text-gray-400 text-xs border-b ">
              <th className="py-2 px-4 text-left font-semibold">ID</th>
              <th className="py-2 px-4 text-left font-semibold">Product</th>
              <th className="py-2 px-4 text-left font-semibold">Sold Amount</th>
              <th className="py-2 px-4 text-left font-semibold">Unit Price</th>
              <th className="py-2 px-4 text-left font-semibold">Revenue</th>
              <th className="py-2 px-4 text-left font-semibold">Rating </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="text-gray-700 text-sm hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-left ">{item.id}</td>
                <td className="py-2 px-4">{item.product}</td>
                <td className="py-2 px-4 text-left">{item.sold_amount}</td>
                <td className="py-2 px-4 text-left">${item.unit_price}</td>
                <td className="py-2 px-4 text-left">${item.revenue}</td>
                <td className="py-2 px-4 text-left">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      item.rating >= 4
                        ? "bg-green-100 text-green-600"
                        : item.rating >= 3
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.rating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Three;
