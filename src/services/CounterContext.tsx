import { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
}
type CountContextType = {
    count: number;
    increament: () => void;
    decreament: () => void;
    reset: () => void;
  };
  export const CountContext = createContext<CountContextType | null>(null);

const CountProvider = ({children}: Props) => {
    const [count, setCount] = useState(0);
    const increament = () => setCount(prev => prev + 1);
    const decreament = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);
    return (
        <CountContext.Provider value={{ count, increament, decreament, reset }}>
          {children}
        </CountContext.Provider>
      );
}
export default CountProvider;