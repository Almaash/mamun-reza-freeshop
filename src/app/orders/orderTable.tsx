"use client";

import { useState } from "react";
import Image from "next/image";

export interface Article {
  id: string;
  image: string;
  productId: string;
  orderId: string;
  userName: string;
  location: string;
  price: string;
}

interface ArticleTableProps {
  articles: Article[];
}

export function Table({ articles }: ArticleTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, articles.length);
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="w-full p-6">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" className="accent-yellow-500" />
              </th>
              <th className="p-4 text-left">Product Image</th>
              <th className="p-4 text-left">Product Id</th>
              <th className="p-4 text-left">Order Id</th>
              <th className="p-4 text-left">User Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Operations</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article) => (
              <tr key={article.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="accent-yellow-500" />
                </td>
                <td className="p-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={article.image}
                      alt="Product"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </td>
                <td className="p-4">{article.productId}</td>
                <td className="p-4">{article.orderId}</td>
                <td className="p-4">{article.userName}</td>
                <td className="p-4">{article.location}</td>
                <td className="p-4">{article.price}</td>
                <td className="p-4">
                  <button
                    className="px-4 py-1 text-xs font-semibold bg-green-100 hover:bg-green-200 text-green-700 rounded cursor-pointer"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 text-gray-500 text-xs">
          <span>
            Showing {startIndex + 1}-{endIndex} of {articles.length}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-100 disabled:opacity-50"
            >
              &lt;
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-100 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
