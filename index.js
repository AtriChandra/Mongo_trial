const dbConnect=require('./mongodb');
const main = async()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    // data=await data.find({name:"XPS"}).toArray();
    console.warn(data);
}
main();