import { expect } from '@jest/globals';
import { fakePromise } from '../../../src/assets/utils/form-utils';

it('Наличие метода', () => {
    expect(fakePromise).not.toBeUndefined();
});

describe('Проверка результатов fakePromise', () => {
    it('Ожидаем ответа', async () => {
        const ERROR_RESPONSE = {
            response: {
                data: 'FAKE_PROMISE_ERROR',
            },
        };

        try {
            await fakePromise(300);
        } catch (e) {
            expect(e).toEqual(ERROR_RESPONSE);
        }
    });
});
