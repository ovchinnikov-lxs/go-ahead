<script setup lang="ts">
// Components
import AuthHeader from '~/components/Auth/AuthHeader.vue';
import AuthForm from '~/components/Auth/AuthForm.vue';
import AuthContent from '~/components/Auth/AuthContent.vue';

</script>

<template>
    <div class="AuthView">
        <div :class="$style.wrapper">

            <main :class="$style.container">
                <AuthHeader :class="$style.header"/>

                <section :class="$style.section">
                    <AuthForm/>

                    <AuthContent :class="$style.content"/>
                </section>

            </main>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
    padding: mul($unit, 25) 0;
}

.container {
    display: flex;
    flex-direction: column;
    width: mul($unit, 236);
    row-gap: mul($unit, 22);
    margin: 0 auto;
}

.header {
    width: 100%;
}

.section {
    display: flex;
    align-items: center;
    width: 100%;
    column-gap: mul($unit, 50);
    padding: 0 mul($unit, 6);
}

.content {
    width: mul($unit, 86);
    margin-left: auto;
}
</style>
