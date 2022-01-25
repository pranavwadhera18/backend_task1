const express = require("express");
const res = require("express/lib/response");
const app= express();

app.get("/:name",(req,res) => {
    res.send(req.params.name);
}
);




app.listen(3000,() =>  {
    console.log("server is running on port 3000");
});
