import { type FormEvent, useRef } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        if (enteredGoal.trim().length === 0 || enteredSummary.trim().length === 0) {
            return;
        }
        onAddGoal(enteredGoal, enteredSummary);
        event.currentTarget.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal
