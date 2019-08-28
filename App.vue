<template>
    <div>
        <p>Test as a button:</p>
        <p>
            <btn @click="test">
                Click me!
            </btn>
        </p>

        <p>Test as a link:</p>
        <p>
            <btn href="https://www.google.com/" target="_blank">
                Google something
            </btn>
        </p>

        <p>Disabled button:</p>
        <p>
            <btn :disabled="true" @click="test">
                Don't click me
            </btn>
        </p>

        <p>Dynamic toggle (enabled/disabled): <a href="#" @click.prevent="toggle">Toggle</a></p>
        <p>
            <btn :disabled="disabledToggle" @click="test">
                {{ disabledToggle ? "Don't click me" : "Click me" }}
            </btn>
        </p>

        <p>Icons:</p>
        <p>
            active <icon icon="grid"></icon>;
            disabled <icon icon="rows" :disabled="true"></icon>
        </p>

        <p>Hoverable icons:</p>
        <p>
            <span class="hoverable">grid <icon icon="grid"></icon></span>
            <span class="hoverable">rows <icon icon="rows"></icon></span>
        </p>

        <p>Disabled icons:</p>
        <p>
            <span class="hoverable disabled">grid <icon icon="grid"></icon></span>
        </p>
        <p>
            <icon icon="rows" :disabled="true"></icon>
        </p>
    </div>
</template>

<script>
    export default {

        data: () => ({
            disabledToggle: false,
        }),

        methods: {

            test() {
                alert('Working!')
            },

            toggle() {
                this.disabledToggle = !this.disabledToggle
            },

        },

    }
</script>
