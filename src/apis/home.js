import httpInstance from "@/utils/http";
/**
 * 获取轮播图 banner
 * @returns 
 */
export function getBannerAPI(params = {}) {
    const { distribution = '1' } = params;
    return httpInstance({
        url: '/home/banner',
        method: 'GET',
        params: {
            distribution
        }
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


/**
 * 获取所有商品
 * @returns 
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods',
        method: 'GET'
    })
}