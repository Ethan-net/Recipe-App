import React from 'react'

export default function FoodItems({food}) {
  return (
    <div>
      <h1 key={food.title}>{food.title}</h1>
      <img src={food.image} alt="" />
      <button>View Recipe</button>
    </div>
  )
}
