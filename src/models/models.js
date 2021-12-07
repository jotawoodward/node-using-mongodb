import { Schema } from 'mongoose'
//const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  created_date: Date,
})