import request from "@/utils/http";
/**
 * 登录接口
 * @returns 
 */
export const loginAPI = ({ account, password }) => {
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    });
}
