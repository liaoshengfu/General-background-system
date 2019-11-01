<!-- template -->
<template>
    <div>
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-lx-tag"></i> 组件集合</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- gutter：格栅之间的间隔 -->
            <!-- span:格栅占据的列数 -->
            <!-- label指示器的名字 -->
            <!-- arrow="always":总是显示箭头 -->
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="block">
                        <div class="demonstration">默认 Hover 指示器触发-卡片式</div>
                        <el-carousel height="150px" type="card" arrow="always">
                            <el-carousel-item v-for="item in imagesbox" :key="item.id" :label="item.id+1">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="block">
                        <div class="demonstration">Click 指示器触发</div>
                        <el-carousel trigger="click" height="150px">
                            <el-carousel-item v-for="item in imagesbox" :key="item.id">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="block">
                        <div class="demonstration">垂直播放</div>
                        <!-- 如果要绑定不自动播放   :autoplay="false" -->
                        <!-- <el-carousel  height="150px" direction="vertical" :autoplay="false"> -->
                        <el-carousel height="150px" direction="vertical">
                            <el-carousel-item v-for="item in imagesbox" :key="item.id">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
            </el-row>

            <div style="margin-top:40px"></div>

            <el-row>
                <el-col :span="6">
                    <!-- accordion	是否手风琴模式 -->
                    <el-collapse accordion>
                        <el-collapse-item>
                            <!-- 具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果,用template包裹起来 -->
                            <template slot="title">
                                一致性 Consistency<i class="header-icon el-icon-info"></i>
                            </template>
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>

                        <el-collapse-item title="反馈 Feedback">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>

                        <el-collapse-item title="效率 Efficiency">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>

                        <el-collapse-item title="可控 Controllability">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                    </el-collapse>


                </el-col>
            </el-row>
            </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "other",
        data() {
            return {
                imagesbox: [{
                    id: 0,
                    name: "第一张图",
                    idView: require("../../assets/img/1.jpg")
                }, {
                    id: 1,
                    name: "第二张图",
                    idView: require("../../assets/img/2.jpg")
                }, {
                    id: 2,
                    name: "第三张图",
                    idView: require("../../assets/img/3.jpg")
                }, {
                    id: 3,
                    name: "第四张图",
                    idView: require("../../assets/img/4.jpg")
                }, {
                    id: 4,
                    name: "第五张图",
                    idView: require("../../assets/img/5.jpg")
                }, ]
            };
        },
        components: {},
        methods: {}
    };
</script>

<!-- style -->
<style lang="less">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .block {
        text-align: center;
    }

    .demonstration {
        margin: 10px;
    }

    .el-carousel__button {
        height: auto;
        width: auto;
        padding: 2px 18px;
        font-size: 12px;
        border-radius: 50px;
    }

    .image {
        width: 100%;
        height: 100%
    }

    .el-carousel__button {
        background-color: greenyellow !important;
        display: block;
        opacity: .48;
        width: 15px !important;
        height: 15px !important;
        border-radius: 50px;
        background-color: #FFF;
        border: none;
        /* outline: 0; */
        padding: 0;
        margin: 0;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s;
    }
</style>