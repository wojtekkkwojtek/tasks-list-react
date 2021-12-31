import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przykładowe pierwsze zadanie", done: true },
  { id: 2, content: "Przykładowe drugie zadanie", done: false },
  { id: 3, content: "Przykładowe trzecie zadanie", done: false },
];



function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" 
      body={<Tasks tasks={tasks} hideDone={hideDone} />} 
      extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />
    </Container>
  );
}

export default App;