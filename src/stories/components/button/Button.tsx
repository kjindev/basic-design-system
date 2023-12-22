import "./button.css";

interface  Props {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Button = ({
  size = "medium",
  backgroundColor,
  children 
 
}:  Props) => {
  return (
    <button type="button" >
      {children}
    </button>
  );
};
