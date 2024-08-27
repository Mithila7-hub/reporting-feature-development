import React from "react";
import { Layout } from "antd";
import "./ContentComp.css";

const { Content } = Layout;

interface ContentCompProps {
  children: React.ReactNode;
}

export const ContentComp: React.FC<ContentCompProps> = ({ children }) => {
  return <Content className="content-container">{children}</Content>;
};
