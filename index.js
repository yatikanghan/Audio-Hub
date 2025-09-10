const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./model/user.js');
const Product = require('./model/product.js');
const Rating = require('./model/rating.js');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

const cloudinary = require('cloudinary').v2;



const app = express();

const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

async function dbconnect() {
    await mongoose.connect('mongodb://127.0.0.1/AudioHub'). then(()=>{
        console.log("Database connected");
    });

}
dbconnect();


// image config

cloudinary.config({
    cloud_name: 'dunqhg4uq',
    api_key: '495823826719684',
    api_secret: 'T5BRSKgc5AryRjmYgJvqNFBIyV0'
  });
  
  module.exports = cloudinary;


app.use((req, res, next) => {
    res.locals.useralredyregistered = req.flash("useralredyregistered");
    res.locals.loginerr = req.flash("loginerr");
    next();
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



app.get('/login', (req, res) => {
    res.render('signin.ejs');
});

app.post('/login', async (req, res) => {
    const {email, password } = req.body;
    // console.log(`username : ${email}, and password id ${password}`);
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
        if(checkUser.email == req.body.email && checkUser.password == req.body.password){
            req.session.user = checkUser;
            if (req.session.user.role == "Admin"){
                res.redirect('/admindashboard');
            }else{
                res.redirect('/');
            }
        }else{
            req.flash("loginerr", "Invalid Username and Password!");
            res.redirect('/login');
        }
    }
    else{
        req.flash("loginerr", "No User Found!");
        res.redirect('/login');
    }
});

app.get('/register', (req, res) => {
    res.render('signup.ejs');
});
app.post('/register', async (req, res) => {
    const {name, email, mobile, password } = req.body;
    const checkUser = await User.findOne({ email: email });

    if (checkUser) {
        req.flash("useralredyregistered", "Email Address is already registered!");
        console.log("User Alredy Exist!");
        res.redirect("/register");
    }
    else{
        const newuser = new User({
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            password : req.body.password
        });
        console.log(newuser);
        await newuser.save();
    
        res.redirect('/login');
    }
});

app.use((req,res,next)=>{
    if(req.session.user){
       next();
    }
    else{
        res.redirect('/login');
    }
});

app.get('/', (req, res) => {
    const user = req.session.user;
    res.render('index.ejs', { user : user});
});


app.get('/about', (req, res) => {
    const user = req.session.user;
    res.render('about.ejs');
});

app.get('/contact', (req, res) => {
    const user = req.session.user;
    res.render('contact.ejs');
});

app.get('/shop', (req, res) => {
    const user = req.session.user;
    res.render('shop.ejs');
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

// ---------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------   Admin Panel   ------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------

app.get("/admindashboard", (req,res) => {
    const user = req.session.user;
    res.render("admindashboard.ejs", { user : user});
});
app.get('/adminproduct', async (req,res) => {
    const user = req.session.user;
    const allproduct = await Product.find();
    res.render("adminproduct.ejs", { user : user, allproduct : allproduct });
});
app.get('/adminorder', (req,res) => {
    const user = req.session.user;
    res.render("adminorder.ejs", { user : user});
});
app.get('/admincustomer', (req,res) => {
    const user = req.session.user;
    res.render("admincustomer.ejs", { user : user});
});



app.get('/addproduct', async (req,res) => {
    const user = req.session.user;
    res.render("addproduct.ejs", { user : user});
});
app.post('/addproduct', async (req,res) => {
    const {
        name, category, brand, desc, price, stock, sku,
        'img1': img1, 'img2': img2, 'img3': img3,
        'tag1': tag1, 'tag2': tag2, 'tag3': tag3, 'tag4': tag4, 'tag5': tag5
      } = req.body;
      const newProduct = new Product({
        name,
        category,
        brand,
        desc,
        price: parseFloat(price),
        stock: parseInt(stock),
        sku,
        image: { img1 :"", img2 :"", img3 :"" },
        tags: { tag1, tag2, tag3, tag4, tag5 }
      });

      await newProduct.save().then((mail) => {
        console.log(mail);
      });

      res.send(newProduct);
});
app.get("/adminproductedit/:id", async (req,res) => {
    const pid = req.params.id;
    const user = req.session.user;
    const product = await Product.findById(pid);
    console.log(product);
    res.render("adminproductedit.ejs", { user : user, product : product});
});
