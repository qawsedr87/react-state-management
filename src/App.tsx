import './App.css'
import RouterApp from './router/RouterApp'
import UserProvider from './users/context/UserProvider'

function App() {
  return (
    <>
      <UserProvider>
        <RouterApp />
      </UserProvider>
    </>
  )
}

export default App
