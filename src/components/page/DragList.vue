<!-- template -->
<template>
    <div class="draglist">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-rank"></i> 拖曳列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件。
                访问地址：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
            </div>

            <div class="drag-box">
                <div class="drag-box-item">
                    <div class="item-title">todo</div>
                    <draggable v-model="todo" :options="dragOptions" @remove="removeHandle">
                        <transition-group tag="div" id="todo" class="item-ul">
                            <div v-for="item in todo" :key="item.id" class="drag-list">
                                {{item.content}}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="drag-box-item">
                    <div class="item-title">doing</div>
                    <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
                        <transition-group tag="div" id="doing" class="item-ul">
                            <div v-for="item in doing" class="drag-list" :key="item.id">
                                {{item.content}}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="drag-box-item">
                    <div class="item-title">done</div>
                    <draggable v-model="done" @remove="removeHandle" :options="dragOptions">
                        <transition-group tag="div" id="done" class="item-ul">
                            <div v-for="item in done" class="drag-list" :key="item.id">
                                {{item.content}}
                            </div>
                        </transition-group>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import draggable from 'vuedraggable'
    export default {
        name: "draglist",
        data() {
            return {
                dragOptions: {
                    animation: 120,
                    scroll: true,
                    group: 'sortlist',
                    ghostClass: 'ghost-style'
                },
                todo: [{
                        id: 1,
                        content: '开发图表组件1'
                    },
                    {
                        id: 2,
                        content: '开发拖拽组件2'
                    },
                    {
                        id: 3,
                        content: '开发权限测试组件3'
                    }
                ],
                doing: [{
                        id: 1,
                        content: '开发登录注册页面'
                    },
                    {
                        id: 2,
                        content: '开发头部组件'
                    },
                    {
                        id: 3,
                        content: '开发表格相关组件'
                    },
                    {
                        id: 4,
                        content: '开发表单相关组件'
                    }
                ],
                done: [{
                        id: 1,
                        content: '初始化项目，生成工程目录，完成相关配置'
                    },
                    {
                        id: 2,
                        content: '开发项目整体框架'
                    }
                ]
            }
        },
        components: {
            draggable,
        },
        methods: {
            removeHandle(event) {
                console.log(event);
                this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
            }
        }
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

    .drag-box {
        display: flex;
        // 文字将不会被选中和复制
        user-select: none;
    }

    .drag-box-item {
        flex: 1;
        max-width: 330px;
        min-width: 300px;
        background-color: #eff1f5;
        margin-right: 16px;
        border-radius: 6px;
        border: 1px #e1e4e8 solid;
    }

    .item-title {
        padding: 8px 8px 8px 12px;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        font-weight: 600;
    }

    .item-ul {
        padding: 0 8px 8px;
        height: 500px;
        overflow-y: scroll;
    }

    .item-ul::-webkit-scrollbar {
        width: 0;
    }

    .drag-list {
        border: 1px #e1e4e8 solid;
        padding: 10px;
        margin: 5px 0 10px;
        list-style: none;
        background-color: #fff;
        border-radius: 6px;
        cursor: pointer;
        -webkit-transition: border .3s ease-in;
        transition: border .3s ease-in;
    }

    .drag-list:hover {
        border: 1px solid #20a0ff;
    }

    .drag-title {
        font-weight: 400;
        line-height: 25px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }

    .ghost-style {
        display: block;
        color: transparent;
        border-style: dashed
    }
</style>