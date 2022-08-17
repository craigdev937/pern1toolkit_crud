import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";
import { API } from "../global/FetchAPI";
import { useAppDispatch } from "../global/Hooks";

export const Edit = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const playerID = id !== undefined ? String(id) : "";
    const [player, setPlayer] = React.useState<IPlayer>({
        id: playerID, first: "", last: "",
        age: 0, info: ""
    });

    const handleDelete = () => {
        dispatch(API.delete(playerID));
    };

    React.useEffect(() => {
        dispatch(API.getOne(playerID));
    }, [dispatch]);

    const handleChange = 
    (event: React.ChangeEvent<
                HTMLInputElement |
                HTMLTextAreaElement
            >) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = 
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.update(player));
        setPlayer({} as IPlayer);
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>Edit Player</h1>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="first">First Name</label>
                    <input 
                        type="text" 
                        name="first"
                        placeholder="First Name"
                        value={player.first}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="last">Last Name</label>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last Name"
                        value={player.last}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="age">Players Age</label>
                    <input 
                        type="number" 
                        name="age"
                        placeholder="Players Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <textarea 
                        name="info"
                        placeholder="Player Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </section>
                <footer>
                    <button>
                        <Link to="/">Cancel</Link>
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                    <button type="submit">Update Player</button>
                </footer>
            </form>
        </React.Fragment>
    );
};



