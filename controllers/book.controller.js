const { ObjectId } = require("mongodb")
const { getDb } = require("../utils/dbConnect")


module.exports.getAllBook = async (req, res) => {
    try {
        const db = getDb()
        const result = await db.collection("bookList").find({}).toArray()
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
module.exports.updateABook = async (req, res) => {
    try {
        const db = getDb()
        const id = req.params.id
        const result = await db
        .collection("bookList")
        .updateOne({_id: new ObjectId(id)}, {$set: req.body})

        res.status(200).json({
            message: `Book Updated Successfully with ${id} book id`,
            data: result 
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports.deleteABook = async (req, res) => {
    try {
        const db = getDb()
        const id = req.params.id
        const result = await db
        .collection("bookList")
        .deleteOne({_id: new ObjectId(id)})

        res.status(200).json({
            message: `Book Deleted Successfully with ${id} book id`,
            data: result 
        })
    } catch (error) {
        console.log(error)
    }
}
