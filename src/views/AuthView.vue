<template>
    <div class="AuthView">
        <div :class="$style.wrapper">
            AuthView
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;

    @include hover {
        color: red;
    }
}
</style>
