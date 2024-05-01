//* ---> Packages
import express, { Request, Response } from 'express'
require('dotenv').config()
import bodyParser from 'body-parser'
import database from './models'
// import Routes from 'rest-client/src/routes'
import cors from 'cors'


//* ---> Declarations
const app = express()


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.WEB_URL
}));
//* ---> Database


//* ---> Routes
import AuthRouter from './routes/AuthRouter'
//* ----> ENV Variables
const PORT = process.env.SERVER_PORT;

//* ---> Routers
app.use('/auth',AuthRouter)


app.get('/health', (req, res) => {
  console.log(database.sequelize);
  
  res.send({
    status:'🎉OK'
  })
})

database.sequelize
  .authenticate()
  .then(async () => {
    console.log("✅ DB Connect");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database");
  });

  
database.sequelize.sync().then((req: any) => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  })
})