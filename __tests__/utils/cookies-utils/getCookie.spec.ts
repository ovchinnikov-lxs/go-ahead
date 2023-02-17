/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import { getCookie } from '../../../src/assets/utils/cookies-utils';

it('Наличие метода', () => {
    expect(getCookie).not.toBeUndefined();
});

describe('Проверка результатов getCookie', () => {
    it('Ожидаем undefined', () => {
        expect(getCookie('undefined_cookie')).toBeUndefined();
    });

    it('Ожидаем "cookie_result"', function() {
        const COOKIE_NAME = 'cookie_name';
        const EXPECTED_VALUE = 'cookie_result';

        document.cookie = `${COOKIE_NAME}=${EXPECTED_VALUE}`;

        expect(getCookie(COOKIE_NAME)).toEqual(EXPECTED_VALUE);
    });
});
