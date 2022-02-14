import {useState} from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import {useTasks} from "../../useTasks";

function Tasks() {
  
  /*const sampleTasks = [
      { id: 1, content: "Przykładowe pierwsze zadanie", done: true },
      { id: 2, content: "Przykładowe drugie zadanie", done: false },
      { id: 3, content: "Przykładowe trzecie zadanie", done: false },
  ];*/
  
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań"/>
      
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
          <TaskList 
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

export default Tasks;