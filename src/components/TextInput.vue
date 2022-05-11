<template>
    <div class="textInputSection">
        <label>{{name}}</label>
        <input type="text" :value="modelValue" @input="updateValue" @blur="this.$emit('blur')" />
    </div>
</template>

<script>
export default {
    props: {
        name,
        modelValue: String
    },
    emits: ['update:modelValue', 'blur'],
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/_variables.scss';
    .textInputSection {
        margin: 2px;
        padding: 0 15px;
        display: flex;
        label {
            padding: 3px 5px;
            flex: 40% 0 0;
            text-align: right;
        }
        input {
            flex: 60% 0 0;
            appearance: none;
            font-size: 1em;
            box-sizing: border-box;
            border: 1px solid grey;
            border-radius: 4px;
            background: transparent;
            font-family: inherit;
            &:focus {
                outline: none;
                border: 1px solid $lighter;
                box-shadow: 0px 0px 3px $lighter;
            }
        }
    }
</style>