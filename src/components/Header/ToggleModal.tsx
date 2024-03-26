import token from "@/lib/token";
import { useUserLogout } from "@/services/queries/user/user.query";
import { useContext, useEffect, useState } from "react";
import Login from "../../page/login";
import { HeaderContext } from "./HeaderLeft";

export default function ToggleModal({
  isOpenToggle,
}: {
  isOpenToggle: boolean;
}) {
  // const { handleOpenModal, handleCloseModal } = useModalContext();
  const headerContext = useContext(HeaderContext)
  const [isOpenModal, setIOpenModal] = useState<boolean>(false);
  const useLogout = useUserLogout();

  const handleLogout = () => {
    useLogout.mutate();
    headerContext?.handleCloseToggle()
  };

  const handleOpenModal = () => {
    setIOpenModal(true);
  };
  const handleCloseModal = () => {
    setIOpenModal(false);
  };

  const isLogin = !!token.getToken();

  useEffect(() => {
    if (isLogin) {
      setIOpenModal(false);
    }
  }, [isLogin]);

  return (
    <>
      <div className={`toggle ${isOpenToggle ? "active" : ""}`}>
        <div>
          {isLogin ? (
            <>
              <div className="toggle_button">Profile</div>
              <div className="toggle_button" onClick={handleLogout}>
                <span>Logout</span>
              </div>
            </>
          ) : (
            <>
              <div className="toggle_button">Sign up</div>
              <div className="toggle_button">
                <div onClick={handleOpenModal}>Login</div>
              </div>
              <Login isOpen={isOpenModal} handleClose={handleCloseModal} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
