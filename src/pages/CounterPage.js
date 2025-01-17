// import useCounter from "../hook/use-counter";
import Button from "../components/Button";
import { useReducer } from "react";
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;
            // throw new Error("unexpected action type: " + action.type);
            // return state;
    }
};

function CounterPage({ initialCount }) { 
    // const { count, increment } = useCounter(initialCount);

    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispath]  = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispath({
            type: INCREMENT_COUNT,
        });
    };
    const decrement = () => {
        dispath({
            type: DECREMENT_COUNT,
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispath({
            type: SET_VALUE_TO_ADD,
            payload: value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispath({
            type: ADD_VALUE_TO_COUNT,
        });
    };


    return (
        <div className="m-3 border rounded p-3 shadow bg-white w-full">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"  
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                />
                <Button>Add it!</Button>
            </form>
        </div>
    );
}

export default CounterPage;