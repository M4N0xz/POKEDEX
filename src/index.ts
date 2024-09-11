import express,{Request, Response} from "express";
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get('/', function (request:Request, response: Response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            response.render("index", data);
        });
});

app.get('/pokemon/:pkmname', function (request:Request, response: Response) {
    const pkmname = request.params.pkmname
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmname}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data)
            response.render("ability(1)", {pokemon: data});
        });
});


app.listen(3000, function () {
    console.log("Server is running at http://localhost:3000");
})