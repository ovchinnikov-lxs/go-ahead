<script setup lang="ts">
// Common Components
import { RouterView } from 'vue-router';
</script>

<template>
    <div :class="$style.App">
        <RouterView :class="$style.view"/>
    </div>
</template>


<style lang="scss" module>
.App {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: $secondary-color;
}

.view {
    flex-grow: 1;
}
</style>
