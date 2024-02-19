import request from "@/utils/http";

/**
 * 获取订单详情
 * @param {*} id 订单id
 * @returns 
 */
export const getOrderAPI = (id) => {
    return request({
        url: `/member/order/${id}`,
    })
}
