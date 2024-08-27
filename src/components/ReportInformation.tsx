import { Card, Flex } from "antd";
import "./ReportInformation.css";
import { DownloadOutlined } from "@ant-design/icons";
import { ButtonComp } from "./ButtonComp";

export const ReportInformation: React.FC<{
  formData: { name: string; period: string };
}> = ({ formData }) => {
  const getTodaysDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  return (
    <Card title={"Rapportage instellingen"} className="report-information">
      <div>
        <p>Naam</p>
        <p>{formData.name}</p>
      </div>
      <div>
        <p>Periode</p>
        <p>{formData.period}</p>
      </div>
      <div>
        <p>Datum aangemaakt</p>
        <p>{getTodaysDate(new Date())}</p>
      </div>
      <Flex vertical gap="small">
        <ButtonComp
          className="primary-btn"
          icon={<DownloadOutlined />}
          buttonText="Download .xsls"
          block
        />
        <ButtonComp
          className="secondary-btn"
          icon={<DownloadOutlined />}
          buttonText="Download .pdf"
          block
        />
      </Flex>
    </Card>
  );
};
