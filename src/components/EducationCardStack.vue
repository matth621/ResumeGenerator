<template>
    <div>
        <EducationCard v-for="(education, key) in this.modelValue" :key="key" :value="education" @input="(updated) => updateItem(key, updated)" @blur="this.$emit('blur')" />
        <div class="recurringBtn" @click="addItem">Add Education Experience</div>
    </div>
</template>

<script>
import EducationCard from "./EducationCard.vue";
export default {
    emits: ["update:modelValue", "blur"],
    methods: {
        addItem() {
            let existingArray = this.modelValue;
            // Filter out blank responses - we can only have one blank field
            existingArray = existingArray.filter((data) => {
                if (data.educationName.length <= 0 && data.courseName.length <= 0 && data.completionYear.length <= 0) {
                    return false;
                }
                return true;
            });
            existingArray.push({
                educationName: '',
                courseName: '',
                completionYear: '',
                keyAreas: []
            });
            this.$emit("update:modelValue", existingArray);
        },
        updateItem(key, value) {
            let existingArray = this.modelValue;
            existingArray[key] = value;
            this.$emit("update:modelValue", existingArray);
        }
    },
    props: {
        modelValue: Array
    },
    data() {
        return {
        };
    },
    components: { EducationCard }
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