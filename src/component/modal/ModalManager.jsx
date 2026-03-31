import { useSelector } from "react-redux";
import FollowUpModal from "./FollowUpModal";
import PreEmploymentDataModal from "./preEmploymentData/PreEmploymentDataModal";

const MODAL_COMPONEMT = {
  FOLLOW_UP: FollowUpModal,
  PRE_EMPLOYMENT_DATA: PreEmploymentDataModal,
};

const ModalManager = () => {
  const { isOpen, modalType, props } = useSelector((state) => state.modals);

  if (!isOpen) return null;

  const Component = MODAL_COMPONEMT[modalType] || {};

  return <Component {...props} />;
};
export default ModalManager;
