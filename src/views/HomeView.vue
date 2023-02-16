<script setup lang="ts">
// Common
import { useRouter } from 'vue-router';

// UiComponents
import UiButton from '~/components/ui/UiButton/UiButton.vue';
import { setCookie } from '~/assets/utils/cookies-utils';

const $router = useRouter();

function onExit() {
    setCookie('auth_token', '', {
        'max-age': -1,
    });
    $router.push('/auth');
}
</script>

<template>
    <div class="HomeView">
        <div :class="$style.wrapper">
            <div :class="$style.welcome">
                Welcome
            </div>

            <UiButton @click="onExit">
                Exit
            </UiButton>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    font-size: 100px;
}
</style>
