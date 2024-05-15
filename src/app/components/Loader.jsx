import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6  bg-transparent rounded-full animate-spin border-2 border-t-black"></div>
    </div>
  );
};

export default Loader;
