const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://hrish14:hrish1412@cluster2.8vqavgc.mongodb.net/goFoodDB?retryWrites=true&w=majority'
const mongoDB = async () => {
    try {
            await mongoose.connect(mongoURI);
            console.log("connected !!");
            const fetched_data = mongoose.connection.db.collection("food_items");
            const data = await fetched_data.find({}).toArray()
            const food_Category = mongoose.connection.db.collection("foodCategory");
            const data1 = await food_Category.find({}).toArray()

            global.food_items = data;
            global.foodCategory = data1;
            // console.log(global.food_items)
    }
    catch (error) {

        console.log("error while connecting", error.message);
    }
}
module.exports = mongoDB;
