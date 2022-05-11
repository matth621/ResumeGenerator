<template>
    <div>
        <TextInput name="Educational Institution" v-model="educationName" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="Course Name" v-model="courseName" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="Year of Completion" v-model="completionYear" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <RecurringTextVue name="Key Areas of Study" v-model="keyAreas" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
    </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import RecurringTextVue from "./RecurringTextVue.vue";
export default {
    beforeMount() {
        if (this.value) {
            this.educationName = this.value.educationName;
            this.courseName = this.value.courseName;
            this.completionYear = this.value.completionYear;
            this.keyAreas = this.value.keyAreas;
        }
    },
    oninput() {
    },
    methods: {
        getItem() {
            return {
            educationName: this.educationName,
            courseName: this.courseName,
            completionYear: this.completionYear,
            keyAreas: this.keyAreas
            }
        }
    },
    emits: ["update:modelValue", "input", "blur"],
    props: {
        value: Object
    },
    data() {
        return {
            educationName: '',
            courseName: '',
            completionYear: '',
            keyAreas: []
        };
    },
    components: { TextInput, RecurringTextVue }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/variables';
    .recurringBtn {
        background-color: $lighter;
        padding: 12px;
        display: inline-block;
        border-radius: 100px;
        color: white;
        font-weight: 900;
        cursor: pointer;
    }
</style>