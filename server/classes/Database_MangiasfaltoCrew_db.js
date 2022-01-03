// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_MangiasfaltoCrew_db";
import UserModel from "../models/MangiasfaltoCrew_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.MangiasfaltoCrew_db.host +
        ":" +
        properties.MangiasfaltoCrew_db.port +
        "//" +
        properties.MangiasfaltoCrew_db.user +
        "@" +
        properties.MangiasfaltoCrew_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.MangiasfaltoCrew_db.name,
      properties.MangiasfaltoCrew_db.user,
      properties.MangiasfaltoCrew_db.password,
      {
        host: properties.MangiasfaltoCrew_db.host,
        dialect: properties.MangiasfaltoCrew_db.dialect,
        port: properties.MangiasfaltoCrew_db.port,
        logging: false
      }
    );
    this.dbConnection_MangiasfaltoCrew_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_MangiasfaltoCrew_db;
  }
}

export default new Database();
