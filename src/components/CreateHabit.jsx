import React, { useState, useEffect } from 'react';
import VibeDropDown from './VibeDropDown';
import seeds from './spotifySeeds';
import vibes from './seedKeysToVibe';

//this will be updated to a post request to the database
//that adds the habit to the user in the database
// based on the habit chosen generte seed for post request
// seeds[vibe]() calls this once we extract the vibe from the dropdown

function CreateHabit({ options, updateVibe }) {
  const [vibe, setVibe] = useState(null);
  const [formData, setFormData] = useState({ habit: '', userId: '1' });

  const handleChange = (e) => {
    const { habit, value } = e.target;
    setFormData({ ...formData, [habit]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send the form data to the back-end
    try {
      const response = await fetch('/api/addNewHabit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure the body is JSON
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Error submitting form:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  //this will be updated to a post request to the database
  //that adds the habit to the user in the database

  return (
    <section className='bluebox'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for='habit'>What habit would you like to create? </label>

          <input
            name='habit'
            id='habit'
            type='text'
            length='30'
            value={formData.habit}
          />
        </div>
        <div className='form-group'>
          <label for='vibe'>What's the vibe?</label>
          <VibeDropDown options={seeds} updateVibe={setVibe} />
          <input type='button' id='addhabit' value='Add' />
        </div>
      </form>
    </section>
  );
}

export default CreateHabit;
