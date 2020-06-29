<template>
    <div>
        <v-Header />
        <v-main />
        <v-footer />
    </div>
</template>
<script>
import vHeader from './components/header.vue';
import vMain from './components/main.vue';
import vFooter from './components/footer.vue';
export default {
    components: {
        vHeader,
        vMain,
        vFooter
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/footer.scss';
</style>
