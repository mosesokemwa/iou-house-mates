const Model = require('./_model');
const knex = require('../db/db');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      userLedger: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/ledgers',
        join: {
          from: 'users.id',
          through: {
            from: 'ledger_user.user_id',
            to:'ledger_user.user_id',
          },
          to: 'ledgers.id'
        }
      }
    };
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