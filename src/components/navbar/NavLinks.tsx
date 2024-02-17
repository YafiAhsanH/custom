import React from "react";

const NavLinks = ({ children }: { children: React.ReactNode }) => {
  return <div className="hover:cursor-pointer hover:bg-my-blue-400 hover:text-white px-4 py-1 rounded-full transition-all">{children}</div>;
};

export default NavLinks;
