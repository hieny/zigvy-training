import { useEffect, useState } from "react";
import "./index.scss";

export type ToastifyType = {
  message?: string;
  type?: string;
  show: boolean;
};

export default function Toastify({ message, type, show }: ToastifyType) {
  const [isShow, setIsShow] = useState<boolean>(show);

  useEffect(() => {
    setIsShow(show);
  }, [show]);

  return (
    <>
      {isShow && (
        <div className="toastify">
          <div className={type}></div>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
