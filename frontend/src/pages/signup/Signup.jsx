import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async(e) => {
    e.preventDefault()

    if(!name){
      setError("Please enter your name")
      return
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address")
      return
    }

    if(!password){
      setError("Please enter the password")
      return
    }

    setError("")

    //sign up api
  }

  return (
    <div className="flex items-center justify-center "
    style={{
      backgroundImage: "url('/src/images/SignupPage.webp')",
      backgroundSize: "cover",
      backgroundAttachment:"fixed",
      backgroundPosition: "center",
      height:"100vh",
      margin: 0,
    }}>
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="text-2xl mb-7">Sign Up</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

          <button type="submit" className="btn-primary">
            Sign Up
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
             to={"/login"} 
             className='font-medium text-[#2B85FF] underline'
            >
             Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup