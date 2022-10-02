import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
  public async index({response}: HttpContextContract) {
    try {
      const data = await Database
        .from('movies')
        .leftJoin('genres', 'genres.id', '=', 'movies.genres_id')
        .select('movies.id', 'title', 'resume', 'release_date', 'genres.name AS genre')

      response.ok({
        message: "Succes mengambil data",
        data: data
      })
    } catch (error) {
      response.badRequest({
        message: error
      })
    }
  }

  public async store({response, request}: HttpContextContract) {
    try {
      await Database
      .table('movies')
      .insert({
        title: request.input('title'),
        resume: request.input('resume'),
        release_date:  request.input('release_date'),
        genres_id:  request.input('genre_id')
      })
      response.created({
        message: "Success simpan data"
      })
    } catch (error) {
      response.badRequest({
        message: error
      })
    }
  }

  public async show({response, params}: HttpContextContract) {
    try {
      const data = await Database
        .from('movies')
        .leftJoin('genres', 'genres.id', '=', 'movies.genres_id')
        .where('movies.id', params.id)
        .select('movies.id', 'title', 'resume', 'release_date', 'genres.name AS genre')
        .first()
      
        response.ok({
          message: "Success mengambil data",
          data: data
        })
    } catch (error) {
      response.badRequest({
        message: error
      })
    }
  }

  public async update({response, request, params}: HttpContextContract) {
    try {
      await Database
        .from('movies')
        .where('id', params.id)
        .update({
          title: request.input('title'),
          resume: request.input('resume'),
          release_date:  request.input('release_date'),
          genres_id:  request.input('genre_id')
        })
      response.ok({
        message: "Success update data"
      })
    } catch (error) {
      response.badRequest({
        message: error
      })
    }
  }

  public async destroy({response, params}: HttpContextContract) {
    try {
      await Database
        .from('movies')
        .where('id', params.id)
        .delete()
      response.ok({
        message: "Success delete data"
      })
    } catch (error) {
      response.badRequest({
        message: error
      })
    }
  }
}
