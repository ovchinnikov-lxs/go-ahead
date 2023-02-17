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
    border-style: solid;
    transition: none;

    &.--large-size {
        padding: mul($unit, 4);
        border-radius: $unit + 1px;
        border-width: 1px;

        &:focus {
            padding: mul($unit, 3.5);
            border-width: $unit - 1px;
        }
    }

    &.--primary-color {
        border-color: $primary-color;
        background-color: $white;
        box-shadow: 0 $unit $unit rgba($black, .25);
    }

    &.--is-error {
        outline-color: $error;
    }
}
</style>
