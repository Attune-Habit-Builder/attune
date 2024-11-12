import React, { useRef } from 'react';
//import edit from '../edit.svg';
import TodaysDate from './TodayDate';
import logo from '../patrice.png';
function Header({ userId, setUserId, setError }) {
  const searchInputRef = useRef(null);

  const fetchUserId = async (userName) => {
    try {
      const responseId = await fetch(
        `http://localhost:3000/api/userId?userName=${userName}`
      );
      const resultId = await responseId.json(); // parse response body as json
      //console.log('id!!!!!', resultId.userId[0].id);
      const id = resultId.userId[0].id;
      setUserId(id);
      if (responseId.ok) {
        setUserId(resultId.userId); // set dailyHabits state with response data
      } else {
        setError(resultId.error); // set error if status !ok
      }
    } catch (err) {
      setError('Error getting Id');
    }
  };

  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) => {
    // setUser to the value that's been input into the form on click
    setUser(inputValue);

    //logic to send the inputvalue to the database to create the user
  };

  return userId ? (
    <header className='App-header container'>
      <img src={logo} className='App-header logo' />
      <h2>Welcome!</h2>
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
        {/* <form className='app-header' method='POST' action='../user/create'>
          <input
            type='text'
            value={user}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='your username'
            name='username'
          ></input>
          <input type='submit' onClick='handle' value='create'></input>
          </form> */}
        <div>
          <input
            type='text'
            id='userName'
            placeholder='Please enter your user name'
            ref={searchInputRef} // once this element is rendered, React assigns the input field to searchInputRef.current, allows direct interaction after
            onKeyDown={(e) => {
              // search triggers on pressing enter or with button click below
              if (e.key === 'Enter')
                fetchUserId(searchInputRef.current.value.trim());
            }}
          />
          <button
            onClick={() => fetchUserId(searchInputRef.current.value.trim())}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
