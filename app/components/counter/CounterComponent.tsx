import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from "../../lib/store/features/counter/counterSlice";

export function CounterComponent() {
    // @ts-ignore
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}
