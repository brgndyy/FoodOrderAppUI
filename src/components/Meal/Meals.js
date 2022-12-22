import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import classes from './Meals.module.css'

function Meals() {
  return (
    <main className={classes.main}>
    <MealsSummary/>
    <AvailableMeals/>
    </main>
  )
}

export default Meals