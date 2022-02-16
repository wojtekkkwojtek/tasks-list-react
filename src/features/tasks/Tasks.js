import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  /*const sampleTasks = [
      { id: 1, content: "Przykładowe pierwsze zadanie", done: true },
      { id: 2, content: "Przykładowe drugie zadanie", done: false },
      { id: 3, content: "Przykładowe trzecie zadanie", done: false },
  ];*/

  return (
    <Container>
      <Header title="Lista zadań"/>
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form/>} 
      />
      <Section 
        title="Lista zadań"
        body={<TaskList/>}
        extraHeaderContent={<Buttons/>} 
      />
    </Container>
  );
}

export default Tasks;