import express from "express";
const app=express();
const port=3000;

// app.post('/submit',(req,res)=>{
//     res.render('./pract/index.ejs',{
//         name: req.body["name"]
        
//     });
// });

app.get("/",(req,res)=>{

    const date=new Date("October 1, 2005 20:34:12"); //by changing the date you'll get the desired O/p accordingly
    //if the above date and time not specified it'll automatically consider the current or today or present one

    let day=date.getDay(); //for getting the day

    let dateThatDay=date.getDate(); //for getting the date

    let year=date.getFullYear(); //you'll get the year here

  let month=date.getMonth(); //for getting the month

    let hour=date.getHours(); //for getting the hour

    let minutes=date.getMinutes(); //you'll get minutes here

    let seconds=date.getSeconds(); //for getting the seconds
//sunday will be 0 and saturday will be 6
    let str1="hello to the world!";
    let str2="work mode on in the world";


    if(day===0 || day===6){
        str1="good night to the world!";
        str2="work mode off for now!"
    }

    res.render("index.ejs",{
        keyy1:str1,
        keyy2:str2,
        keyy3:dateThatDay,
        keyy4:year,
        keyy5:month,
        keyy6:hour,
        keyy7:minutes,
        keyy8:seconds,
    });
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})