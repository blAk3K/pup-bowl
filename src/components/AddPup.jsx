import React, { useState } from 'react';

function AddPup({ onAddPup }) {
  const [newPupName, setNewPupName] = useState('')
  const [newPupBreed, setNewPupBreed] = useState('')
  const [newPupStatus, setNewPupStatus] = useState('')
  const [newPupId, setNewPupId] = useState('')

  const handleAddPup = () => {
    //check to see if all pup deatils have been enterd
    if (newPupName.trim() === '' || newPupBreed.trim() === '' || newPupStatus.trim() === ''
      || newPupId.trim() === '') {

      alert('please provide all the detail to the pup ');

      return;
    }

    
  };
  const onPupSub = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/Blakes-puppys/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: newPupName,
            breed: newPupBreed,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
    
  } 

  return (
    <div>
      <h2>Add New Puppy</h2>
      <form onSubmit={onPupSub}>
        <input
          type="text"
          placeholder="Enter puppy name"
          value={newPupName}
          onChange={(e) => setNewPupName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter puppy breed"
          value={newPupBreed}
          onChange={(e) => setNewPupBreed(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter puppy status"
          value={newPupStatus}
          onChange={(e) => setNewPupStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter puppy ID"
          value={newPupId}
          onChange={(e) => setNewPupId(e.target.value)}
        />
        <button onClick={handleAddPup}>Add Puppy</button>
      </form>
    </div>
  )
}
export default AddPup