interface IChildComponentProps {
    language: string;
    onToggle: () => void;
}

const ChildComponent = ({language, onToggle}: IChildComponentProps) => {
    return (
        <div>
            <h2>Child</h2>
            <p>Lanaguage: {language}</p>
            <button onClick={onToggle}>Toggle</button>
        </div>
    );
}

export default ChildComponent;
