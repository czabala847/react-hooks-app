import React from "react";
import ReactDOM from "react-dom/client";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterAppWithHook } from "./01-useState/CounterAppWithHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHook } from "./03-example/MultipleCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Memorize } from "./05-memo/Memorize";
// import { MemoHook } from "./06-useMemo/MemoHook";
// import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
