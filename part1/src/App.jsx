import ReactDOMClient from 'react-dom/client'

const App = (props) => {
  let counter = 1


  
const root = () => {
  ReactDOMClient.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
  
}

function renderApp() {
  root.render
}

renderApp()
counter += 1
renderApp()
counter += 1
renderApp()

  return (
    <div>{counter}</div>
  )

  
}

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
export default App