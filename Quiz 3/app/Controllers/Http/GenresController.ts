import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
  public async index({response}: HttpContextContract) {
    try {
      const  data = await Database
        .from('genres')
        .select('*')
        
      for (let i = 0; i < data.length; i++) {
        const dataMovie = await Database
          .from('movies')
          .where('genres_id', data[i].id)
          .select('movies.id', 'title', 'resume', 'release_date')
        data[i].movies = dataMovie
      }

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
      await Database
      .table('genres')
      .insert({
        name: request.input('name'),
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
        .from('genres')
        .where('id', params.id)
        .first()

        const dataMovie = await Database
          .from('movies')
          .where('genres_id', data.id)
          .select('movies.id', 'title', 'resume', 'release_date')
        data.movies = dataMovie
      
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
      await Database
        .from('genres')
        .where('id', params.id)
        .update({
          name: request.input('name'),
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
        .from('genres')
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
