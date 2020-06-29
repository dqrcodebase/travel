<template>
    <el-header>
        <el-menu  class="el-menu-demo" mode="horizontal" router="true" active-text-color="#0084bb">
            <el-menu-item index="1"
                >请 <router-link to="/home">登录</router-link> 或<router-link to="/home"> 免费注册</router-link></el-menu-item
            >
            <el-menu-item index="4"> <i class="header_v news"></i>消息</el-menu-item>
            <el-submenu index="2">
                <template index="2-1" slot="title">查看订单</template>
                <el-menu-item index="2-1">机票订单</el-menu-item>
                <el-menu-item index="2-2">酒店订单</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">积分商城</el-menu-item>
            <el-menu-item index="4">联系客服</el-menu-item>
        </el-menu>
    </el-header>
</template>
<script>
export default {
    name: 'vheader',
    data() {
        return {};
    },
    created() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/header.scss';
</style>
