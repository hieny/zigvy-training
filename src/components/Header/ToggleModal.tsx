import Login from "../../page/login";
import Modal from "../Modal/Modal";

export default function ToggleModal({
  isOpenToggle,
}: {
  isOpenToggle: boolean;
}) {
  return (
    <div className={`toggle ${isOpenToggle ? "active" : ""}`} >
      <div>
        <span>Sign up</span>
      </div>
      <hr />
      <div>
        <Modal name="Login">
          <Login />
        </Modal>
      </div>
    </div>
  );
}
