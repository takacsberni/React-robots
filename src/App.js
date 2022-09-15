import React, {useEffect, useState} from "react";
import TerminatorLister from "./components/temrinator-lister";
import SearchBox from "./components/searchbox";

function App()  {

    const [models, setModels] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField( event.target.value);
    };

    useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then( (response) => response.json())
        .then( (users) => setModels(users)
        )}, []);

    const filteredModels = models.filter( (model) => {
        return model.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (models.length === 0){
        return <h1>Loading... </h1>
    }

    return (
        <div className="tc">
            <SearchBox searchChange={onSearchChange} />
            <TerminatorLister models1={filteredModels} />;
        </div>
    );
}

export default App
