<script setup lang="ts">
function onSubmit() {
    console.log('onSubmit');
}
</script>

<template>
    <div class="AuthForm">
        <div :class="$style.wrapper">

            <h2 :class="$style.title">
                Submit your details
            </h2>

            <form @submit.prevent="onSubmit" :class="$style.form">

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
</style>
