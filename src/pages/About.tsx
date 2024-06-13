import React from "react";

import HelloWorld from "../features/helloWorld/components/HelloWorld";

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <HelloWorld message="Welcome to the About Page" />
    </div>
  );
};

export default AboutPage;
