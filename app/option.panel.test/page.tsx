'use client'
import OptionPanel from "../components/option-panel/OptionPanel";
import {useEffect} from "react";

export default function OptionPanelPage() {


    // Function to call the API route
    const createTable = async () => {
        try {
            const response = await fetch('/option.panel.test/api/pets', {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('API call failed');
            }
            // Handle the response or do something with it
            console.log('Table created successfully');
        } catch (error) {
            console.error('Failed to create table:', error);
        }
    };

    useEffect(() => {
        createTable(); // Call the function when the component mounts
    }, []);


    return (

        <>
            <OptionPanel/>
        </>

);
}
