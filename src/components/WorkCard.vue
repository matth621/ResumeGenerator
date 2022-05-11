<template>
    <div>
        <TextInput name="Employer Name" v-model="companyName" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="Location" v-model="location" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="JobTitle" v-model="jobTitle" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="Start Date" v-model="startDate" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <TextInput name="End Date" v-model="endDate" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
        <RecurringTextVue name="Responsibilities" v-model="responsibilities" @input="this.$emit('input', getItem())" @blur="this.$emit('blur')" />
    </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import RecurringTextVue from "./RecurringTextVue.vue";
export default {
    emits: ["input", "blur"],
    beforeMount() {
        if (this.value) {
            this.companyName = this.value.companyName;
            this.location = this.value.location;
            this.jobTitle = this.value.jobTitle;
            this.startDate = this.value.startDate;
            this.endDate = this.value.endDate;
            this.responsibilities = this.value.responsibilities;
        }
    },
    oninput() {
    },
    methods: {
        getItem() {
            return {
            companyName: this.companyName,
            location: this.location,
            jobTitle: this.jobTitle,
            startDate: this.startDate,
            endDate: this.endDate,
            responsibilities: this.responsibilities
            }
        }
    },
    props: {
        value: Object
    },
    data() {
        return {
            companyName: '',
            location: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            responsibilities: []
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