<template>
    <div>
        <h2><font-awesome-icons v-if="icon" :icon="icon" /> {{ title }}</h2>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'CardObject',
    props: {
        title: String,
        icon: String
    }
}
</script>

<style lang="scss" scoped>

</style>