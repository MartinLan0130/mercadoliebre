const express =require ("express")
const app = express ();
app.use (express.static("public"));

app.listen (4100, function(){ console.log("Te oigo")});

app.get ("/", function (req,res){ res.sendFile(__dirname + "/views/index.html");})
