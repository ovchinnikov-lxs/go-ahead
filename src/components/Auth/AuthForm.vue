<script setup lang="ts">
// Common
import { computed, reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

// Utils
import { setCookie } from '~/assets/utils/cookies-utils';
import { fakePromise } from '~/assets/utils/form-utils';

// UiComponents
import UiFormCell from '~/components/ui/UiFormCell/UiFormCell.vue';
import UiInput from '~/components/ui/UiInput/UiInput.vue';
import UiCheckbox from '~/components/ui/UiCheckbox/UiCheckbox.vue';
import UiButton from '~/components/ui/UiButton/UiButton.vue';

const $router = useRouter();

interface IAuthForm {
    name: string;
    email: string;
    subscribe: boolean;
}

const actualValue = reactive<IAuthForm>({
    name: '',
    email: '',
    subscribe: false,
});
const serverErrors = ref<{
    [key: string]: string
}>({});

const validations = {
    name: { required },
    email: { required, email },
};

const $v = useVuelidate(validations, actualValue);

async function onSubmit() {
    if ($v.value.$invalid) {
        return false;
    }

    try {
        serverErrors.value = {};

        await fakePromise(300, {
            response: {
                data: {
                    email: 'A user with such an email already exists',
                },
            },
        });
        setCookie('auth_token', Math.random());
        $router.push('/');
    } catch (e: any) {
        if (e?.response) {
            serverErrors.value = e.response.data;
        }
        console.error('AUTH_FORM:ON_SUBMIT:', e);
    }
}

const getError = computed(() => (key: string) => {
    const value = $v.value[key];

    if (serverErrors.value[key]) {
        return serverErrors.value[key];
    }

    if (!value || !value.$errors?.length) {
        return false;
    }

    return value.$errors[0].$message;
});
</script>

<template>
    <div class="AuthForm">
        <div :class="$style.wrapper">

            <h2 :class="$style.title">
                Submit your details
            </h2>

            <form @submit.prevent="onSubmit" :class="$style.form">

                <div :class="$style.fields">

                    <UiFormCell name="name" :error="getError('name')">
                        <template #label>Name</template>
                        <template #default>
                            <UiInput
                                id="name"
                                required
                                :error="getError('name')"
                                v-model="$v.name.$model"
                            />
                        </template>
                    </UiFormCell>

                    <UiFormCell name="email" :error="getError('email')">
                        <template #label>Email</template>
                        <template #default>
                            <UiInput
                                id="email"
                                required
                                :error="getError('email')"
                                v-model="$v.email.$model"
                            />
                        </template>
                    </UiFormCell>

                </div>

                <UiCheckbox v-model="actualValue.subscribe" :class="$style.checkbox">
                    I want to reveive updates via email.
                </UiCheckbox>

                <UiButton :disabled="$v.$invalid" :class="$style.button">
                    Start the Course
                </UiButton>
            </form>

        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: mul($unit, 14);
}

.title {
    margin: 0;
    font-size: mul($unit, 8.75);
    line-height: 117%;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.fields {
    display: flex;
    flex-direction: column;
    width: mul($unit, 87.5);
    row-gap: mul($unit, 7.5);
}

.checkbox {
    margin-top: mul($unit, 18);
}

.button {
    margin-top: mul($unit, 14);
}
</style>
