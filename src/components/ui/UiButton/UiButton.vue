<script setup lang="ts">
// Lib Components
import { UiButton } from '@ovchinnikov-lxs/ui-kit';

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
    <UiButton
        v-bind="$attrs"
        :color="color"
        :size="size"
    >
        <slot></slot>
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    border-style: solid;
    font-weight: bold;

    &.--large-size {
        &.--is-solid {
            padding: mul($unit, 4) mul($unit, 8);
            border-radius: $unit + 1px; // :-)
            border-width: 1px;
            font-size: mul($unit, 4.5);
            line-height: 116%;
        }
    }

    &.--primary-color {
        border-color: $primary-color;
        background-color: $primary-color;
        color: $secondary-lighten-color;
        box-shadow: 0 $unit $unit rgba($black, .25);

        @include hover {
            background-color: $primary-hover-color;
            color: $white;
        }

        &:active {
            background-color: $primary-pressed-color;
            color: $secondary-lighten-color;
        }
    }
}
</style>
