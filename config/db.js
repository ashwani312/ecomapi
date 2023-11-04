import mongoose from 'mongoose';

const connectTheDB = () =>{
    mongoose.connect("mongodb+srv://ashwanidewangan04:ash04wani31@cluster0.arlwsxn.mongodb.net/e-comm?retryWrites=true&w=majority")
}

export default connectTheDB;