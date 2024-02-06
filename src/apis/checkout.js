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

