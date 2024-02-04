import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'

export const uesUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getUserInfo = async ({ account, password }) => {
        const loginRes = await loginAPI({ account, password })
        userInfo.value = loginRes.result
    }

    return { userInfo, getUserInfo }
})
