const express =require ("express")
const app = express ();
app.use (express.static("public"));

app.listen (4000, function(){ console.log("Te oigo")});

app.get ("/", function (req,res){ res.sendFile(__dirname + "/index.html")})
