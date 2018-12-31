import lify from './net/lify';

exports.handler = function (event, context, callback) {
    let subPath = event.path.split('/').pop(); // retrieve last element
    switch (subPath) {
        case 'lify':
            lify(event, context, callback)
            break;
        default:
            callback('404 Path Not Found!');
    }
}