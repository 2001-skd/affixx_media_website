import { NavLink } from "react-router-dom";

const CTAButton = ({
  link,
  label,
  color = "white",
  bgColor = "black",
  icon,
  iconColor = "black",
  iconBgColor = "#68ffff",
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  const iconContainerStyle = {
    backgroundColor: iconBgColor,
    color: iconColor,
  };
  return (
    <NavLink to={link}>
      <button
        style={buttonStyle}
        className={`p-2 px-5 rounded-full font-bold flex items-center justify-between gap-2`}
      >
        {icon && (
          <span style={iconContainerStyle} className={`p-1 rounded-full`}>
            {icon}
          </span>
        )}
        {label}
      </button>
    </NavLink>
  );
};

export default CTAButton;
