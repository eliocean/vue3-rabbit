import httpInstance from "@/utils/http";

/**
 * 获取指定类别商品
 * @param {*} id 分类id
 * @returns 
 */
export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        method: "get",
        params: {
            id
        }
    })
}


/**
 * 获取二级分类列表数据
 * @param {*} id 分类id
 * @returns 
 */
export function getCategoryFilterAPI(id) {
    return httpInstance({
        url: '/category/sub/filter',
        method: "get",
        params: {
            id
        }
    })
}