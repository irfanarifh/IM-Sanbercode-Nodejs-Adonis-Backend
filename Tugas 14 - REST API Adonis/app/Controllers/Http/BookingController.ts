import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookingValidator from 'App/Validators/BookingValidator'

export default class BookingController {

    public async store({request, response} : HttpContextContract) {
        try {
            
            const booking = await request.validate(BookingValidator)

            response.ok({
                message: booking
            })
        } catch (error) {
            response.badRequest(error.messages)
        }
    }

}
