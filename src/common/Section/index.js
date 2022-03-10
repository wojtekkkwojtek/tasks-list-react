import {Wrapper, Header, Body, Title} from "./styled"

const Section = ({title, body, extraHeaderContent, button}) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
            {button}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;