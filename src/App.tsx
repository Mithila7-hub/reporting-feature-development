import React, { useState } from "react";
import { Flex, Row, Col } from "antd";
import "./App.css";
import { cardData, CardDataProps } from "./CardData";
import { LayoutComp } from "./components/LayoutComp";
import { SiderComp } from "./components/SiderComp";
import { CardComp } from "./components/CardComp";
import { FormComp } from "./components/FormComp";
import { BackdropComp } from "./components/BackdropComp";
import { ContentComp } from "./components/ContentComp";

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="app-container">
      <Flex>
        <SiderComp />
        <LayoutComp>
          <ContentComp title="Report Anmaken">
            <Row gutter={40} style={{ alignItems: "center" }}>
              {cardData.map((card: CardDataProps) => {
                return (
                  <Col span={8} key={card.title}>
                    <CardComp card={card} onButtonClick={handleClickButton} />
                  </Col>
                );
              })}
            </Row>
          </ContentComp>
        </LayoutComp>
      </Flex>
      {open && (
        <BackdropComp>
          <FormComp />
        </BackdropComp>
      )}
    </div>
  );
};

export default App;
