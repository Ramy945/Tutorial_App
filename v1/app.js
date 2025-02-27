const express=require("express");
const app=express();
const router=require('./routes/routes.js');
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use(router);
app.use("/list.html",router);
app.use("/form",router);
app.use((req, res) => {
    res.status(404).render('notFound',{titel:'Page Not Found',url: req.originalUrl});
  });
app.listen(8020,function(){
    console.log("ich lauche auf port 8020");
})
