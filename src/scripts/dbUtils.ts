import axios from 'axios'

const URL = 'http://127.0.0.1:3000';
const SHIPS_ROUTE = '/ships';
const CHARACTERS_ROUTE = '/characters';
const RANKING_ROUTE = '/ranking';

export async function getShips() {
    const {data} = await axios.get(URL + SHIPS_ROUTE);
    return data;
}

export async function getCharacters() {
    const {data} = await axios.get(URL + CHARACTERS_ROUTE);
    return data;
}

export async function getRankings() {
    const {data} = await axios.get(URL + RANKING_ROUTE);
    return data;
}

export async function postRanking(playerName: string, galacticCredit: number) {
    getRankings().then((response) => {
        const data = {
            id: response.length + 1,
            name: playerName,
            score: galacticCredit
        };
        axios.post(URL + RANKING_ROUTE, data);
    });
}