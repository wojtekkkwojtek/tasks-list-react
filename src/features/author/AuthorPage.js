import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import {ParagraphContent} from "./styled";

export const AuthorPage = () => (
    <Container>
        <Header title="O autorze"/>
        <Section 
            title="Wojciech K" 
            body={
                <>
                <ParagraphContent>"W życiu biegnę za marzeniem i&nbsp;wchodzę w&nbsp;kolejny challenge..." 😀.<br/>
                Każdego dnia staram się przyswoić nową wiedzę z&nbsp;zakresu programowania 
                w&nbsp;technologii Front-end oraz nauczyć się nowych słówek i&nbsp;konstrukcji
                gramatycznych w&nbsp;językach: angielskim 🇺🇸 i&nbsp;hiszpańskim 🇪🇸.<br/> 
                Motto, które mi przyświeca to "nieustanny rozwój".</ParagraphContent>
                </>
            } 
        />
    </Container>
);