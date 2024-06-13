import React from "react";

import HelloWorld from "../features/helloWorld/components/HelloWorld";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <HelloWorld message="Welcome to the Home Page" />
    </div>
  );
};

export default HomePage;
