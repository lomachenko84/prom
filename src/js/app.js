import { json, read } from "./basic";

export class GameSavingLoader {
    static load() {
        return new Promise((resolve, reject) => {
            let data;
            read().then((buffer) => {
                data = buffer
                json(data).then((son) => {
                        resolve(son);

                })

            });
        })


    }
}
GameSavingLoader.load().then((saving) => {
    console.log(saving)
})