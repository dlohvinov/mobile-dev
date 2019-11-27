import axios from 'axios';
import {eventBus} from '../eventBus';

const BASE_URL = 'https://jj1bw8q0yl.execute-api.eu-central-1.amazonaws.com/dev/mail';

export const getMailList = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant load mails :(');
    }
};

export const getMail = async (id) => {
    const url = BASE_URL + '/' + id;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant load mail :(');
    }
};

export const addMail = async (mail) => {
    mail.weight = +mail.weight;
    mail.post_office = 1;
    try {
        const response = await axios.post(BASE_URL, mail);
        return response.data;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant add mail :(');
    }
};