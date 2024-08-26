// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const jwt = require("jsonwebtoken");

// const app = express()
// app.use(cors())
// app.use(express.json())

// const PORT = process.env.PORT ||8081


// //schema user
// const schemaData = mongoose.Schema({
//     name : String,
//     email : String,
//    password : String,
// },{
//     timestamps : true
// })
// const userModel = mongoose.model("user",schemaData)


// // //Breakfast
// // const schemaD1 = mongoose.Schema({
// //     meal : String,
// //     item : String,
// // },{
// //     timestamps : true
// // })
// // const Model1 = mongoose.model("breakfast",schemaD1)



// const Breakfast = mongoose.model("Breakfast", {
//     id: {
//         type: Number,
//         required: true,
//       },
//     meal: {
//       type: String,
//     },
//     item: {
//       type: String,
//     },       
//   });

//   app.post("/addbreakfast", async (req, res) => {
//     console.log(req.body)
//     let breakfast = await Breakfast.find({});
//     let id;
//     if (breakfast.length>0) {
//       let last_product_array = breakfast.slice(-1);
//       let last_product = last_product_array[0];
//       id = last_product.id+1;
//     }
//     else
//      { id = 1; }
//     const breakfast1 = new Breakfast({
//        id: id,
//       item: req.body.item,
//         meal: req.body.meal,
//     });
//     console.log(breakfast1);
//     await breakfast1.save();
//     console.log("Saved");
//     res.json({success:true})
//   });

//   app.post("/deletebreakfast", async (req, res) => {
//     const breakfast = await Breakfast.findOneAndDelete({ item: req.body.item ,meal:req.body.meal});
//     console.log("Removed");
//     res.json({success:true})
//   });

 
//   app.post("/updatebreakfast", async (req, res) => {
//     const { id, meal } = req.body;
//     await Breakfast.findOneAndUpdate({ id }, { meal });
//     console.log("Updated");
//     res.json({ success: true });
//   });

//   //----------------------------------------------------------------------------------
  

// //Lunch
// const schemaD2 = mongoose.Schema({
//     meal : String,
//     item : String,
// },{
//     timestamps : true
// })
// const Model2 = mongoose.model("lunch",schemaD2)


// //Dinner
// const schemaD3 = mongoose.Schema({
//     meal : String,
//     item : String,
// },{
//     timestamps : true
// })
// const Model3 = mongoose.model("dinner",schemaD3)


// //Weekely
// const schemaD4 = mongoose.Schema({
//     meal : String,
//     item : String,
// },{
//     timestamps : true
// })
// const Model4 = mongoose.model("",schemaD4)


// //read data
// // app.get("/",async(req,res)=>{
// //     const data = await userModel.find({})
// //     res.json({success : true , data : data})
// // })

// // //create data//save data in mongodb
// // app.post("/create",async(req,res)=>{
// //     console.log(req.body)
// //     const data = new userModel(req.body)
// //     await data.save()
// //     res.send({success :true, message :"data save sauccessfully",data : data})
// // })

// // //update data
// // app.put("/update",async(req,res)=>{
// //     console.log(req.body)
// //     const { id,...rest} = req.body

// //     console.log(rest)
// //    const data = await userModel.updateOne({_id : id},rest)
// //     res.send({success : true, message : "data update successfully",data :data})
// // })

// // //delete 
// // app.delete("/delete/:id",async(req,res)=>{
// //     const id = req.params.id
// //     console.log(id)
// //     const data = await userModel.deleteOne({_id:id})
// //     res.send({success : true, message : "data deleted successfully",data :data})
// // })


// mongoose.connect("mongodb+srv://vaishnavigholap2000:Cdac123@cluster0.crqzrjh.mongodb.net/Mealplanning")
// .then(()=>{
//     console.log("connect to DB")
//     app.listen(PORT,()=>console.log("Server is Running"))
// })
// .catch((err)=>console.log(err))

