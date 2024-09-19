import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="layout  mt-12">
        <h1 className="text-7xl font-thin text-center">Starter App</h1>
        <div className="flex items-center justify-center m-4">
          <button
            className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
        <p className="text-center">
          A basic starter template with tailwindcss and daisyui. Simply clone
          and <code>pnpm i; pnpm run dev </code>. Edit <code>src/App.jsx</code>
          to add content and delete the counter above. The current theme is set
          in the <code>data-theme</code> property of the html element in
          <code>index.html</code> and is currently{" "}
          <code>{document.documentElement.getAttribute("data-theme")}</code>
        </p>
      </div>
    </section>
  );
}

export default App;
