<template>
    <div>
        <WorkCard v-for="(work, key) in this.modelValue" :key="key" :value="work" @input="(updated) => updateItem(key, updated)" @blur="this.$emit('blur')" />
        <div class="recurringBtn" @click="addItem">Add Work History</div>
    </div>
</template>

<script>
import WorkCard from "./WorkCard.vue";
export default {
    emits: ["update:modelValue", "blur"],
    methods: {
        addItem() {
            let existingArray = this.modelValue;
            // Filter out blank responses - we can only have one blank field
            existingArray = existingArray.filter((data) => {
                if (data.companyName.length <= 0 && data.location.length <= 0 && data.jobTitle.length <= 0 && data.startDate.length <= 0 && data.endDate.length <= 0) {
                    return false;
                }
                return true;
            });
            existingArray.push({
                companyName: '',
                location: '',
                jobTitle: '',
                startDate: '',
                endDate: '',
                responsibilities: []
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
    components: { WorkCard }
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