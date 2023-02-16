<script setup lang="ts">
// Lib Components
import { UiFormCell } from '@ovchinnikov-lxs/ui-kit';

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
            <svg width="20"
                 height="20"
                 viewBox="0 0 20 20"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.99996 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.714C15.9642 13.4638 16.6666 11.7681 16.6666 10C16.6666 8.23189 15.9642 6.5362 14.714 5.28596C13.4638 4.03571 11.7681 3.33333 9.99996 3.33333C8.23185 3.33333 6.53616 4.03571 5.28591 5.28596C4.03567 6.5362 3.33329 8.23189 3.33329 10C3.33329 11.7681 4.03567 13.4638 5.28591 14.714C6.53616 15.9643 8.23185 16.6667 9.99996 16.6667V16.6667ZM9.99996 18.3333C5.39746 18.3333 1.66663 14.6025 1.66663 10C1.66663 5.3975 5.39746 1.66667 9.99996 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 9.99996 18.3333ZM9.16663 13.3333H10.8333V15H9.16663V13.3333ZM9.16663 5H10.8333V11.6667H9.16663V5Z" fill="currentColor"/>
                <path d="M9.99996 16.6667C11.7681 16.6667 13.4638 15.9643 14.714 14.714C15.9642 13.4638 16.6666 11.7681 16.6666 10C16.6666 8.23189 15.9642 6.5362 14.714 5.28596C13.4638 4.03571 11.7681 3.33333 9.99996 3.33333C8.23185 3.33333 6.53616 4.03571 5.28591 5.28596C4.03567 6.5362 3.33329 8.23189 3.33329 10C3.33329 11.7681 4.03567 13.4638 5.28591 14.714C6.53616 15.9643 8.23185 16.6667 9.99996 16.6667V16.6667ZM9.99996 18.3333C5.39746 18.3333 1.66663 14.6025 1.66663 10C1.66663 5.3975 5.39746 1.66667 9.99996 1.66667C14.6025 1.66667 18.3333 5.3975 18.3333 10C18.3333 14.6025 14.6025 18.3333 9.99996 18.3333ZM9.16663 13.3333H10.8333V15H9.16663V13.3333ZM9.16663 5H10.8333V11.6667H9.16663V5Z"
                      fill="currentColor"
                      fill-opacity="0.2"
                />
            </svg>


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
