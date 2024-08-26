import { ReactNode } from "react";
// import {
//   ReadOutlined,
//   CrownOutlined,
//   FileDoneOutlined,
// } from "@ant-design/icons";

export interface CardDataProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const cardData: CardDataProps[] = [
  {
    title: "Afval rapport",
    description:
      "Een overzicht van alle euralcodes, hoeveelheden, verwerkingsmethoden en verwerkers per business unit.",
    icon: "<ReadOutlined />",
  },
  {
    title: "Benchmark rapport",
    description:
      "Vergelijk uw prestaties met die van branchegenoten om inzicht te krijgen in hoe u zich verhoudt tot de industrienormen.",
    icon: "<CrownOutlined />",
  },
  {
    title: "CSRD rapport",
    description:
      "Een overzicht van alle benodigde kwantitatieve data voor E5-5 van het CSRD rapport.",
    icon: "<FileDoneOutlined />",
  },
];
