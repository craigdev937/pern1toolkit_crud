import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";

type Props = {
    player: IPlayer
};

export const Item = ({player}: Props): JSX.Element => {
    return (
        <React.Fragment>
            <main key={player.id}>
                <h2>{player.first} {player.last}</h2>
                <p>Age: {player.age}</p>
                <p>Info: {player.info}</p>
                <button>
                    <Link to={`/players/edit/${player.id}`}
                        >Edit
                    </Link>
                </button>
            </main>
        </React.Fragment>
    );
};



