import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'

export const uesUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const loginRes = await loginAPI({ account, password })
        userInfo.value = loginRes.result
    }

    const clearUserInfo = () => {
        userInfo.value = {} // 清除用户信息
    }

    return { userInfo, getUserInfo,clearUserInfo }
}, {
    persist: true,
},)
