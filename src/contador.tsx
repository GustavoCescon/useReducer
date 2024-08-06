import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useReducer } from "react";

type State = {
	count: number;
};

type Action =
	| {
			type: "increment";
	  }
	| { type: "decrement" }
	| { type: "reset" };

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			if (state.count === 0) return state;
			return { count: state.count - 1 };
		case "reset":
			return { count: 0 };
		default:
			throw new Error();
	}
}

const initializeState = { count: 0 };
export function Contador() {
	const [state, dispatch] = useReducer(reducer, initializeState);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Contador</h1>
			<div className="card">
				<button type="button" onClick={() => dispatch({ type: "decrement" })}>
					-
				</button>
				<span>{state.count}</span>
				<button type="button" onClick={() => dispatch({ type: "increment" })}>
					+
				</button>
			</div>

			<button type="button" onClick={() => dispatch({ type: "reset" })}>
				Resetar
			</button>
		</>
	);
}
