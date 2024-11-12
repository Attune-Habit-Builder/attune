import React, { useState } from 'react';
import TodaysDate from './TodayDate';
import logo from '../patrice.png';
function Header({ setUser, user }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) => {
    // setUser to the value that's been input into the form on click
    setUser(inputValue);

    //logic to send the inputvalue to the database to create the user
  };

  return user ? (
    <header className='App-header container'>
      <img src={logo} className='App-header logo' />
      <h2>{`Welcome, ${user}`}</h2>
      {/*button for adding a habit
      <button type='submit'>
        add habit button
        {/*todo: add logic for routing to /addhabit*/}
      <TodaysDate />
    </header>
  ) : (
    <header className='App-header container'>
      <div className='login-container'>
        <img src={logo} className='App-header logo' />
        {/*create form with value of username / password to submit on handleclick*/}
        <form className='app-header' method='POST' action='../user/create'>
          <input
            type='text'
            value={user}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='your username'
            name='username'
          ></input>
          <input type='submit' onClick='handle' value='create'></input>
        </form>
      </div>
    </header>
  );
}

export default Header;
