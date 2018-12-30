let lify = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Netlify: " + JSON.stringify(event)
    });
}

export default lify;