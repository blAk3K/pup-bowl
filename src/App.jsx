import AllPuppys from './components/allpuppy'
import { useState, useEffect } from 'react'
import './App.css'
import AddPup from './components/AddPup'
function App() {
  const [puppies, setPuppies] = useState([]);

  const handleAddPup = (newPuppy) => {
    setPuppies([...puppies, newPuppy]);
  };



  return (

    <div className="App">
      <header>
        <h1>Welcome to the Puppy Bowl!</h1>
      </header>
      <AddPup onAddPup={handleAddPup} /> {/*AddPup component*/}
      <AllPuppys puppies={puppies} /> {/* Render the AllPuppys component */}
    </div>

  )
}

export default App
