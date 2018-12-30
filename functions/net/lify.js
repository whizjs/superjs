let lify = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Netlify: " + event.path
    });
}

export default lify;