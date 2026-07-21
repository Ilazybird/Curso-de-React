import { useState } from "react";

interface Props {
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    friends: string[];
    country: Country;
}

export enum Country {
    Brasil = "Brasil",
    Canada = "Canada",
    França = "França"
}

export const Person = (props: Props) => {

    const [name, setName] = useState<string>("");

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Email: {props.email}</h1>
            <h1>This Person {props.isMarried ? "is" : "is not"} Married</h1>
            {props.friends.map((friend: string) => (
                <h1>{friend}</h1>
            ))}
            <h1>Is from {props.country}</h1>
        </div>
    );
};