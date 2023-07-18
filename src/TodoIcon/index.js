// import { ReactComponent as CheckSVG } from "./check.svg"
// import { ReactComponent as DeleteSVG } from "./delete.svg"
import "./TodoIcon.css"
import { PiCheckCircleBold } from "react-icons/pi";
import { PiXCircleBold } from "react-icons/pi";

const iconTypes = {
    "check": (color) =>  <PiCheckCircleBold className="Icon-svg" fill={color} />,
    "delete":(color) =>  <PiXCircleBold className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }){
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type] (color)}
        </span>
    )
}

export { TodoIcon }