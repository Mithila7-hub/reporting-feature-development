import React, { useState } from "react";
import { Row, Col } from "antd";
import "./App.css";
import { cardData, CardDataProps } from "./CardData";
import { CardComp } from "./components/CardComp";
import { FormComp } from "./components/FormComp";
import { BackdropComp } from "./components/BackdropComp";
import { ContentComp } from "./components/ContentComp";
import { ReportingComp } from "./components/ReportingComp";
import { FlexComp } from "./components/FlexComp";
import { ReportInformation } from "./components/ReportInformation";
import { ButtonComp } from "./components/ButtonComp";
import { LeftOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [reportTitle, setReportTitle] = useState<string>("");
  const [showReporting, setShowReporting] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ name: string; period: string }>({
    name: "",
    period: "",
  });

  const handleClickButton = (title: string) => {
    setOpen((prevOpen) => !prevOpen);
    setReportTitle(title);
  };

  const handleShowReporting = (data: {
    name: string;
    period: Array<string>;
  }) => {
    // setOpen(false);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        name: data.name,
        period: `${data.period[0]} - ${data.period[1]}`,
      };
    });
    setShowReporting(true);
  };

  const handleCloseReporting = () => {
    setOpen(false);
  };

  const handleOkReporting = () => {
    setOpen(false);
    // setShowReporting(true);
  };

  return (
    <div className="app-container">
      {!showReporting && (
        <FlexComp items={[{ title: "Reporting", href: "/" }]}>
          <ContentComp>
            <p style={{ marginTop: 0 }}>Rapport Anmaken</p>
            <Row gutter={40} style={{ alignItems: "center" }}>
              {cardData.map((card: CardDataProps) => {
                return (
                  <Col span={8} key={card.title}>
                    <CardComp
                      card={card}
                      onButtonClick={() => handleClickButton(card.title)}
                    />
                  </Col>
                );
              })}
            </Row>
          </ContentComp>
        </FlexComp>
      )}
      {open && (
        <BackdropComp>
          <FormComp
            onFormSubmit={handleShowReporting}
            reportTitle={reportTitle}
            open={open}
            onFormCancel={handleCloseReporting}
            onFormOk={handleOkReporting}
          />
        </BackdropComp>
      )}
      {showReporting && (
        <FlexComp
          items={[
            { title: "Report", href: "/" },
            {
              title: reportTitle,
            },
          ]}
        >
          <ButtonComp
            type="link"
            buttonText="Terug naar overzicht"
            icon={<LeftOutlined />}
            className="link-btn"
            href="/"
          />
          <ContentComp>
            <Row gutter={24} className="content-space-container">
              <Col span={16}>
                <ReportingComp reportTitle={reportTitle} />
              </Col>
              <Col span={8}>
                <ReportInformation formData={formData} />
              </Col>
            </Row>
          </ContentComp>
        </FlexComp>
      )}
    </div>
  );
};

export default App;
