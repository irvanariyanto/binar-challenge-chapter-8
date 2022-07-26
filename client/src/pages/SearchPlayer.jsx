import React from "react";
import Input from "../components/Input";
import ListPlayer from "../components/ListPlayer";
import { useState } from "react";

function SearchPlayer() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [lvl, setLvl] = useState('');
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <h1>Search Player</h1>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-2">
            <Input value={username} onChange={(event) => {
              setUsername(event.target.value);
            }} label="Username"/>
          </div>
          <div className="col-2">
            <Input value={email} onChange={(event) => {
              setEmail(event.target.value);
            }} label="Email"/>
          </div>
          <div className="col-2">
            <Input value={experience} onChange={(event) => {
              setExperience(event.target.value);
            }} label="Experience"/>
          </div>
          <div className="col-2">
            <Input value={lvl} onChange={(event) => {
              setLvl(event.target.value);
            }} label="Lvl"/>
          </div>
          <div className="col-2">
            
          </div>
          <div className="col-2">
            <div className="pt-4">
              <button type="submit" className="btn btn-outline-dark" onClick={() => {
                if (username) {
                  setShowResult(true);
                }
              }}>Search</button>
            </div>
          </div>
        </div>

        {
          showResult && username && email && experience && lvl ? 
            <div>
              <p>
                you are searching for <strong>{username}</strong> with email <strong>{email}</strong> with experience <strong>{experience}</strong> with lvl <strong>{lvl}</strong>
              </p>
              <ListPlayer onClick={(event) => event.preventDefault()} />
            </div> : showResult && username === "aneh" && <div className="mt-5"><h1>Not found</h1></div>
        }
      </div>
    </>
  )
}

export default SearchPlayer;
