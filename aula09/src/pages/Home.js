import {AppContext} from '../App';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        }
    });

    if (isError) {
        return <p> Sorry, there was an error </p>
    }

    if (isLoading) return <p>Loading...</p>;

    return <div>
        <h1>This is the Home page, <p>{data.fact}</p></h1>
        <button onClick={refetch}>Update the data</button>
    </div>
}