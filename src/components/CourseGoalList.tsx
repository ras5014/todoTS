import CourseGoal from "./CourseGoal"
import { CourseGoal as CGoal } from "../App"

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (goalId: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map(goal => (
                <li><CourseGoal key={goal.id} id={goal.id} title={goal.title} description={goal.description} onDelete={onDeleteGoal} /></li>
            ))}
        </ul>
    )
}

export default CourseGoalList
