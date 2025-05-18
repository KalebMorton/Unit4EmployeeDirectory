import express from "express";
import employees from "#db/employees";

const app = express()

app.route('/').get((req, res) => {
    res.send("Hello employees!")
})

app.route('/employees').get((req, res) => {
    res.send(employees)
})

app.route('/employees/random').get((req, res) => {
    res.status(200).send(employees[Math.floor(Math.random() * employees.length)])
})

app.route('/employees/:id').get((req, res) => {
    const num = Number(req.params.id)
    
    const singleEmployee = employees.find((item)=>{
        return (item.id == num)
    })
    
    if(singleEmployee){
        res.status(200).send(singleEmployee)
    }else{
        res.status(404).send("There is no employee with that id")
    }
})

export default app