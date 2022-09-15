import React from "react";
import TerminatorLister from "./components/temrinator-lister";
// import {models1} from "./models";
import SearchBox from "./components/searchbox";

class App extends React.Component{
    constructor() {
        super();
        this.state ={
            models: [],
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
        if (this.state.models.length === 0){
            return <h1> Loading ... </h1>
        }
        return (
            <div className="tc">
                <SearchBox searchChange={this.onSearchChange} />
                <TerminatorLister models1={filteredModels} />;
            </div>
        );
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users") //gives back a promise
            .then((response) => response.json())
            .then((users) => this.setState( {models: users}))
    }
}

export default App
