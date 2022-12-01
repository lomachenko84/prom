import { json, read } from "./basic";

export class GameSavingLoader {
    static load() {
        return read().then((buffer) => json(buffer).then((son) => JSON.parse(son)));
    }


}

GameSavingLoader.load().then((saving) => {
    console.log(saving)
})