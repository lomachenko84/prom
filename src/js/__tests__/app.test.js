import { GameSavingLoader } from "../app";

test("test profiGame", () => {
 return GameSavingLoader.load().then(data => {
    expect(data).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
 });  
})