const Model = require('./_model');
const knex = require('../db/db');

class Ledger extends Model {
  static get tableName() {
    return 'ledgers';
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

Ledger.knex(knex);
module.exports = Ledger;