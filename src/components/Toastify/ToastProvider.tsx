import { useEffect, useState } from "react";
import { toastManager } from "./toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<JSX.Element | null>(null);

  useEffect(() => {
    toastManager.setToastSetter(setToast);
  }, []);


  return (
    <>
      {toast}
      {children}
    </>
  );
}