import React, { createContext, useContext, useState } from "react";
import { SnackbarContextType } from "../interfaces";
import Snackbar from "../components/Snackbar";

const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {},
});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showSnackbar = (message: string) => {
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  let snackbarContextObject: SnackbarContextType = {
    showSnackbar: showSnackbar,
  };
  return (
    <SnackbarContext.Provider value={snackbarContextObject}>
      {visible ? <Snackbar message={message} /> : <></>}
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