// app.post('/login', async (req, res) => {
//     console.log("Login");
//       let success = false;
//       let user = await Users.findOne({ email: req.body.email });
//       if (user) {
//           const passCompare = req.body.password === user.password;
//           if (passCompare) {
//               const data = {
//                   user: {
//                       id: user.id
//                   }
//               }
//               success = true;
//         console.log(user.id);
//               const token = jwt.sign(data, 'secret_ecom');
//               res.json({ success, token });
//           }
//           else {
//               return res.status(400).json({success: success, errors: "please try with correct email/password"})
//           }
//       }
//       else {
//           return res.status(400).json({success: success, errors: "please try with correct email/password"})
//       }
//   })
  
// // Schema for creating user model
// const Users = mongoose.model("Users", {
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//       unique: true,
//     },
//     password: {
//       type: String,
//     },
//     cartData: {
//       type: Object,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//   });

  
// //Create an endpoint at ip/auth for regestring the user in data base & sending token
// app.post('/signup', async (req, res) => {
//     console.log("Sign Up");
//           let success = false;
//           let check = await Users.findOne({ email: req.body.email });
//           if (check) {
//               return res.status(400).json({ success: success, errors: "existing user found with this email" });
//           }
//           let cart = {};
//             for (let i = 0; i < 300; i++) {
//             cart[i] = 0;
//           }
//           const user = new Users({
//               name: req.body.username,
//               email: req.body.email,
//               password: req.body.password,
//               cartData: cart,
//           });
//           await user.save();
//           const data = {
//               user: {
//                   id: user.id
//               }
//           }
          
//           const token = jwt.sign(data, 'secret_ecom');
//           success = true; 
//           res.json({ success, token })
//       })

//====================================================================================================

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");

const bcrypt = require('bcryptjs');

const LunchMeal = require('./Models/LunchMeal');
const LunchGrocery = require('./Models/LunchGrocery');

const BreakfastMeal = require('./Models/BreakfastMeal');
const BreakfastGrocery = require('./Models/BreakfastGrocery');

const DinnerMeal = require('./Models/DinnerMeal');
const DinnerGrocery = require('./Models/DinnerGrocery');

dotenv.config();
const app = express();

//MiddleWare
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8081;

const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect("mongodb+srv://vaishnavigholap2000:Cdac123@cluster0.crqzrjh.mongodb.net/Mealplanning")
.then(()=>{
    console.log("connect to DB")
    app.listen(PORT,()=>console.log("Server is Running"))
})
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    //cartData: Object,
  }, { timestamps: true });
  
  const User = mongoose.model("User", userSchema);
  
//   app.post('/signup', async (req, res) => {
//     try {
//       const { username, email, password } = req.body;
//       let user = await User.findOne({ email });
//       if (user) {
//         return res.status(400).json({ success: false, errors: "User already exists" });
//       }
  
//       const hashedPassword = await bcrypt.hash(password, 10);
//       user = new User({
//         name: username,
//         email,
//         password: hashedPassword,
//         cartData: {},
//       });
//       await user.save();
  
//       const token = jwt.sign({ user: { id: user.id } }, JWT_SECRET);
//       res.json({ success: true, token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, errors: "Server error" });
//     }
//   });
  
//   app.post('/login', async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ success: false, errors: "Invalid credentials" });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ success: false, errors: "Invalid credentials" });
//       }
  
//       const token = jwt.sign({ user: { id: user.id } }, JWT_SECRET);
//       res.json({ success: true, token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, errors: "Server error" });
//     }
//   });
  
  
//Login
app.post('/login', async (req, res) => {
        console.log("Login");
          let success = false;
          let user = await Users.findOne({ email: req.body.email });
          if (user) {
              const passCompare = req.body.password === user.password;
              if (passCompare) {
                  const data = {
                      user: {
                          id: user.id
                      }
                  }
                  success = true;
            console.log(user.id);
                  const token = jwt.sign(data, 'secret_ecom');
                  res.json({ success, token });
              }
              else {
                  return res.status(400).json({success: success, errors: "please try with correct email/password"})
              }
          }
          else {
              return res.status(400).json({success: success, errors: "please try with correct email/password"})
          }
      })
      
    // Schema for creating user model
    const Users = mongoose.model("Users", {
        name: {
          type: String,
        },
        email: {
          type: String,
          unique: true,
        },
        password: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      });
    
      
