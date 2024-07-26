// Create a list of candidates, showing their name, vote count, and buttons to add/subtract votes
// Create a small form which has an input box for candidate names and a SUBMIT button to add candidate names. 
// Writing a name in this box and clicking "SUBMIT" should add this candidate name in the list with vote count: 0
// Show the list in the order of descending number of votes


import React, { useState } from 'react'



const CandidateList =()=>{
  const [candidates, setCandidates] = useState([
    {id: 1, name: 'sajal1', vote: 3},
    {id: 2, name: 'sajal2', vote: 7},
    {id: 3, name: 'sajal3', vote: 3},
    {id: 4, name: 'sajal4', vote: 8},
  ])
}

const addCandidate=()=>{

}

const sortedData = [...candidates].sort((a,b)=> b.votes-a.votes)

const increaseCnt=(id)=>{
   setCandidates(candidates.map(i=>
   i.id===id?{...i, vote: candidateList.vote+1}: i)
)
}

const decreaseCnt=()=>{

}
const Component1 = () => {
  const [newCandidate]  
  return (
    <div>
        <h1>Candidates</h1>
        <ul>
          {sortedData.map(i=>{
            <li key={i.id}>
              <span>{i.name}: {i.vote} votes</span>
              <button onClick={()=> increaseCnt(i.id)}>Vote increase</button>  
              <button onClick={()=> decreaseCnt(i.id)}>Vote decrease</button>  
            </li>
          })

          }  
        </ul>
    </div>
    <input
      type="text"
      value={}
  )
}

export default Component1