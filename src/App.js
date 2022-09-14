import React from "react";
import TerminatorLister from "./components/temrinator-lister";
import {models1} from "./models";
import SearchBox from "./components/searchbox";

class App extends React.Component{
    constructor() {
        super();
        this.state ={
            models: models1,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        console.log(event);
    }

    render() {
        return (
            <div className="tc">
                <SearchBox searchChange={this.onSearchChange} />
                <TerminatorLister models1={this.state.models} />;
            </div>
        );
    }
}

export default App
