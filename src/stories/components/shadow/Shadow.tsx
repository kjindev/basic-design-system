interface Props {
  type?: string;
  colored?: boolean;
}

export const Shadow = ({ type, colored }: Props) => {
  const color = colored ? "#0D689E20" : "rgb(0, 0, 0, 0.1)";

  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow:
          type === "Large"
            ? `0 4px 12px ${color}, 0 2px 4px ${color}`
            : `0 2px 4px ${color}, 0 1px 2px ${color}`,
      }}
    ></div>
  );
};
