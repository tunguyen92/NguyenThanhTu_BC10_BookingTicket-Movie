import React from "react";

export default function Film(props) {
  const { phim } = props;

  // console.log(phim.ngayKhoiChieu)

  return (
    <div className="mr-2 mb-2 h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative px-5 py-8 flex flex-col items-center">
      <div
        style={{
          width: "100%",
          background: `url(${phim.hinhAnh}) no-repeat center, url(https://picsum.photos/99) `,
        }}
      >
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          className="opacity-0 w-full"
          style={{ height: "200px" }}
        />
      </div>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900  my-3 h-24">
        {phim.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 h-16">
        {phim.moTa.length > 80 ? (
          <span>{phim.moTa.slice(0, 80)} ...</span>
        ) : (
          <span>{phim.moTa}</span>
        )}
      </p>
      <a href="a" className="text-indigo-500 inline-flex items-center">
        ĐẶT VÉ
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
