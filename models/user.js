import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/testapp1")
const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})
const userModel = mongoose.model('user', userSchema)
export default userModel