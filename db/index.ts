import mongoose from "mongoose"
const url = process.env.MONGODB_URI
console.log('connecting to', url)

export let moogoose = mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})