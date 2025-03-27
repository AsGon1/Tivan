import { apiKey } from "./apikey.js";


const BASE_URL = "https://comicvine.gamespot.com/api";
const URL_APY_KEY_FOMAT = `api_key=${apiKey}&format=json`; //parte de la url que especifica el formato de la informacion e introduce tu key

//para el fetch con GET
async function fetchData(url, parameters={}) {
    try {
        const finalURL = new URL (BASE_URL + url); //para que cocatene la base url con el resto de url
        Object.keys(parameters).forEach(param => {
            finalURL.searchParams.append(param, parameters[param]);
        })
        const response = await fetch(finalURL.toString());
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error(error);
    }
}


async function getIssue(issue){
    const url = "/issues/?" + URL_APY_KEY_FOMAT + "&sort=name:asc&filter=name:" + issue;
    const result = await fetchData(url);
}

async function getCharacter(character){
    const url = "/character/?" + URL_APY_KEY_FOMAT + "&filter=name:" + character;
    const result = await fetchData(url);
}

async function getvolume(volume){
    const url = "/volumes/?" + URL_APY_KEY_FOMAT + "&filter=name:" + issue;
    const result = await fetchData(url);
}


