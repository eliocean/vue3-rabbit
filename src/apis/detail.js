import httpInstance from "@/utils/http";

/**
 * 获取指定商品详情
 * @param {*} id 商品id
 * @returns 
 */
export function getDetail(id) {
    return httpInstance({
        url: '/goods',
        method: "get",
        params: {
            id
        }
    })
}
