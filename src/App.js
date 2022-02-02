import {useState, useEffect} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

/*const Buttons = styled.button`

${({primary}) => primary && css`

`}
`;*/

function App() {
  
  /*const sampleTasks = [
      { id: 1, content: "Przykładowe pierwsze zadanie", done: true },
      { id: 2, content: "Przykładowe drugie zadanie", done: false },
      { id: 3, content: "Przykładowe trzecie zadanie", done: false },
  ];*/
  
  const [hideDone, setHideDone] = useState(false);

  const tasksInLocalStorage = localStorage.getItem("tasks");
  
  const [tasks, setTasks] = useState(
    tasksInLocalStorage
      ? JSON.parse(tasksInLocalStorage)
      : []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id? {
      ...task, done: !task.done } : task));
  };
  
  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };
  
  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks, 
      { 
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, 
      },
    ]);
  };
  
  return (
    <Container>
      <Header title="Lista zadań" 
      />
      
      <Section 
        title="Dodaj nowe zadanie" 
        body={
          <Form addNewTask={addNewTask} 
          />
        } 
      />
      
      <Section 
        title="Lista zadań"
        body={
          <Tasks 
          tasks={tasks} 
          hideDone={hideDone} 
          removeTask={removeTask} 
          toggleTaskDone={toggleTaskDone} 
          />
        }
        extraHeaderContent={
          <Buttons 
            tasks={tasks} 
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone} 
            setAllDone={setAllDone} 
            />
          } 
        />
      </Container>
    );
  }

export default App;