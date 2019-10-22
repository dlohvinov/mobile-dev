import axios from 'axios';
import {eventBus} from '../eventBus';

const BASE_URL = 'https://jj1bw8q0yl.execute-api.eu-central-1.amazonaws.com/dev';

export const getMailList = async () => {
    const url = BASE_URL + '/mail';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant load mails :(');
    }
}