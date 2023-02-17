<script setup lang="ts">
// Lib Components
import { UiCheckbox } from '@ovchinnikov-lxs/ui-kit';
import UiIcon from '~/components/ui/UiIcon/UiIcon.vue';

defineProps({
    color: {
        type: String,
        default: 'primary',
    },
});
</script>
<template>
    <UiCheckbox v-bind="$attrs" :color="color">
        <template #checkbox>
            <UiIcon
                name="check"
                size="custom"
                viewBox="0 0 12 12"
            />
        </template>

        <template #default>
            <slot name="default"></slot>
        </template>
    </UiCheckbox>
</template>

<style lang="scss">
.UiCheckbox {
    $checkbox: &;

    &__wrapper {
        display: flex;
        align-items: center;
        transition: background-color .3s ease;
    }

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: solid;
    }

    &.--medium-size {
        #{$checkbox} {
            &__wrapper {
                column-gap: mul($unit, 3);
            }

            &__button {
                width: mul($unit, 5);
                height: mul($unit, 5);
                border-radius: $unit - 1px;
                border-width: 1px;
                box-shadow: 0 $unit $unit rgba($black, .25);
                transition: all .3s ease;

                .UiIcon {
                    flex-shrink: 0;
                    width: mul($unit, 3);
                    height: mul($unit, 3);
                    opacity: 0;
                    transform: rotate(10deg) scale(.8);
                    transition: opacity .2s ease, transform .2s ease;

                    svg {
                        fill: none;
                    }
                }
            }
        }
    }

    &.--primary-color {
        #{$checkbox} {
            &__button {
                border-color: $primary-color;
                background-color: $white;
                color: $primary-color;
            }
        }

        @include hover {
            #{$checkbox} {
                &__button {
                    background-color: $secondary-lighten-color;
                }

                &__wrapper {
                    background-color: $white;
                }
            }
        }

        &:active {
            #{$checkbox} {
                &__button {
                    background-color: $primary-color;
                    color: $white;

                    .UiIcon {
                        opacity: 1;
                        transform: rotate(0) scale(1);
                    }
                }
            }
        }
    }

    &.--is-checked {
        #{$checkbox} {
            &__button {
                .UiIcon {
                    opacity: 1;
                    transform: rotate(0) scale(1);
                }
            }
        }
    }
}
</style>
