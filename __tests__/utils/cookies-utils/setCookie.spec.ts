/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import { getCookie, setCookie } from '../../../src/assets/utils/cookies-utils';

it('Наличие метода', () => {
    expect(setCookie).not.toBeUndefined();
});

describe('Проверка результатов getCookie', () => {
    it('Ожидаем установленное значение "cookie_result"', function() {
        const COOKIE_NAME = 'cookie_name';
        const EXPECTED_VALUE = 'cookie_result';

        setCookie(COOKIE_NAME, EXPECTED_VALUE);

        expect(getCookie(COOKIE_NAME)).toEqual(EXPECTED_VALUE);
    });
});
