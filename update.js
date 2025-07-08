const dbConnect=require('./mongodb');

const updateData=async()=>{
    let data=await dbConnect();
    let result= await data.updateMany(
        {brand: 'Iphone 16'},
        {
            $set:{name: 'Iphone 16 Pro', price: 1500}
        }
    )
    console.log(result);
}

updateData();