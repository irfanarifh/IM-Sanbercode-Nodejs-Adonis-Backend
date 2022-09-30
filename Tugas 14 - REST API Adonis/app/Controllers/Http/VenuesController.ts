import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VenueValidator from 'App/Validators/VenueValidator'

export default class VenuesController {

    public async store({request, response} : HttpContextContract) {
        try {
            
            const venues = await request.validate(VenueValidator)

            response.ok({
                message: venues
            })
        } catch (error) {
            response.badRequest(error.messages)
        }
    }

}
