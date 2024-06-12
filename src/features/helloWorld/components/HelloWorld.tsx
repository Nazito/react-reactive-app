import React from "react";

interface HelloWorldProps {
  message: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default HelloWorld;
