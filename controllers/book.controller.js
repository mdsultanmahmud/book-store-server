const { getDb } = require("../utils/dbConnect")


module.exports.getAllBook = async (req, res) => {
    try {
        const db = getDb()
        const result = await db.collection("users").find({}).toArray()
        res.send(result)
    } catch (error) {
        console.log(error)
    }

}
module.exports.addABook = async (req, res) => {
    res.send({
        msg: "router workinng",
        data: req.body

    })
}