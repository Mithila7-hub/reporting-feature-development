import React from "react";
import { Layout } from "antd";
import "./ContentComp.css";

const { Content } = Layout;

interface ContentCompProps {
  title: string;
  children: React.ReactNode;
}

export const ContentComp: React.FC<ContentCompProps> = ({
  title,
  children,
}) => {
  return (
    <Content className="content-container">
      <h5>{title}</h5>
      {children}
    </Content>
  );
};
