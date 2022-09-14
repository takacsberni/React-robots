import React from "react";
import Terminator from "./Terminator";

const TerminatorLister = ( {models1}) => {
    return (
        <div>
            {models1.map(
                (model) => {
                    return (
                        <Terminator id={model.id} name={model.name} serialNumber={model.serialNumber} key={model.id} />
                    )
                }
            )}
        </div>
    )
}

export default TerminatorLister;
