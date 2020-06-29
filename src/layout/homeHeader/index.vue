<template>
    <div class="demo-input-suffix">
        <div>
            <el-autocomplete
                class="inline-input"
                v-model="state2"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                :trigger-on-focus="false"
            >
                <template slot-scope="{ item }">
                    <a :href="item.url">
                        <span class="word">{{ item.word }}</span>
                        <span class="districtName">{{ item.districtName }}</span>
                    </a>
                </template>
            </el-autocomplete>
            <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title"><a href="https://car.ctrip.com/#ctm_ref=chp_var_txt">首页</a> </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { search } from '@/api/index';
export default {
    data() {
        return {
            state2: ''
        };
    },
    methods: {
        querySearch(queryString, cb) {
            queryString = queryString.trim();
            if (queryString) {
                search({ keyword: queryString }).then(rep => {
                    let { data: searchData } = rep;
                    cb(searchData);
                });
            } else {
                cb([]);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.el-autocomplete {
    width: 300px;
}
.el-autocomplete-suggestion__list {
    .word {
        color: #000000;
    }
    .districtName {
        color: #999999;
        margin-left: 5px;
    }
}
</style>
