import Child from "../../toggle/context/Child";
import LanguageProvider from "../../toggle/context/LanguageProvider";
import ParentComponent from "../../toggle/props/ParentComponent";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <h2>Toggle Props</h2>
            <ParentComponent />
            <hr />
            <h2>Toggle Context API</h2>
            <LanguageProvider>
                <Child />
            </LanguageProvider>
        </>
    )
}

export default Home;