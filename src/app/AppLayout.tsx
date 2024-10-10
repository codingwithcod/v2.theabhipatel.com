import Footer from "@/components/Footer";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
