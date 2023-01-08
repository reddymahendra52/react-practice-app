import { useState } from 'react';

import './UserInput.css'
import ErrorModal from '../ErrorModal/ErrorModal'

function UserInput(props) {

  const [title, setTitle] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (title.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const data = {
      name: title,
      age: age,
      id: Math.random().toString()
    }

    props.addData(data)

    setTitle("")
    setAge("")

  }

  const errorHandler = () => {
    setError(null);
  };


  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="userinput-container">
        <form onSubmit={formSubmitHandler}>
          <label className="form-label" >Name</label>
          <input className='form-input' type="text" value={title} onChange={titleChangeHandler} />

          <label className="form-label" >Age</label>
          <input className='form-input' type="text" value={age} onChange={ageChangeHandler} />

          <button className='form-submit' type="submit" >Add User</button>

        </form>
      </div>
    </>
  )
}

export default UserInput;
