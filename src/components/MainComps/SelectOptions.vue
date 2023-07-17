<script>
export default {
    props: {
        type: String
    }
}
</script>

<template>
    <option value="creature">
        {{ type }}
    </option>
</template>

<style lang="scss" scoped>

option {
    text-transform: capitalize;
}
</style>