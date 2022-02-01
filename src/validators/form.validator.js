import Joi from "joi";

export const formValidator = Joi.object({
    todo: Joi.string().required().messages({
        'string.empty': '"Поле не може бути пустим!!!"'
    })
})