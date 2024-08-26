import { DownSquareOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import "./SiderComp.css";

const { Sider } = Layout;

export const SiderComp = () => {
  return (
    <Sider className="sider" width={"82px"}>
      <DownSquareOutlined />
    </Sider>
  );
};
