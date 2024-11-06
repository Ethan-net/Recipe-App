import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "f58d908af5bd4a93916963002c3b1fe3"

export default function Search() {
    const[query, setQuery] = useState("pizza")
    useEffect(()=> {
        async function fetchFood (){
            const res =  await fetch(`${URL}?=query${query}&apiKey=${API_KEY}`)
            const data =  await res.json()
            console.log(data)

        }
        fetchFood()
    }, [])
  return (
    <div>
      <input value={query} onChange={(e)=> setQuery(e.target.value)}></input>
    </div>
  )
}
