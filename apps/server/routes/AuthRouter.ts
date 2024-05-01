import express, { Request, Response } from "express";
const  { body, validationResult } =  require("express-validator");
import { User_Attributes } from "shared-types";
import jwt from 'jsonwebtoken';
var bcrypt = require('bcryptjs')
// import Routes from 'rest-client/src/routes'

import database from "../models";
const env = process.env.NODE_ENV || "development";
const countries = require('countries')
import { Op } from "sequelize";

const Router = express.Router();

interface RegisterRequest extends User_Attributes {
  password: string;
}

Router.post(
  '/register',
  [
    body("username").trim().escape().notEmpty().isLength({ min: 3 }),
    body("email").trim().isEmail().normalizeEmail().notEmpty(),
    body("password").trim().isLength({ min: 6 }),
    body("country").custom((value:any) => {
      if (!countries.find((country:{name:string}) => country.name === value)) {
        throw new Error("Invalid Country!")
      }
      return true;
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Bad Request!" });
    }
    const { username, email, password, country } = req.body as RegisterRequest;
    try {
      const userExists = await database.User.findOne({
        where:{
          [Op.or]: [
            { email },
            { username }
          ]
        }
      });

      if (userExists) {
        return res
          .status(400)
          .json({ message: "Email or Username is already registered!", success: false });
      }
      var salt = bcrypt.genSaltSync(10);
      var hashed_password = bcrypt.hashSync(password, salt);

      await database.User.create({
        username,
        email,
        country,
        hashed_password,
        last_login: new Date(),
      });

      return res
        .status(200)
        .json({ message: "Sucesfully Registrated", success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", success: false });
    }
  }
);

Router.post(
  '/login',
  [
    body('email').trim().escape().notEmpty(),
    body('password').trim().escape().notEmpty(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    const { email, password } = req.body;

    try {
      console.log(await database.sequelize.models);
      const user = await database.User.findOne({
        where: {
          email: email,
        },
      }) as User_Attributes | null;

      if (!user) {
        return res.status(404).json({ message: 'Incorrect Credentials!', success: false });
      }

      const passwordMatch = await bcrypt.compareSync(password, user.hashed_password)

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials', success: false });
      }

      const payload = {
        id: user.keyword, 
        email: user.email,
        username:user.username,
        profile_image:user.profile_image,
      };
      
      const token = jwt.sign(payload, process.env.JWT_SECRET || '', {
        expiresIn: '2d', 
      });

      return res.status(200).json({ message: 'Login successful', token: token,...payload, success: true });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Something went wrong!', success: false });
    }
  }
);


export default Router;
