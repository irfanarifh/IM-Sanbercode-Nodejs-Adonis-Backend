import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import FieldValidator from 'App/Validators/FieldValidator'

export default class FieldsController {
  public async index({response, params}: HttpContextContract) {
    try {
      const data = await Database
        .from('fields')
        .where('venue_id', params.venue_id)
        .select('*')

      response.ok({
        message: "Succes mengambil data",
        data: data
      })
    } catch (error) {
      response.badRequest({
        message: error.messages
      })
    }
  }

  public async store({response, request, params}: HttpContextContract) {
    try {
      await request.validate(FieldValidator)

      await Database
      .table('fields')
      .insert({
        name: request.input('name'),
        type: request.input('type'),
        venue_id: params.venue_id
      })
      response.created({
        message: "Success simpan data"
      })
    } catch (error) {
      response.badRequest({
        message: error.messages
      })
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const data = await Database
        .from('fields')
        .where('id', params.id)
        .where('venue_id', params.venue_id)
        .first()
      
        response.ok({
          message: "Success mengambil data",
          data: data
        })
    } catch (error) {
      response.badRequest({
        message: error.messages
      })
    }
  }

  public async update({response, request, params}: HttpContextContract) {
    try {
      await request.validate(FieldValidator)
      await Database
        .from('fields')
        .where('id', params.id)
        .update({
          name: request.input('name'),
          type: request.input('type'),
          venue_id:  params.venue_id
        })
      response.ok({
        message: "Success update data"
      })
    } catch (error) {
      response.badRequest({
        message: error.messages
      })
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
      await Database
        .from('fields')
        .where('id', params.id)
        .where('venue_id', params.venue_id)
        .delete()
      response.ok({
        message: "Success delete data"
      })
    } catch (error) {
      response.badRequest({
        message: error.messages
      })
    }
  }
}
