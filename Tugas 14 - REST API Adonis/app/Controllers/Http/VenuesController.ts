import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import VenueValidator from 'App/Validators/VenueValidator'

export default class VenuesController {
  public async index({response}: HttpContextContract) {
    try {
      const data = await Database
        .from('venues')
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

  public async store({response, request}: HttpContextContract) {
    try {
      await request.validate(VenueValidator)

      await Database
      .table('venues')
      .insert({
        name: request.input('name'),
        address: request.input('address'),
        phone:  request.input('phone')
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
        .from('venues')
        .where('id', params.id)
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
      await request.validate(VenueValidator)
      await Database
        .from('venues')
        .where('id', params.id)
        .update({
          name: request.input('name'),
          address: request.input('address'),
          phone:  request.input('phone')
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
        .from('venues')
        .where('id', params.id)
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
