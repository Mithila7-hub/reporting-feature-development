import { ArrowRightOutlined, ReadOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import { CardDataProps } from "../CardData";
import "./CardComp.css";

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
      <Button
        type="primary"
        icon={<ArrowRightOutlined />}
        iconPosition="end"
        onClick={onButtonClick}
      >
        Aanmaken
      </Button>
    </Card>
  );
};
