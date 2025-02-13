import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  referrals:{
    referrerId :number    // Foreign key linking to User table
    refereeName:  String
    refereeEmail :String 
    courseInterested:String
    createdAt :string
}[]
}
interface AuthContextType {
  user: User | null;
  setData: (userData: User) => void;
  clearData: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setData = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const clearData = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setData, clearData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
