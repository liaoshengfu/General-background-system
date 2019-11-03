import Mock from 'mockjs'

let List = []
const count = 1000

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        // id: Mock.Random.guid(),
        sortnum: i + 1,
        date:Mock.Random.date(),    
        name: Mock.Random.cname(),
        province: Mock.Random.province(),
        city: Mock.Random.city(),
        address: Mock.mock('@city(true)'),
        zip: Mock.Random.email(),
    }))
}
console.log("list:",List)

export default{
    /**
     * 获取table列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getlist:config => {
        
        const { limit , currentpage } = JSON.parse(config.body);
        let mockList = List;
        const tablelist = mockList.filter((item, index) => index < limit * currentpage && index >= limit * (currentpage - 1))
        // debugger
        return {
            code: 200,
            data: {
                total: mockList.length,
                tablelist: tablelist
            }
        }
    }
}
