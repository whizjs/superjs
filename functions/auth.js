import google from './auth/google';

exports.handler = function (event, context, callback) {
    let subPath = event.path.split('/')[2];
    switch (subPath) {
        case 'google':
            google(event, context, callback)
            break;
        default:
            callback('404 Path Not Found!');
    }
}