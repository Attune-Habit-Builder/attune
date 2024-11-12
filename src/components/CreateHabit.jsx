import React, { useState, useEffect } from 'react';
import VibeDropDown from './VibeDropDown';
import seeds from './spotifySeeds';

//this will be updated to a post request to the database
//that adds the habit to the user in the database
// based on the habit chosen generte seed for post request
// seeds[vibe]() calls this once we extract the vibe from the dropdown

function CreateHabit({ options, updateVibe }) {
  const [vibe, setVibe] = useState(null);

  const addHabit = async () => {};
  //this will be updated to a post request to the database
  //that adds the habit to the user in the database

  return (
    <section className='bluebox'>
      <form className='addhabit-box' action='./addhabit' method='POST'>
        <div className='form-group'>
          <label for='habit'>What habit would you like to create? </label>

          <input name='habit' id='habit' type='text' length='30' />
        </div>
        <div className='form-group'>
          <label for='vibe'>What's the vibe?</label>
          <VibeDropDown options={seeds} updateVibe={setVibe} />
        </div>
        <div className='form-group'>
          <input type='submit' id='addhabit' />
        </div>
      </form>
    </section>
  );
}

export default CreateHabit;
