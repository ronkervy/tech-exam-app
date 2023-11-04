const express = require('express');
const cors = require('cors');
const httpError = require('http-errors');
const app = express();
const userRoutes = require('./routes/user.routes');

var whitelist = ['http://frontend_app:3000','http://localhost:3000']

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/ump/v1',cors(corsOptions),userRoutes);

app.use((req,res,next)=>{
   next(httpError.NotFound());
});

app.listen(8000);

