import { Flex } from "antd";
import { SiderComp } from "./SiderComp";
import { LayoutComp } from "./LayoutComp";

interface FlexCompProps {
  children: React.ReactNode;
  items: Array<{ title: string; href?: string }>;
}

export const FlexComp: React.FC<FlexCompProps> = ({ children, items }) => {
  return (
    <Flex style={{ minHeight: "100vh" }}>
      <SiderComp />
      <LayoutComp items={items}>{children}</LayoutComp>
    </Flex>
  );
};
