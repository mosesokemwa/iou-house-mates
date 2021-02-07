const Model = require('./_model');
const knex = require('../db/db');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {};
  }

  static get modifiers() {
    return {
      selectUser: builder => {
        builder.select('id');
      }
    };
  }
}

User.knex(knex);
module.exports = User;