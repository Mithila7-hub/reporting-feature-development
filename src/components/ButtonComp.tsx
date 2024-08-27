import { Button, ButtonProps } from "antd";
import "./ButtonComp.css";

interface ButtonCompProps extends ButtonProps {
  buttonText: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  className?: "primary-btn" | "secondary-btn" | "link-btn";
  onClick?: () => void;
}

export const ButtonComp: React.FC<ButtonCompProps> = ({
  buttonText,
  ...props
}) => {
  return <Button {...props}>{buttonText}</Button>;
};
