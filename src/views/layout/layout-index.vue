<script setup>
import LayoutFix from './components/LayoutFix.vue';
import LayoutNav from '@/views/layout/components/LayoutNav.vue';
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
    <LayoutFix />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>