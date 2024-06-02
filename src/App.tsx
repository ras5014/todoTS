import { useState } from "react"
import CourseGoal from "./components/CourseGoal"
import Headrer from "./components/Headrer"
import goalsImage from "./assets/goals.jpg"
import CourseGoalList from "./components/CourseGoalList"
import NewGoal from "./components/NewGoal"

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const addGoalsHandler = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary
    }
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal]
    })
  }

  const deleteGoalHandler = (goalId: number) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== goalId))
  }

  return (
    <main>
      <Headrer image={{ src: goalsImage, alt: "A list of goals" }} />
      <NewGoal onAddGoal={addGoalsHandler} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  )
}

export default App
