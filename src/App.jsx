import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Container from "./components/ui/Container";
import TodoApp from "./components/TodoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <h1 className="text-4xl font-semibold my-4">Task Manager</h1>
        <TodoApp />
      </Container>
    </>
  );
}

export default App;
