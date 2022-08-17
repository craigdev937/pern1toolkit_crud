import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI"
import { Item } from "./Item";

export const Players = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { error, loading, players } = 
        useAppSelector((state) => state.players);

    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            <button>
                <Link to="/players/add">Add Player</Link>
            </button>
            {error ? (
                <h1>Error...</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {players.map((player) => (
                        <Item key={player.id} player={player} />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};



