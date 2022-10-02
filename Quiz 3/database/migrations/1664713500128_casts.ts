import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'casts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('movies_id').unsigned().references('movies.id').onDelete('CASCADE')
      table.integer('actors_id').unsigned().references('actors.id').onDelete('CASCADE')
      table.primary(['movies_id', 'actors_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
