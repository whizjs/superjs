let lify = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "Netlify: You made it!"
    });
}

export default lify;