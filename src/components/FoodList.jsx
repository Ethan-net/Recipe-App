import React from 'react'
import FoodItems from './FoodItems'

export default function FoodList({foodData}) {
  return (
    <div>
      {foodData.map((food)=>(
        <FoodItems key={food.id} food = {food}/>
      ))}
    </div>
  )
}
