import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('')
  const [people, setPeopple] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeopple((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail();
    } else {
      console.log('Empty Values');
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit} >
          <div className='from-control'>
            <label htmlFor="firstName" >Name :</label>
            <input
              type="firstName"
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <br />
          <div className='from-control'>
            <label htmlFor="email" >Email :</label>
            <input
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' >Add Person</button>
        </form>
        {
          people.map((person, index) => {
            const { id, firstName, email } = person
            return (<div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
            );
          })};
      </article>
    </>
  )
};

export default ControlledInputs;
