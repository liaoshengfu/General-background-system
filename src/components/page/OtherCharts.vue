<!-- template -->
<template>
    <div class="othercharts">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 其他图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                基于 ECharts v4.1.0+ 开发，依赖 Vue.js v2.2.6+。
                访问地址：<a href="https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md"
                    target="_blank">vue-echarts</a>
            </div>
            <div class="schart-box">
                <div class="content-title ">radar雷达图</div>
                <v-chart class="schart bg1" :options="radar" autoresize />
            </div>
            <div class="schart-box">
                <div class="content-title ">scatter散点图</div>
                <v-chart class="schart bg2" :options="scatter" autoresize />
            </div>
            <div class="schart-box">
                <div class="content-title ">effectScatter坐标地图</div>
                <v-chart class="schart bg3" :options="effectScatter" autoresize />
            </div>
            <div class="schart-box">
                <div class="content-title ">可连接地图</div>
                <v-chart class="schart bg4" :options="c1" autoresize />
                <!-- <v-chart class="schart bg4" :options="c2" autoresize /> -->
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/map'
    //坐标地图
    import 'echarts/lib/chart/effectScatter'
    import 'echarts/map/js/world'
    import chinaMap from "./data/china.json"
    ECharts.registerMap('china', chinaMap)
    // 散点图
    import 'echarts/lib/chart/scatter'
    // 雷达图
    import 'echarts/lib/chart/radar'
    // 图例
    import 'echarts/lib/component/legend'
    // 标题
    import 'echarts/lib/component/title.js'
    // 工具栏（鼠标放上去的效果）
    import 'echarts/lib/component/tooltip'
    import radar from './data/radar'
    import scatter from './data/scatter'
    import effectScatter from './data/effectScatter'
    import {c1,c2} from './data/connect'

    export default {
        name: "othercharts",
        data() {
            return {
                radar,
                scatter,
                effectScatter,
                c1,
                c2
            }
        },
        components: {
            'v-chart': ECharts
        },
        methods: {}
    }
</script>

<!-- style -->
<style lang="less" scoped>
    .plugins-tips {
        background: #eef1f6;
    }

    .plugins-tips a {
        color: #20a0ff;
    }

    .schart-box {
        display: inline-block;
        margin: 20px;
    }

    .schart {
        width: 600px;
        height: 400px;
    }

    .content-title {
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }

    .bg1 {
        background: #F9EFCC;
    }

    .bg2 {
        background: #00887C;
    }

    .bg3 {
        background: #829dca;
    }

    .bg4 {
        background: #829daa;
    }
</style>