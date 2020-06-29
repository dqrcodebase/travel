<template>
    <el-tabs class="home-tabs" tab-position="left" style="margin-top:30px">
        <el-tab-pane label="机票"><airTicket /></el-tab-pane>
        <el-tab-pane label="机票">机票</el-tab-pane>
        <el-tab-pane label="火车票">火车票</el-tab-pane>
        <el-tab-pane label="度假">度假</el-tab-pane>
    </el-tabs>
</template>


<script>
import airTicket from './airTicket.vue'
export default {
  components:{
    airTicket
  }
};
</script>

<style lang="scss" scoped>
.home-tabs {
    .el-tabs__header {
      width:1000px;
        .el-tabs__item {
            text-align: center;
        }
    }
}
</style>
