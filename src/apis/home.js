import httpInstance from "@/utils/http";
// 获取banner 
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner',
        method: 'GET'
    });
}

/**
 * 获取新鲜好物
 * @returns 
 */
export function findNewAPI() {
    return httpInstance({
        url: '/home/new',
        method: 'GET'
    });
}

/**
 * 获取人气推荐
 * @returns 
 */
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot',
        method: 'GET'
    })
}