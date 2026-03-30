import { useSelector } from "react-redux";
import FollowUpModal from "./FollowUpModal";

const MODAL_COMPONEMT = {
  FOLLOW_UP: FollowUpModal,
};

const ModalManager = () => {
  const { isOpen, modalType, props } = useSelector((state) => state.modals);

  if (!isOpen) return null;

  const Component = MODAL_COMPONEMT[modalType] || {};

  return <Component {...props} />;
};
export default ModalManager;
