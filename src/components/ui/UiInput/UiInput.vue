<script setup lang="ts">
// Lib Components
import { UiInput } from '@ovchinnikov-lxs/ui-kit';

defineProps({
    color: {
        type: String,
        default: 'primary',
    },

    size: {
        type: String,
        default: 'large',
    },
});
</script>

<template>
    <UiInput
        v-bind="$attrs"
        :color="color"
        :size="size"
    />
</template>

<style lang="scss">
.UiInput {
    position: relative;
    border: none;
    transition: outline-width .2s ease;

    &.--large-size {
        padding: mul($unit, 4);
        border-radius: $unit + 1px;
        outline: 1px;

        &:focus {
            outline-width: $unit - 1px;
        }
    }

    &.--primary-color {
        background-color: $white;
        outline-color: $primary-color;
        outline-style: solid;
        box-shadow: 0 $unit $unit rgba($black, .25);
    }

    &.--is-error {
        outline-color: $error;
    }
}
</style>
