import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('[a-zA-ZА-Яа-яҐґёЁіІїЇъЪ]{1,20}$')).required().messages({
        'sting.empty': '"model" не можу бути пустим',
        'string.pattern.base': 'Символи тільки від А-Я та від A-Z мінімальна довжина 1 символ - максимальна довжина 20 символів'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік повинен бути від 1900 до теперішнього',
        'number.min': 'Рік не може бути меншим за 1990',
        'number.max': 'Рік не може бути більшим за теперішній'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Ціна повинна бути від 0 до 1 000 000',
        'number.min': 'Ціна не може бити меншою за 0',
        'number.max': 'Ціна не можу бути більшою за 1 000 000'
    })

})