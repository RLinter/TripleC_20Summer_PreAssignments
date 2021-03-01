var express = require('express');
var router = express.Router();
const TestController = require('../controllers/Controller')
const Person = require('../models/Person')

/* test GET request. */
router.get('/', function(req, res, next) {
  res.send("Get successfully")
});

router.get('/all', (req, res) => {
    TestController.get(req, res)
})

// router.get('/all/:id', (req, res) => {
//     TestController.get(req, res, req.params.id)
// })

router.post('/all/new', (req, res) => {
    TestController.post(req, res)
})

router.patch('/patch/:id', (req, res)=> {
    TestController.patch(req, res, req.params.id)
})

router.delete('/delete/:id', (req, res)=> {
    TestController.delete(req, res, req.params.id)
})


module.exports = router;
