import React from 'react'

function Signup() {
  return (
    <div className='forms'>
    <h2>Signup</h2>
      <form>
        <label>
          <span>Name:</span>
          <input type="text" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Signup