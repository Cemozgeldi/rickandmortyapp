import React from "react";

export default function Navbar({ changePage }) {
  return (
    <nav className="flex items-center justify-center gap-16 ">
      <button
        onClick={() => changePage("characters")}
        className="border border-red-50 rounded p-2 hover:bg-white hover:text-red-900"
      >
        Characters
      </button>
      <button
        onClick={() => changePage("episodes")}
        className="border border-red-50 rounded p-2 hover:bg-white hover:text-red-900"
      >
        Episodes
      </button>
    </nav>
  );
}
