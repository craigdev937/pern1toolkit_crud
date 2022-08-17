export interface IPlayer {
    id: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface PlayerState {
    players: IPlayer[],
    loading: boolean,
    error: null
};


