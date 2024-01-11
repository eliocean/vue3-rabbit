import httpInstance from "@/utils/http";

/**
 * 获取指定类别商品
 * @param {*} id 
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