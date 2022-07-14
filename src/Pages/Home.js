import React, {useState} from 'react'

function Home() {
   const [email, setEmail] = useState([])


   function handleSubmitForm (e){
    e.preventDefault()
    fetch('http://localhost:5001/email',{
      method: "POST",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify({
       email
      })
    })
    .then(res=> res.json())
    .then(data=> (console.log(data)))
    setEmail("")

  }
  
    return (
        <div>
        <form className="subscribe" onSubmit= {handleSubmitForm}>
        <span>SUBSCRIBE:</span>
      <input 
        placeholder="E-mail" 
        value={email}
        onChange = {e=> setEmail(e.target.value)}
        size="20"
        className="formfield"
      />
      <input className="emailsubmit"
        type="submit" 
        value="SEND" 
      />
        </form>
        </div>
    
    )
}
export default Home