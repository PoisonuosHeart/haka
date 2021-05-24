const router = require('express').Router()

// Ругистрация

router.post('/registr', [], async (req, res) => {
    console.log("smth: ")
    return res.status(200)
})


module.exports = router