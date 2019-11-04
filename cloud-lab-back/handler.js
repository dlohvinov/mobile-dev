'use strict';
const db = require('./dbConnector');
const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    };

module.exports.getAddressList = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    db.getAll('post_office')
        .then(res => {
            callback(null, {
                statusCode: 200,
                headers,
                body: JSON.stringify(res)
            })
        })
        .catch(e => {
            console.log(e);
            callback(null, {
                statusCode: e.statusCode || 500,
                body: 'Error: Could not find address list: ' + e
            })
        })
};

module.exports.getAddress = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    db.getById('post_office', event.pathParameters.id)
        .then(res => {
            callback(null,{
                statusCode: 200,
                headers,
                body: JSON.stringify(res)
            })
        })
        .catch(e => {
            callback(null,{
                statusCode: e.statusCode || 500,
                body: "Could not find address: " + e
            })
        })
};


module.exports.addAddress = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const data = JSON.parse(event.body);
    db.insert('post_office', data)
        .then(res => {
            callback(null,{
                statusCode: 200,
                headers,
                body: "Address Created!" + res
            })
        })
        .catch(e => {
            callback(null,{
                statusCode: e.statusCode || 500,
                body: "Could not create Address " + e
            })
        })
};

module.exports.getMailList = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    db.getAll('mail')
        .then(res => {
            callback(null, {
                statusCode: 200,
                headers,
                body: JSON.stringify(res)
            })
        })
        .catch(e => {
            console.log(e);
            callback(null, {
                statusCode: e.statusCode || 500,
                body: 'Error: Could not find mail list: ' + e
            })
        })
};

module.exports.getMail = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    db.getById('mail', event.pathParameters.id)
        .then(res => {
            callback(null,{
                statusCode: 200,
                headers,
                body: JSON.stringify(res)
            })
        })
        .catch(e => {
            callback(null,{
                statusCode: e.statusCode || 500,
                body: "Could not find mail: " + e
            })
        })
};

module.exports.addMail = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const data = JSON.parse(event.body);
    db.insert('mail', data)
        .then(res => {
            callback(null,{
                statusCode: 200,
                headers,
                body: "Mail Created!" + res
            })
        })
        .catch(e => {
            callback(null,{
                statusCode: e.statusCode || 500,
                body: "Could not create Mail " + e
            })
        })
};