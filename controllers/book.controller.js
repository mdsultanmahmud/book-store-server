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
    try {
        const db = getDb()
        const book = req.body 
        const result = await db.collection("bookList").insertOne(book)
        res.status(200).json({
            message: "Book Added Successfully",
            data: result 
        })
    } catch (error) {
        console.log(error)
    }
}