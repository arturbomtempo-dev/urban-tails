class AppError extends Error {
    constructor(statusCode, message, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors.map((err) => err.msg || err);
    }
}

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno no servidor';
    const errors = err.errors || [];

    res.status(statusCode).json({
        status: statusCode,
        message,
        errors,
    });
};

module.exports = {
    errorHandler,
    AppError,
};
