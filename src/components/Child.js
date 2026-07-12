import React from 'react'

function Child({isLoggedIn,setisLoggedIn}) {
  return (
    <>
    {isLoggedIn ? <p>You are logged in!</p> :
        <form>
            <label>Username: <input type='text' placeholder='enter your name'/></label><br/>
            <label>Password:<input type='password' placeholder='enter your name'/></label><br/>
            <button onClick={()=>setisLoggedIn(true)}>Login</button>
        </form>}
    </>
  )
}

export default Child