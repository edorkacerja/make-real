'use client'
import {useRef} from 'react'
import {Provider} from 'react-redux'
import {AppStore, makeStore} from './lib/store/store'
import {initializeCount} from "./lib/store/features/counter/counterSlice";


interface StoreProviderProps {
    count?: number; // Make count optional
    children: React.ReactNode;
}

export default function StoreProvider({ count = 0, children }: StoreProviderProps) {

    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}