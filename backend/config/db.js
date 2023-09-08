import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://flakakallaba:flaka12345@cluster0.hyen6ow.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${(conn).Connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
