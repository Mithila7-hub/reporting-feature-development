import React from "react";
import { Breadcrumb, Layout } from "antd";
import "./LayoutComp.css";

const { Header } = Layout;

interface LayoutCompProps {
  children: React.ReactNode;
  items: Array<{ title: string; href?: string }>;
}

export const LayoutComp: React.FC<LayoutCompProps> = ({ children, items }) => {
  return (
    <Layout className="main-layout">
      <Header>
        <Breadcrumb items={items} />
      </Header>
      {children}
    </Layout>
  );
};
