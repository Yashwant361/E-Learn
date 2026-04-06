const tryCatch = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (error) {
        // Log the error for debugging
        console.log('error = ' + error);

        // Pass error to Express's global error-handling middleware
        next(error);
    }
};   
export default  tryCatch 