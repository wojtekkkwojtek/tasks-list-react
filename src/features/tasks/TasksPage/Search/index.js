import Input from "../../Input"
import {Wrapper} from "./styled";
import {useQueryParameter, useReplaceQueryParameter} from "../queryParameters";
import {searchQueryParamName} from "../../searchQueryParamName";

export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined, 
        });
    };
    
    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};