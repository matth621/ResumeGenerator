<template>
    <div class="recurringInput">
        <h3>{{name}}</h3>
        <div v-for="(item, key) in this.modelValue" :key="key">
            <input :value="item.name" @input="(event) => updateItem(key, event.target.value)" @blur="this.$emit('blur')" />
            <input type="range" min="1" max="5" :value="item.level" class="slider" @input="(event) => updateItemLevel(key, event.target.value)" />
        </div>
        <div class="recurringBtn" @click="addItem">Add Another</div>
    </div>
</template>

<script>
export default {
    props: {
        name,
        modelValue: Array
    },
    emits: ["update:modelValue", "blur"],
    methods: {
        addItem() {
            let existingArray = this.modelValue;
            // Filter out blank responses - we can only have one blank field
            existingArray = existingArray.filter((data) => {
                if (data.name.length <= 0) {
                    return false;
                }
                return true;
            });
            existingArray.push({name: '', level: 3});
            this.$emit("update:modelValue", existingArray);
        },
        updateItem(key, value) {
            let existingArray = this.modelValue;
            existingArray[key] = {name: value, level: existingArray[key].level};
            this.$emit("update:modelValue", existingArray);
        },
        updateItemLevel(key, value) {
            let existingArray = this.modelValue;
            existingArray[key] = {name: existingArray[key].name, level: value};
            this.$emit("update:modelValue", existingArray);
            this.$emit("blur");
        }
    },
    data() {
        return {

        };
    },
    components: {  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/_variables';
    .recurringInput {
        input {
            display: block;
            width: calc(100% - 10px);
            margin: 2px 5px;
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
        .recurringBtn {
            background-color: $lighter;
            padding: 12px;
            display: inline-block;
            border-radius: 100px;
            color: white;
            font-weight: 900;
            cursor: pointer;
        }
    }
</style>