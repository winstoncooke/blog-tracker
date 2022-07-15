import { useEffect } from 'react'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'
import { useDispatch } from 'react-redux'
import { initalizeNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initalizeNotes())
  }, [dispatch])

  return (
    <div>
      <NewNote/>
      <VisibilityFilter/>
      <Notes />
    </div>
  )
}

export default App