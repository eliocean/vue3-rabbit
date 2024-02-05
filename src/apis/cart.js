import httpInstance from "@/utils/http";

/**
 * 加入购物车
 * @param {*} 
 * @returns 
 */
export function insertCartAPI({ skuId, count }) {
    return httpInstance({
        url: '/member/cart',
        method: "POST",
        data: {
            skuId,
            count
        }
    })
}


/**
 * 获取最新的购物车列表
 * @param {*} 
 * @returns 
 */
export function findNewCartListAPI() {
    return httpInstance({
        url: '/member/cart',
    })
}
