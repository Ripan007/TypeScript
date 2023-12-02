import Todos from './components/Todos'
import Todo from './models/Todo'

function App() {
  const todos = [new Todo('learn react'), new Todo('typeScript is awesome')]
  return (
    <>
      <Todos items={todos} />
    </>
  )
}

export default App
