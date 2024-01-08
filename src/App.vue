<script setup>

</script>

<template>
    <!-- 一级路由出口组件 -->
    <RouterView />
    <div class="test-scss">
        test scss
    </div>
</template>

<style scoped lang="scss">
.test-scss {
    color: $priceColor;
}

</style>
