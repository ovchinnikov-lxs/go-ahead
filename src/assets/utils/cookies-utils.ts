const getCookie = (name: string) => {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name: string, value: any, options?: object) => {
    const initialOptions: {
        [key: string]: any
    } = {
        path: '/',
        ...options,
    };

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (const optionKey in initialOptions) {
        updatedCookie += '; ' + optionKey;
        const optionValue = initialOptions[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

export {
    getCookie,
    setCookie,
};
