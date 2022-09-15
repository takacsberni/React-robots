import React, {useEffect, useState} from "react";
import TerminatorLister from "./components/temrinator-lister";
import {models1} from "./models";
import SearchBox from "./components/searchbox";

function App ()  {
    // constructor() {
    //     super();
    //     this.state ={
    //         models: models1,
    //         searchField: ''
    //     }
    // }
    const [models, setModels] = useState([]);
    const [searchField, setSearchField] = useState([]);

    const onSearchChange = (event) => {
        this.setState( {searchField: event.target.value})
        // console.log(event.target.value);
    }

    return (){
        const filteredModels = this.state.models.filter( (model) => {
            return model.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <SearchBox searchChange={this.onSearchChange} />
                <TerminatorLister models1={filteredModels} />;
            </div>
        );
    }
}

export default App
