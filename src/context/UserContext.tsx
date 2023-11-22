import { createContext, useState } from "react";

interface UserProp {
  image: string;
  likes: string[];
  name: string;
  username: string;
  _id: string;
}

interface UserContextType {
  user: UserProp;
  setUser: React.Dispatch<React.SetStateAction<UserProp>>;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextProviderProp {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProp) => {
  const fromStorage = localStorage.getItem("user");
  const parsedData = fromStorage
    ? JSON.parse(fromStorage)
    : { image: "", likes: [], name: "", username: "", _id: "" };
  const [user, setUser] = useState<UserProp>(parsedData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
