import React from "react";
import TerminatorLister from "./components/temrinator-lister";
import {models1} from "./models";
import SearchBox from "./components/searchbox";

class App extends React.Component{
    constructor() {
        super();
        this.state ={
            models: models1,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value})
        // console.log(event.target.value);
    }

    render() {
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
