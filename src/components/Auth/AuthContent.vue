<script setup lang="ts">
// Common
import { computed, useCssModule } from 'vue';
const $style = useCssModule();

const ROW_COUNT = 5;

const rowClassList = computed(() => (index: number): object => ({
    [$style['--is-header']]: index === 1,
    [$style['--is-footer']]: index === ROW_COUNT,
}));
</script>

<template>
    <div class="AuthContent">
        <div :class="$style.wrapper">
            <section v-for="i in ROW_COUNT"
                     :key="i"
                     :class="[$style.row, rowClassList(i)]"
            >
            </section>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: mul($unit, 6);
}

.row {
    width: 100%;
    height: mul($unit, 7);
    border-radius: mul($unit, 3.5);
    background-color: #dae8e1;

    &.--is-header,
    &.--is-footer {
        width: mul($unit, 40);
    }

    &.--is-footer {
        margin-top: mul($unit, 7);
    }
}
</style>
