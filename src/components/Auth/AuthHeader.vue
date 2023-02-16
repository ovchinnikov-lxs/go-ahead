<template>
    <header class="AuthHeader">
        <div :class="$style.wrapper">
            <div :class="$style.ghost">

            </div>

            <ul :class="$style.nav">
                <li v-for="i in 3" :key="i">
                    <section :class="[$style.ghost, $style['--is-secondary']]"></section>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    column-gap: mul($unit, 5);
    padding: mul($unit, 4) mul($unit, 6);
    border-radius: mul($unit, 8);
    background-color: $white;
    opacity: .96;
    box-shadow: mul($unit, 3.5) mul($unit, 3) mul($unit, 8) rgba($black, .14);
}

.nav {
    @include reset-list;

    display: flex;
    align-items: center;
    column-gap: mul($unit, 5);
    margin-left: auto;
}

.ghost {
    width: mul($unit, 32);
    height: mul($unit, 7);
    border-radius: mul($unit, 3.5);
    background-color: #c1d9cd;

    &.--is-secondary {
        width: mul($unit, 20);
        background-color: #dae8e1;
    }
}
</style>
