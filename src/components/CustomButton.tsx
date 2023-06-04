export interface ButtonProps {
  clickHandler?: () => void;
  label?: string;
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  color?: string;
}

function CustomButton({ label, backgroundColor = "black", size = "md", color = "white", clickHandler }: ButtonProps) {
  const sizeScale = {
    sm: 0.75,
    md: 1,
    lg: 1.5,
  };

  let scale = sizeScale[size];

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color,
  };
  return (
    <button onClick={clickHandler} style={style}>
      {label}
    </button>
  );
}

export default CustomButton;
