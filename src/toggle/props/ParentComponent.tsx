import { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [currLang, setCurrLang] = useState("JavaScript");

    const toggleLanguage = () => {
        setCurrLang(currLang === "JavaScript" ? "Java" : "JavaScript");
    }

    return (
        <div>
            <h2>Parent</h2>
            <p>Current Langugage: {currLang}</p>
            <ChildComponent language={currLang} onToggle={toggleLanguage} />
        </div>
    );
}

export default ParentComponent;