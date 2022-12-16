import { json, read } from "./basic";
class GameSaving {
    constructor(data) {
        this.id = data.id
        this.created = data.created
        this.userInfo = {
            id: data.userInfo.id, // user id
            name: data.userInfo.name, // user name
            level: data.userInfo.level, // user level
            points: data.userInfo.points, // user points
        }

    }
}

export class GameSavingLoader {
    static load() {
        return read().then((buffer) => json(buffer).then((son) => new GameSaving(JSON.parse(son))))
    }


}

GameSavingLoader.load().then((saving) => {
    console.log(saving)
})
