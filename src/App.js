import React from "react";
import TerminatorLister from "./components/temrinator-lister";
import {models1} from "./models";
import SearchBox from "./components/searchbox";

const App = () => {
    return (
        <div className="tc">
            <SearchBox />
            <TerminatorLister models1={models1} />;
        </div>
    );
}

export default App
