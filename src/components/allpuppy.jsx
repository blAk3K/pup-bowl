import {useState, useEffect} from 'react'


function AllPuppys () {
const [allPupArr, setAllPupArr] = useState([]);
const [selectedPuppy, setSelectedPuppy] = useState(null); // State to track the selected puppy

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/Blakes-puppys'

useEffect(() =>{
const getAllPuppys = async () => {
   //aysync to grab all pups from arry from the API
  try{
  const response = await fetch (`${API_URL}/players`)
  const json = await response.json();
  const pupList = json.data.players;
  const uniquePupArr = pupList.filter((puppy, index, self) =>
  index === self.findIndex(p => p.name === puppy.name)
);
setAllPupArr(uniquePupArr);
console.log(uniquePupArr)
  }
  catch (error) {
console.error('error:', error);
  }
} ;

getAllPuppys();
}, []);


 // function to handel click on a puppys name
 const handlePuppyClick = (puppy) => {
  setSelectedPuppy(puppy);// Update the selectedPuppy state with the clicked puppy
 };

  return(
<>
 <h2> all puppies</h2>
    <ul>
    {selectedPuppy ? ( // Render only the selected puppy if it exists
          <li>
            <button onClick={() => setSelectedPuppy(null)}>Back to all puppies</button>
            <div>
              <h3>Selected Puppy Details</h3>
              <p>Name: {selectedPuppy.name}</p>
              <p>Breed: {selectedPuppy.breed}</p>
              <p>Status: {selectedPuppy.status}</p>
              <p>Id: {selectedPuppy.id}</p>
              <section>
              <img src={selectedPuppy.imageUrl} alt={selectedPuppy.name} />
              </section>
              {/* Add more details as needed */}
            </div>
          </li>
        ) : (
         
          // Render all puppies if no puppy is selected
          
          allPupArr.map(puppy => (
            <>
            <li key={puppy.id} onClick={() => handlePuppyClick(puppy)}>
              {puppy.name}
            </li>
            {/* <DeletePup /> */}
            </>
          ))
        )}
      </ul>
</>

  )
}

export default AllPuppys

