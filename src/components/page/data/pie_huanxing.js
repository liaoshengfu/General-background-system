export default {
    title: { //标题组件
        text: 'pie环形图',
        // left: '50px', //标题的位置 默认是left，其余还有center、right属性
        x: 'center',
        textStyle: {
            color: "#436EEE",
            fontSize: 17,
        }
    },
    tooltip: { //提示框组件
        trigger: 'item', //触发类型(饼状图片就是用这个)
        formatter: "{a} <br/>{b} : {c} ({d}%)" //提示框浮层内容格式器
    },
    color: ['#48cda6', '#fd87fb', '#11abff', '#ffdf6f', '#968ade'], //手动设置每个图例的颜色
    legend: { //图例组件
        //right:100,  //图例组件离右边的距离
        left:"left",
        orient: 'horizontal', //布局  纵向布局 图例标记居文字的左边 vertical则反之
        width: 40, //图行例组件的宽度,默认自适应
        x: 'right', //图例显示在右边
        y: 'top', //图例在垂直方向上面显示顶部
        itemWidth: 25, //图例标记的图形宽度
        itemHeight: 15, //图例标记的图形高度
        data: ['正常', '一般', '提示', '较急', '特急'],
        textStyle: { //图例文字的样式
            color: '#333', //文字颜色
            fontSize: 12 //文字大小
        }
    },
    series: [ //系列列表
        {
            name: '设备状态', //系列名称
            type: 'pie', //类型 pie表示饼图
            center: ['50%', '60%'], //设置饼的原心坐标 不设置就会默认在中心的位置
            radius: ['35%', '55%'], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
            itemStyle: { //图形样式
                normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label: { //饼图图形上的文本标签
                        show: true //平常不显示
                    },
                    labelLine: { //标签的视觉引导线样式
                        show: true //平常不显示
                    }
                },
                emphasis: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                    label: { //饼图图形上的文本标签
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [{
                    value: 80,
                    name: '正常'
                },
                {
                    value: 10,
                    name: '一般'
                },
                {
                    value: 30,
                    name: '提示'
                },
                {
                    value: 20,
                    name: '较急'
                },
                {
                    value: 25,
                    name: '特急'
                }
            ]
        }
    ]
}