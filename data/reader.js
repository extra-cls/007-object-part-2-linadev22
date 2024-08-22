import fs from "fs";
const users = JSON.parse(fs.readFileSync("./data/MOCK_DATA.json"))

export {users};