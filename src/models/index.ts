/**
 * Usage:
 *      import { DB } from "./../models";
 *      DB.models.SomeModel.findAll().then(r => console.log(r))
 */

import {Sequelize} from "sequelize-typescript";
//import {SomeModel} from "./some-model";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/database.json")[env];

/**
 * Declare all models here
 */
//config.models = [SomeModel];

export const DB = new Sequelize(config);