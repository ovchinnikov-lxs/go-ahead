const fakePromise = (timeout: number, errorResponse?: object): Promise<object | void> => new Promise((resolve, reject) => {
    const potential = Number(Math.random().toFixed(2)) * 100;

    const rejectRes = errorResponse ||
        {
            response: {
                data: 'FAKE_PROMISE_ERROR',
            },
        };

    setTimeout(() => {
        !(potential % 2)
            ? resolve()
            : reject(rejectRes);
    }, timeout);
});

export {
    fakePromise,
};
