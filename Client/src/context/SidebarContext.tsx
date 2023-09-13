import { ReactNode, createContext, useState } from "react";

interface sidebarType {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<sidebarType>({
  isToggled: false,
  setIsToggled: () => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SidebarContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </SidebarContext.Provider>
  );
};
