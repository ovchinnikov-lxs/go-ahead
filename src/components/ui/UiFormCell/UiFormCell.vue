<script setup lang="ts">
// Lib Components
import { UiFormCell } from '@ovchinnikov-lxs/ui-kit';

// UiComponents
import UiIcon from '~/components/ui/UiIcon/UiIcon.vue';

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
    <UiFormCell
        :size="size"
        :color="color"
        v-bind="$attrs"
    >
        <template #label>
            <slot name="label"></slot>
        </template>

        <template #default>
            <slot></slot>
        </template>

        <template #error="props">
            <UiIcon name="error"/>

            {{ props.error }}
        </template>
    </UiFormCell>
</template>

<style lang="scss">
.UiFormCell {
    $cell: &;

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__label {
        font-weight: bold;
    }

    &__error {
        display: flex;
        align-items: center;
        color: $error;
    }

    &.--large-size {
        #{$cell} {
            &__wrapper {
                row-gap: mul($unit, 3);
            }

            &__label {
                font-size: mul($unit, 5);
                line-height: 115%;
            }

            &__error {
                top: calc(100% + #{mul($unit, 3)});
                column-gap: $unit;
                font-size: mul($unit, 3.75);
                line-height: 120%;
            }
        }
    }
}
</style>
