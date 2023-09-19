"use client";

import { Card } from "flowbite-react";
import './../css/style1.css'

export default function Cards(props) {
    return (
        <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            className="w-11/12 m-auto"
        >
            <img src={props.img} alt="img" id="img"/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{props.name}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    {props.desc}
                </p>
            </p>
        </Card>
    );
}
