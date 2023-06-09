import { useState } from "react";

interface User {
  name: string;
  email: string;
}

const StateHook = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const incrementCount = (): void => {
    setCount((prevState: number) => prevState + 1);
  };

  const handleUserData = () => {
    setUser({
      name: "John Doe",
      email: "johndoe@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={incrementCount}>Count: {count}</button>
      
      <button onClick={handleUserData}>Set User Data</button>
      <div>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default StateHook;
