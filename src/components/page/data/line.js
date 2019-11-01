export default function getlineData () {
    return {
        title: {
            show: true,//是否显示
            text: 'line折线图',
            textAlign: 'left',
        },
      legend: {},
      tooltip: {},
      dataset: {
        // Provide data.
        source: [
          ['Product', '2015', '2016', '2017'],
          ['Matcha Latte', ...randomize()],
          ['Milk Tea', ...randomize()],
          ['Cheese Cocoa', ...randomize()],
          ['Walnut Brownie', ...randomize()]
        ]
      },
      // Declare X axis, which is a category axis, mapping
      // to the first column by default.
      xAxis: { type: 'category' },
      // Declare Y axis, which is a value axis.
      yAxis: {},
      // Declare several series, each of them mapped to a
      // column of the dataset by default.
      series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }]
    }
  }
  
  function randomize () {
    // eslint-disable-next-line no-unused-vars
    return [0, 0, 0].map(v => {
      return Math.round(300 + Math.random() * 700) / 10
    })
  }