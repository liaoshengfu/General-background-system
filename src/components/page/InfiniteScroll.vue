<!-- template -->
<template>
    <div>
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-lx-tag"></i> 无限滚动</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div class="infinite-list-wrapper">
                <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
                    <li v-for="(item,index) in count" class="list-item" :key="index">{{ item }}</li>
                </ul>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">没有更多了</p>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "infinitescroll",
        data() {
            return {
                count: 30,
                loading: false
            };
        },
        components: {},
        computed: {
            noMore() {
                return this.count >= 40;
            },
            disabled() {
                return this.loading || this.noMore;
            }
        },
        methods: {
            load() {
                this.loading = true;
                setTimeout(() => {
                    this.count += 2;
                    this.loading = false;
                }, 2000);
            }
        }
    };
</script>

<!-- style -->
<style lang="less" scoped>
    .infinite-list-wrapper {
        // height: 300px;
        text-align: center;
    }

    .infinite-list-wrapper .list {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .infinite-list-wrapper .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #fff6f6;
        color: #ff8484;
    }

    .infinite-list-wrapper .list-item+.list-item {
        margin-top: 10px;
    }
</style>