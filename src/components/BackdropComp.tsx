export const BackdropComp: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="backdrop">{children}</div>;
};
