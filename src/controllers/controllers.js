import mongoose from 'mongoose';
import { ProductSchema } from '../models/models';

const Product =  mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {

  const newProduct = new Product(req.body);

  newProduct.save((err, Product) => {
    if (err){
      //something
    }
    res.json()
  })
}