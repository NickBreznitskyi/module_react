export const reducer = (state, action) => {
    try {
        if (action.type === 'deleteCat') {
            return {...state, cats: state.cats.filter((x, i) => i !== action.index)}
        }
        if (action.type === 'deleteDog') {
            return {...state, dogs: state.dogs.filter((x, i) => i !== action.index)}
        }
        if (action.type === 'cat') {
            if (!action.formState.cat) {
                throw new Error('"Поле не може бути пустим"')
            }
            return {...state, cats: [...state.cats, action.formState.cat]}
        }
        if (action.type === 'dog') {
            if (!action.formState.dog) {
                throw new Error('"Поле не може бути пустим"')
            }
            return {...state, dogs: [...state.dogs, action.formState.dog]}
        }
        throw new Error('MyError');
    } catch (e) {
        console.log(e);
    }
}

