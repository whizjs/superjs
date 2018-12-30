import google from './auth/google';

exports.handler = function (event, context, callback) {
    let pathArray = event.path.split('/');
    let subPath = pathArray[4] || pathArray[3];
    switch (subPath) {
        case 'google':
            google(event, context, callback)
            break;
        default:
            callback('404 Path Not Found!');
    }
}