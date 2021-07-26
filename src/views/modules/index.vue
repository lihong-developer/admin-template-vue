<template>
    <el-container class="page">
        <!-- 顶部 -->
        <div class="top">
            <span
                style="
                    line-height: 60px;
                    color: #fff;
                    margin: 0 48px;
                    min-width: 100px;
                "
            >
                管理后台
            </span>
            <el-menu
                background-color="#262f3e"
                text-color="#c1c6c8"
                mode="horizontal"
                active-text-color="#006eff"
            >
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="2">处理中心</el-menu-item>
                <el-menu-item index="3">处理中心</el-menu-item>
                <el-menu-item index="4">处理中心</el-menu-item>
                <el-menu-item index="5">处理中心</el-menu-item>
            </el-menu>
        </div>
        <!-- 侧边栏 -->
        <el-aside class="left-menu">
            <el-scrollbar
                :noresize="false"
                style="height: calc(100vh - 60px - 56px)"
            >
                <el-menu
                    background-color="#1e222d"
                    text-color="#bfc4c6"
                    active-text-color="#ffffff"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项2</el-menu-item>
                        <el-menu-item>选项4</el-menu-item>
                        <el-menu-item>选项5</el-menu-item>
                        <el-menu-item>选项6</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
            <div class="menu-footer">
                <i class="el-icon-menu"></i>
            </div>
        </el-aside>
        <!-- 内容 -->
        <!-- <el-main><router-view /></el-main> -->
    </el-container>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.page {
    height: 100vh;
    min-width: 1000px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
}
.el-menu {
    border: 0;
}
.top {
    display: flex;
    align-content: center;
    background-color: #262f3e;
    .el-menu-item {
        border: 0;
    }
}

.left-menu {
    height: calc(100vh - 60px);
    background-color: #1e222d;
    .menu-footer {
        height: 56px;
        background-color: #262f3e;
    }
    .el-menu-item.is-active {
        background-color: #006eff !important;
    }
}
/deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
}
</style>