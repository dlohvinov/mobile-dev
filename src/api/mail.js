"use strict";
import Vue from 'vue';
import axios from "axios";
import {eventBus} from "../eventBus";

const BASE_URL = 'http://localhost:3000';

export async function getMailList() {
    const url = BASE_URL + '/mail';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        eventBus.$emit('snack', 'Sorry, cant load mails :(');

    }
}