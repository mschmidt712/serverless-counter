exports.handler = (event, context, callback) => {
    const currentValue = parseInt(event.currentValue);

    if (currentValue <= 0) {
        callback('Error: Action not possible. Value must be between 0 and 99.');
    }

    callback(null, currentValue - 1);
};
