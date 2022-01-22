import {useForm} from 'react-hook-form'

import './Form.css'

const Form = ({setPhotoUrl}) => {

    const getPicture = (data) => {
        setPhotoUrl(data)
    }

    const {
        register, handleSubmit
    } = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(getPicture)} className={'Form'}>
                <h2>Get photos by keywords</h2>
                <input type="text" {...register('keywords')}/>
                <button>Get</button>
            </form>
        </div>
    );
};

export {Form};