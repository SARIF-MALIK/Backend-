const mongoose = require('mongoose');
const { Schema } = mongoose;


const main = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm'); 
    const blogSchema = new Schema({
      title: String, // String is shorthand for {type: String}
      author: String,
      body: String,
    });

    const ProductsModel = mongoose.model('products', blogSchema);
    let data = new ProductsModel({name: "m8"}); 
    let result = await data.save();
    console.log(result);  
} 

main(); 

