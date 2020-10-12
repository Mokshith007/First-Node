const MongoClient=require("mongodb").MongoClient
const uri="mongodb+srv://new_user:Mokshith@007@cluster0.inswv.mongodb.net/shop?retryWrites=true&w=majority"
const mongo=new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

let _db;

const mongoConnect=(cb)=>{
  mongo.connect()
  .then(client=>{
    console.log('Connected')
    _db=client.db();
    cb()
  })
  .catch(err=>{
    console.log(err);
    throw err;
  })
}
const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'No database found!'
}
exports.mongoConnect=mongoConnect
exports.getDb=getDb