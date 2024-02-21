import React from "react";

const Snackbar = ({ message }: { message: string }) => {
  return (
    <div className="fixed py-3 px-8 bg-my-blue-400 bottom-4 left-4 rounded-2xl shadow-xl text-white text-lg font-medium flex justify-between items-center animate-snackbar transition-all z-[100]">
      <div className="flex-1">{message}</div>
    </div>
  );
};

export default Snackbar;
