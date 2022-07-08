const express=require ("express");
//to use thr express pakage 
const app=express();
const port=3000;
//to set the local port for the server
const bodyParser=require ('body-parser');
//top instal the pakage of bodyParser in the server
const array=[]
//creating an emty array to store the data in the array

app.use(bodyParser.json())
//

app.post('/addTask',(req,res)=>{
//seting the local host path in addTask to add the data entre in the body
	console.log(req.body)
	
	if(req.body.title && req.body.subtitle)
        //if there is no title and subtitle the data will not come into the the array
	{
        const data =(req.body);
        //declaring the name as data for the data we typed in the body
	array.push(data);
	//Pushing the data to the array
	res.send(array)
        //Print the array 
	}
	else
	{
		res.send("required perameters are missing")
	}
		
})

app.get('/getTask',(req,res)=>{
// to get the data that we all ready stored in array we are using the getTask as path to find	
	console.log('request received')
	const data=(req.body.id);
	console.log(data)
	const val=array.find((e)=>e.id===data);
	//array.find is used to find the data from the array.In here we are find the the data fropm the array with the help of the id that we enter
	console.log(val)
	res.send (val)
})

app.put('/updateTask',(req,res)=>{
//app.put is used to update the data tha we already entred and stored in array,updateTask is the path	
	const data =(req.body.id)
	const task=array.find ((e)=>e.id===data)
	//array.find is used to find the data from the array.In here we are find the the data fropm the array with the help of the id that we enter
	let query=req.body.query
	//taking the request of key in the body and saving it to the query 
	let value=req.body.value
	//taking the request of value in the body and saving it to the value 
	task[query]=value;
	//Key=value ,such as query=value
	res.send(task)
         })

app.delete('/deleteTask',(req,res)=>{
//app.delete is used to delete the data that we dont want in the array that we stored,deleteTask is the path	
	const data=(req.body.id)
	const pos=array.find ((e)=>e.id===data)
	//array.find is used to find the data from the array.In here we are find the the data fropm the array with th e help of the id that we enter
	del=array.indexOf(pos)
	//array.indexOf() is used tofind the poistion of the data that we want from the array
        array.splice(pos,1)
        //array.splice is used to delete the data in the array.to delete the particular posion data we have to give the posistion of the data and how many to delete 
	res.send(array)
})



app.listen(port,()=>{
//app.listen is used for lisiten the port that we enter	
	console.log('app listen to the port'+ port)
})
