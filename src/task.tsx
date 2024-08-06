import { useReducer, useState } from "react";

type Task = {
	id: number;
	text: string;
};
const initialState: Task[] = [];

type Action =
	| { type: "add"; text: string }
	| { type: "remove"; id: number }
	| { type: "reset" };

function reducer(state: Task[], action: Action) {
	switch (action.type) {
		case "add":
			return [...state, { id: Date.now(), text: action.text }];
		case "remove":
			return state.filter((task) => task.id !== action.id);
		case "reset":
			return initialState;
		default:
			break;
	}
}

export function Task() {
	const [input, setInput] = useState("");

	const [state, dispatch] = useReducer(reducer, initialState);

	function addTask() {
		dispatch({ type: "add", text: input });
		setInput("");
	}

	return (
		<>
			<button type="button" onClick={() => dispatch({ type: "reset" })}>
				Resetar lista
			</button>
			<h1>Tarefas</h1>
			<input
				type="text"
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
			<button type="button" onClick={addTask}>
				Adicionar tarefa
			</button>
			<hr />
			<br />
			<ul>
				{state.map((task: Task) => (
					<li key={task.id}>
						<span>
							{task.text} -{" "}
							<button onClick={() => dispatch({ type: "remove", id: task.id })}>
								Remover
							</button>
						</span>
					</li>
				))}
			</ul>
		</>
	);
}
