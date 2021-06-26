<template>
    <div>
        <span>
            {{text}}
        </span>
    </div>
</template>

<script>
    export default {
        props:{
            text:{type: String, required: true}
        }
        
    }
</script>

<style lang="scss" scoped>

</style>