//Sign-up
    app.post('/signup', async (req, res) => {
        console.log("Sign Up");
              let success = false;
              let check = await Users.findOne({ email: req.body.email });
              if (check) {
                  return res.status(400).json({ success: success, errors: "existing user found with this email" });
              }
              let cart = {};
                for (let i = 0; i < 300; i++) {
                cart[i] = 0;
              }
              const user = new Users({
                  name: req.body.username,
                  email: req.body.email,
                  password: req.body.password,
                  cartData: cart,
              });
              await user.save();
              const data = {
                  user: {
                      id: user.id
                  }
              }
              
              const token = jwt.sign(data, 'secret_ecom');
              success = true; 
              res.json({ success, token })
          })
    


// Dinner routes
app.get('/dinnermeals', async (req, res) => {
    try {
        const meals = await DinnerMeal.find();
        res.json(meals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/dinnermeals', async (req, res) => {
    const meal = new DinnerMeal({
        name: req.body.name
    });
    try {
        const newMeal = await meal.save();
        res.status(201).json(newMeal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/dinnermeals/:id', async (req, res) => {
    try {
        const updatedMeal = await DinnerMeal.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        res.json(updatedMeal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/dinnermeals/:id', async (req, res) => {
    try {
        await DinnerMeal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Meal deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Dinner Grocery items routes
app.get('/dinnergroceryItems', async (req, res) => {
    try {
        const items = await DinnerGrocery.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/dinnergroceryItems', async (req, res) => {
    const item = new DinnerGrocery({
        name: req.body.name
    });
    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/dinnergroceryItems/:id', async (req, res) => {
    try {
        await DinnerGrocery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//Lunch
app.get('/lunchMeals', async (req, res) => {
  try {
      const meals = await LunchMeal.find();
      res.json(meals);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

app.post('/lunchMeals', async (req, res) => {
  const meal = new LunchMeal({
      name: req.body.name
  });
  try {
      const newMeal = await meal.save();
      res.status(201).json(newMeal);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.put('/lunchMeals/:id', async (req, res) => {
  try {
      const updatedMeal = await LunchMeal.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
      res.json(updatedMeal);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.delete('/lunchMeals/:id', async (req, res) => {
  try {
      await LunchMeal.findByIdAndDelete(req.params.id);
      res.json({ message: 'Meal deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


//Lunch Grocery
app.get('/lunchGrocery', async (req, res) => {
  try {
      const items = await LunchGrocery.find();
      res.json(items);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

app.post('/lunchGrocery', async (req, res) => {
  const item = new LunchGrocery({
      name: req.body.name
  });
  try {
      const newItem = await item.save();
      res.status(201).json(newItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.delete('/lunchGrocery/:id', async (req, res) => {
  try {
      await LunchGrocery.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

//Breakfast routes
app.get('/breakfastmeals', async (req, res) => {
  try {
      const meals = await BreakfastMeal.find();
      res.json(meals);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

app.post('/breakfastmeals', async (req, res) => {
  const meal = new BreakfastMeal({
      name: req.body.name
  });
  try {
      const newMeal = await meal.save();
      res.status(201).json(newMeal);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.put('/breakfastmeals/:id', async (req, res) => {
  try {
      const updatedMeal = await BreakfastMeal.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
      res.json(updatedMeal);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.delete('/breakfastmeals/:id', async (req, res) => {
  try {
      await BreakfastMeal.findByIdAndDelete(req.params.id);
      res.json({ message: 'Meal deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Breakfast Grocery items routes
app.get('/breakfastgroceryitems', async (req, res) => {
  try {
      const items = await BreakfastGrocery.find();
      res.json(items);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

app.post('/breakfastgroceryitems', async (req, res) => {
  const item = new BreakfastGrocery({
      name: req.body.name
  });
  try {
      const newItem = await item.save();
      res.status(201).json(newItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

app.delete('/breakfastgroceryitems/:id', async (req, res) => {
  try {
      await BreakfastGrocery.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

