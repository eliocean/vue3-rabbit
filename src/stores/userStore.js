import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from "@/stores/cartStore";

export const uesUserStore = defineStore('user', () => {
    const cartStore = useCartStore();
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const loginRes = await loginAPI({ account, password })
        userInfo.value = loginRes.result
    }

    const clearUserInfo = () => {
        userInfo.value = {} // 清除用户信息
        cartStore.clearCart();
    }

    return { userInfo, getUserInfo,clearUserInfo }
}, {
    persist: true,
},)
