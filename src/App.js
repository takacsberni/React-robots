import React from "react";
import TerminatorLister from "./components/temrinator-lister";
import {models1} from "./models";

const App = () => {
    return (
        <div>
            <TerminatorLister models1={models1} />;
        </div>
    );
}

export default App
