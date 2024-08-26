import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
  IoMdHelpCircleOutline,
} from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

interface IIConProvider {
  name: "Accepted" | "Maybe" | "Declined" | "No Response";
}
function IconProvider({ name }: IIConProvider) {
  switch (name) {
    case "Accepted":
      return (
        <IoIosCheckmarkCircleOutline size={24} className=" text-success-300" />
      );
    case "Maybe":
      return <FaRegCircle size={22} className=" text-warning-300" />;

    case "Declined":
      return <IoIosCloseCircleOutline size={24} className=" text-error-600" />;

    default:
      return <IoMdHelpCircleOutline size={24} className=" text-neutral-300" />;
  }
}

export default IconProvider;
