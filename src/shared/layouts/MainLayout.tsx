import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto flex flex-col items-center min-h-screen justify-between">
      <Header />
      <div className="mx-auto flex max-w-7xl items-center p-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
