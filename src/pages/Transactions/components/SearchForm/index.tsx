import {SearchFormContainer} from "./styles.ts";
import {MagnifyingGlass} from "phosphor-react";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder='Search transactions'/>
            <button type='submit'>
                <MagnifyingGlass size={20} />
                Search
            </button>
        </SearchFormContainer>
    );
}
