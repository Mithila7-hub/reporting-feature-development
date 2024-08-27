import { DownloadOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { ReportDataProps } from "../ReportData";
import "./ReportDataComp.css";
import { ButtonComp } from "./ButtonComp";

export const ReportDataComp: React.FC<ReportDataProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <Card
      id={title}
      className="report-data"
      title={`${(index ?? 0) + 1}. ${title}`}
      extra={
        <ButtonComp
          type="default"
          icon={<DownloadOutlined />}
          buttonText="Download data"
        />
      }
    >
      {description}
    </Card>
  );
};
