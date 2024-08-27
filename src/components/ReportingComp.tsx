import { Card, Space } from "antd";
import { ReportData, ReportDataProps } from "../ReportData";
import { ReportDataComp } from "./ReportDataComp";
import "./ReportingComp.css";

export const ReportingComp: React.FC<{ reportTitle: string }> = ({
  reportTitle,
}) => {
  return (
    <Space direction="vertical" size={24} className="reporting-space">
      <Card title={reportTitle}>
        <p>{ReportData.description}</p>
        <p>{ReportData.subDescription}</p>
        <div className="reporting-title-link-container">
          {ReportData.reportData.map(
            (report: ReportDataProps, index: number) => {
              return (
                <div key={index}>
                  <span>{index + 1}. </span>
                  <a key={report.title} href={`#${report.title}`}>
                    {report.title}
                  </a>
                </div>
              );
            }
          )}
        </div>
      </Card>
      {ReportData.reportData.map((report: ReportDataProps, index: number) => {
        return (
          <ReportDataComp
            key={report.title}
            title={report.title}
            description={report.description}
            index={index}
          />
        );
      })}
    </Space>
  );
};
