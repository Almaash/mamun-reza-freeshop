"use client"

import { useState } from "react"
import Image from "next/image"

export interface Article {
  id: string
  image: string
  title: string
  description: string
}

interface ArticleTableProps {
  articles: Article[]

}

export function Table({ articles }: ArticleTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(articles.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, articles.length)
  const currentArticles = articles.slice(startIndex, endIndex)

  return (
    <div className="w-full p-6">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" className="accent-yellow-500" />
              </th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
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
                  <div className="w-12 h-12 relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </td>
                <td className="p-4 font-semibold">{article.title}</td>
                <td className="p-4 max-w-xs text-gray-500">{article.description}</td>
                <td className="p-4 text-left space-x-2">
                  <button
                    // onClick={() => onEdit(article.id)}
                    className="px-4 py-1 text-xs font-semibold bg-green-100 hover:bg-green-200 text-green-700 rounded cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => onDelete(article.id)}
                    className="px-4 py-1 text-xs font-semibold bg-pink-100 hover:bg-pink-200 text-pink-700 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination + info */}
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
  )
}
