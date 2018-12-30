import lify from './net/lify';

exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: event.path.split('/')
    });
    /** 
    let subPath = event.path.split('/');
    console.log(subPath)
    switch (subPath) {
        case 'lify':
            lify(event, context, callback)
            break;
        default:
            callback('404 Path Not Found!');
    }
    */
}