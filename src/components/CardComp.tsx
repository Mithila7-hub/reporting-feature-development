import { ArrowRightOutlined, ReadOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { CardDataProps } from "../CardData";
import "./CardComp.css";
import { ButtonComp } from "./ButtonComp";

const { Meta } = Card;

interface CardProps {
  card: CardDataProps;
  onButtonClick: () => void;
}

export const CardComp: React.FC<CardProps> = ({ card, onButtonClick }) => {
  return (
    <Card bordered={false} className="custom-card">
      <Meta
        avatar={<ReadOutlined />}
        title={card.title}
        description={card.description}
        className="custom-meta"
      />
      <ButtonComp
        icon={<ArrowRightOutlined />}
        iconPosition="end"
        onClick={onButtonClick}
        buttonText="Aanmaken"
        className="primary-btn"
      />
    </Card>
  );
};
