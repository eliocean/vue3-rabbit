import httpInstance from "@/utils/http";

/**
 * 获取订单详情
 * @param {*} 
 * @returns 
 */
export function getCheckoutInfoAPI() {
    return httpInstance({
        url: '/member/order/pre',
    })
}



// 创建订单
export const createOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}

