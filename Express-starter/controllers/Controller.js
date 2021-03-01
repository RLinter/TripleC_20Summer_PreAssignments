const express = require('express')
// const router = express.Router()
const Person = require('../models/Person')

const TestController = {}

TestController.get = function(req,res){
    Person.find()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in test: ' + e))
}

// TestController.get = function(req,res,id){
//     Person.findById(id)
//         .then(r => res.send(r))
//         .catch(e => res.status(500).send('GET error in test: ' + e))
// }

TestController.post = function(req,res){
    newTest = new Person(req.body)
    newTest.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in test: ' + e))
}

TestController.patch = function(req,res,id){
    var updateObject = req.body
    Person.findByIdAndUpdate(id, updateObject, {new: true})
        .then(r =>{
            res.send(r)
        })
        .catch(e => res.status(500).send('POST error in test: ' + e))
}

TestController.delete = function(req,res,id){
    Person.findById(id)
        .then(r => {
            res.send(r)
            r.delete()
        })
        .catch(e => res.status(500).send('POST error in test: ' + e))
}

// TestController.delete = function(req, res){

//     newTest.save()
//         .then(r => res.send(r))
//         .catch(e => res.status(500).send('POST error in test: ' + e))

// }


module.exports = TestController

// GET
// router.get('/', async(req,res) => {
//     try{
//         const persons = await Person.find()
//         res.json(persons)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// POST
// router.post('/', async(req,res) => {
//     const person = new Person({
//         name: req.body.name,
//         age: req.body.age,
//         gender: req.body.gender,
//         weight: req.body.weight,
//         height: req.body.height,
//         isMarried: req.body.isMarried
//     })

//     try{
//         const p =  await person.save() 
//         res.json(p)
//     }catch(err){
//         res.send('Error')
//     }
// })

//module.exports = router
