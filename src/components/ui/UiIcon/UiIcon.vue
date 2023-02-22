<script setup lang="ts">
// Common
import { computed } from 'vue';

// Lib Components
import { UiIcon } from '@ovchinnikov-lxs-frontend/ui-kit';

// Utils
import { iconDict } from '~/components/ui/UiIcon/iconList';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    viewBox: {
        type: String,
        default: '0 0 20 20',
    },
});

const actualIcon = computed(() => iconDict[props.name]);
</script>
<template>
    <UiIcon v-bind="$attrs" :view-box="viewBox">
        <template #sprite-component="props">
            <svg :viewBox="props.viewBox" xmlns="http://www.w3.org/2000/svg">
                <g v-html="actualIcon"/>
            </svg>
        </template>
    </UiIcon>
</template>

<style lang="scss">
.UiIcon {
    &.--small-size {
        width: mul($unit, 3);
        height: mul($unit, 3);
    }

    &.--medium-size {
        width: mul($unit, 5);
        height: mul($unit, 5);
    }
}
</style>
