const dbConnect=require('./mongodb');

const insertData=async ()=>{
    let data=await dbConnect();
    let result=await data.insertMany([
        {name:'HP',brand:'Omen',price:1600,catergory:'laptop'},
        {name:'Dell',brand:'Alienware',price:2000,catergory:'laptop'}
    ]
    );
    if(result.acknowledged){
        console.log("Data inserted");
    }
}

insertData();