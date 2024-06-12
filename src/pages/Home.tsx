import React from "react";

import { Link } from "@tanstack/react-router";
import HelloWorld from "../features/helloWorld/components/HelloWorld";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <HelloWorld message="Welcome to the Home Page" />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
