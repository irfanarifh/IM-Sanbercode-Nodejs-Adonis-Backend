import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable
      table.text('bio').notNullable
      table.dateTime('date_of_birth').notNullable
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
