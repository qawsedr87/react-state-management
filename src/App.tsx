import { Provider } from 'react-redux'
import './App.css'
import RouterApp from './router/RouterApp'
import UserProvider from './users/context/UserProvider'
import store from './users/redux/store/store'

function App() {
  return (
    <>
      <UserProvider>
        <Provider store={store}>
          <RouterApp />
        </Provider>
      </UserProvider>
    </>
  )
}

export default App
