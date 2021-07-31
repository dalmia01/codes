import React, { useState } from "react";
import { PARAGRAPH } from "../../constants/data.constants";
import { sliceText } from "../../utils/helpers.utils";

export const UseStateDemo = () => {
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? "Show Less" : "Show More"}</button>
            <br />
            <div>{expanded ? PARAGRAPH : sliceText(0, 30, PARAGRAPH)}</div>
        </>
    );
};
