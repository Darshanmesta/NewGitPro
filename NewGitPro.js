const express= require("express")
const bodyParser= require("body-parser")
const request= require("request")
const app =express()

app.use(express.static("Public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.sendFile(__dirname + "/NewGitPro.html")
})


app.post("/",function(req,res){
 var fName= req.body.firstname
 var lName= req.body.secondname
 var email= req.body.email
res.send("welcome")
 var options= {
   url:"https://us20.api.mailchimp.com/3.0/266a54189e" ,
   method: "POST"
 }

request(options,function(error,response,body){
  if(error){
    console.log(error)
  }
  else{
    console.log(response.statusCode)
  }
})

})

app.listen(3000,function(){
  console.log("Hello Server is Up and Running on 3000")
})


// ff447f22e3ca212bf1ef8d0525449e8f-us20

//266a54189e

