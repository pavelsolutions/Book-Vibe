"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
  type BarShapeProps,
  type LabelProps,
} from "recharts";

import type { IBook } from "../types/bookType";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// ===============================
// Custom Bar Path
// ===============================
const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}

    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}

    Z`;
};

// ===============================
// Custom Triangle Bar
// ===============================
const TriangleBar = (props: BarShapeProps) => {
  const {
    x,
    y,
    width,
    height,
    index,
    isActive,
  } = props;

  const color =
    colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      strokeWidth={isActive ? 5 : 0}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

// ===============================
// Custom Label
// ===============================
const CustomColorLabel = (props: LabelProps) => {
  const color =
    colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={color} />;
};

// ===============================
// Read Books Component
// ===============================
const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  // Convert books into chart data
  const data = readBooks.map(
    (book: IBook, index: number) => ({
      name: book.bookName,
      pages: book.totalPages,
      index: index + 1,
    })
  );

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">

        {readBooks.length > 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* ================= HEADER ================= */}
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Read Books
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Number of pages in each book
              </p>
            </div>

            {/* ================= CHART ================= */}
            <div className="flex w-full justify-center overflow-x-auto">
              <BarChart
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "70vh",
                  aspectRatio: 1.618,
                }}
                responsive
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  left: 10,
                  bottom: 60,
                }}
              >
                {/* Grid */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* Tooltip */}
                <Tooltip />

                {/* X Axis */}
                <XAxis
                  dataKey="name"
                  angle={-20}
                  textAnchor="end"
                  height={80}
                  tick={{
                    fontSize: 12,
                  }}
                />

                {/* Y Axis */}
                <YAxis
                  width="auto"
                  label={{
                    value: "Pages",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />

                {/* Bars */}
                <Bar
                  dataKey="pages"
                  shape={TriangleBar}
                  activeBar
                >
                  <LabelList
                    content={CustomColorLabel}
                    position="top"
                  />
                </Bar>
              </BarChart>
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="mt-6 flex justify-center">
              <div className="rounded-lg bg-gray-50 px-6 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Total Books
                </p>

                <p className="text-xl font-bold text-gray-900">
                  {readBooks.length}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <span className="text-2xl">📚</span>
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-700">
              No Read Books
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Start reading some books to see your reading
              statistics here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ReadBooks;