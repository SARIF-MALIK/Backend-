const dbConnect = require('./4mongodb'); 

const updateData = async ()=>{
    let data = await dbConnect(); 
    let result = await data.updateOne(
        {name:'max'}, 
        { $set:{name:'max pro'}}
    );
    console.warn(result); 
}

updateData(); 