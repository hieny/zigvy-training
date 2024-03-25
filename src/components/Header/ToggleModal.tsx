import { useEffect, useState } from "react";
import Login from "../../page/login";
import Modal from "../Modal/Modal";
import token from "@/lib/token";
import { useUserLogout } from "@/services/queries/user/user.query";

export default function ToggleModal({
  isOpenToggle,
}: {
  isOpenToggle: boolean;
}) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const userLogoutQuery = useUserLogout();
  const handleShowModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    console.log("hererere");
  };

  const handleLogout = () => {
    userLogoutQuery
  }



  const isLogin = !!token.getToken(token.getTokenKey());
  console.log("isLogin", isLogin);

  useEffect(() => {
    setIsOpenModal(false);
  }, [isLogin]);

  return (
    <>
      {!isLogin ? (
        <>
          <div className={`toggle ${isOpenToggle ? "active" : ""}`}>
            <div>
              <span>Sign up</span>
            </div>
            {/* <hr /> */}
            <div>
              <div
                onClick={() => {
                  handleShowModal();
                }}
              >
                Login
              </div>
              <Modal name="" isOpen={isOpenModal}>
                <Login isModal={true} handleCloseModal={handleCloseModal} />
              </Modal>
            </div>
          </div>
        </>
      ) : (
        <div className={`toggle ${isOpenToggle ? "active" : ""}`} onClick={handleLogout}>
          <p>Logout</p>
        </div>
      )}
    </>
  );
}
