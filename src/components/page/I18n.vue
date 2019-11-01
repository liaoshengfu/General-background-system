<template>
    <section class="main">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-global"></i>
                    {{$t('i18n.breadcrumb')}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <span>{{$t('i18n.shuoming')}}</span>
            <!-- <el-button type="primary" @click="$i18n.locale = $i18n.locale === 'zh'?'en':'zh';">{{$t('i18n.btn')}} -->
            <el-button type="primary" @click="changeLangEvent()">{{$t('i18n.btn')}}</el-button>
            <div class="list">
                <h2>{{$t('i18n.title1')}}</h2>
                <div class="divcss">
                    <h1>{{$t('i18n.h1')}}</h1>
                    <h4 class="h4">{{$t('i18n.h2')}}</h4>
                    <p>{{$t('i18n.p1')}}</p>
                    <p>{{$t('i18n.p2')}}</p>
                    <p>{{$t('i18n.p3')}}</p>
                    <p>{{$t('i18n.p4')}}</p>
                </div>
            </div>
            <h2>{{$t('i18n.title2')}}</h2>
            <div>
                <i18n path="i18n.info" tag="p">
                    <a place="action"
                        href="https://element.eleme.cn/2.0/#/zh-CN/component/i18n">{{ $t('i18n.value') }}</a>
                </i18n>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "",
        data() {
            return {}
        },
        methods: {
            /**
             * 切换语言 
             */
            changeLangEvent() {
                this.$confirm('确定切换语言吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (this.$i18n.locale === 'zh') {
                        this.$i18n.locale = 'en';
                    } else {
                        this.$i18n.locale = 'zh';
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                    });
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .divcss {
    margin-top: 45px;
      background: #ddd;
        text-align: center;
        padding: 30px 0px;
        .h4{
            margin-top: 5px;
            margin-bottom: 20px;
        }
    }

    .list {
        padding: 30px 0;
    }

    .list p {
        margin-bottom: 20px;
    }

    a {
        color: #409eff;
    }
</style>