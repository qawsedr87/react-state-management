import { useContext } from 'react'
import { ILanguageContextProps, languageContext } from './LanguageProvider';

const Child = () => {
    const { language, toggleLang } = useContext<ILanguageContextProps>(languageContext);

    return (
        <>
            <h2>Parent: </h2>
            <p>{language}</p>
            <button onClick={toggleLang}>Parent Toggle</button>
        </>
    )
}

export default Child;