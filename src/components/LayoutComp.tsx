import React from "react";
import { Layout } from "antd";
import "./LayoutComp.css";

const { Header } = Layout;

interface LayoutCompProps {
  children: React.ReactNode;
}

export const LayoutComp: React.FC<LayoutCompProps> = ({ children }) => {
  return (
    <Layout className="main-layout">
      <Header>Header</Header>
      {children}
    </Layout>
  );
};
