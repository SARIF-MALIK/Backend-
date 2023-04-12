const {mongoose, Schema} = require('mongoose')
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt')

const url = `mongodb+srv://foodApp:YnXXq3FKPg11sK09@cluster0.0gbwip0.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)
.then((db)=>{
    console.log('db is connected')
    // console.log(db); 
}) 
.catch((e)=>console.log(e))

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    confirmPassword:{
        type:String,
        required:true,
        min:5,
        validate:function(){
            return this.confirmPassword==this.password
        }
    }
  });

  userSchema.pre('save', function(){
    console.log('before saving in db')
    this.confirmPassword=undefined;
  })

  userSchema.pre('save', async function(){
    // console.log(this.password)
    let salt= await bcrypt.genSalt();
    let hashedString= await bcrypt.hash(this.password, parseInt(salt)); 
    // console.log(hashedString); 
    this.password = hashedString; 
  })

  userSchema.post('save', function(doc){
    console.log('after saving in db', doc)
  })

//   model
                  // mongoose.mode(modelName, Schema)
  const userModel = mongoose.model('model', userSchema);
//   user   
  module.exports=userModel; 
//  (async function createUser(){
//     let user={
//         name:'Abhishek',
//         email:'abc@gmail.com',
//         password:'1234556',
//         confirmPassword:'1234556'
//     }
//     let data = await userModel.create(user);
//     console.log(data) 
//   })();