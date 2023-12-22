interface Props {
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

export const Shadow = ({ size = "medium", ...props }: Props) => {
  return (
    // <button type="button" style={{ backgroundColor }} {...props}>
    //   {label}
    // </button>
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
    ></div>
  );
};
