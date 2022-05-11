<template>
    <div>
        <h2>{{ title }}</h2>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'CardObject',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>

</style>