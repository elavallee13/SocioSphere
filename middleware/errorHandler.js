// 404 handler for any request that doesn't match a defined route
function notFoundHandler(req, res, next) {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
}

// General error handler middleware
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500; // default to 500 if no specific status code is provided
    const message = err.message || 'Internal Server Error';

    // Log the error details (optional)
    console.error(err);

    // Send response to the client
    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: message
    });
}

// Exporting both the error handlers
module.exports = {
    notFoundHandler,
    errorHandler
};
