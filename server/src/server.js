const express = require("express");
const cors = require("cors");

const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./dev.sqlite3",
    },
});

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/job", async (request, response) => {
    console.log("request.body", request.body);
    await knex("job").insert({
        firstName: request.body.firstName,
    });

    response.send("Job created!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
