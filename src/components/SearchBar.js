import {useState} from 'react'

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')


    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        console.log('event', event)
        setTerm(event.target.value);
    }

    return (<>
        <form onSubmit={handleFormSubmit}>
        cccc:{term}

            <input value={term} onChange={handleChange} />
            {/* <button >ClickMe</button> */}
        </form>
    </>);
}

export default SearchBar;