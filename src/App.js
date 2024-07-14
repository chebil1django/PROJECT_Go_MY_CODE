import { useState } from "react";
import "./App.css";

import "./styles.css";
import Form from "./componants/Form";
import TasksManager from "./componants/TasksManager";
import ThemeSwitcher from "./componants/ThemeSwitcher";
import Carte from "./componants/carte";

function App() {
  const [theme, setTheme] = useState(false);
  const [Tasks, setTasks] = useState([
    {
      geocode: [36.862499, 10.15],
      
      popUp: "Action 1"
    },
    {
      geocode: [36.862499, 10.18],
      popUp: "Action 2"
    },
    {
      geocode: [36.852499, 10.25],
      popUp: "Action 3"
    }
  ])
  return (
    <frameElement>
   

    <br></br>
    <div className={`App ${theme ? "light-theme" : ""}`}>
      <div className="center">
        <ThemeSwitcher setTheme={setTheme} theme={theme} />
        <main>
          <Form setTasks={setTasks} Tasks={Tasks} />
          <TasksManager Tasks={Tasks} setTasks={setTasks} />
       
        </main>
        
      </div>

        
  
    </div>
    <div><Carte markers= {Tasks} /></div>
      
   </frameElement>
  );
}

export default App;
