
import React from "react";
import "./Card.css";
import Image from "next/image";
import mern from "../../../public/assets/mern.png";

type Props = {
    htext: string;
    pic: any;
};

const Card: React.FC<Props> = ({ htext, pic }) => {
    return (
        <div className="card">
            <h1>{htext}</h1>
            <div className="hovercard">
                <Image src={pic} alt="Project Image" />
            </div>
        </div>
    );
};

export default Card;
