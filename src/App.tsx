import './App.css'
import Child from './toggle/context/Child'
import LanguageProvider from './toggle/context/LanguageProvider'
import ParentComponent from './toggle/props/ParentComponent'

function App() {
  return (
    <>
      <h1>Toggle Props</h1>
      <ParentComponent />
      <hr />
      <h1>Toggle Context API</h1>
      <LanguageProvider>
        <Child />
      </LanguageProvider>
    </>
  )
}

export default App
