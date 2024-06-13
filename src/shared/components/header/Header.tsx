import React from "react";
import { Link } from "@tanstack/react-router";

const Header: React.FC = () => {
  return (
    <header className="bg-white w-full border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="[&.active]:font-bold -m-1.5 p-1.5 mr-2">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold -m-1.5 p-1.5 mr-2">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
