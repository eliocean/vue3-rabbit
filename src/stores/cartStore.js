import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { uesUserStore } from "@/stores/user";
import { findNewCartListAPI, insertCartAPI } from '@/apis/cart'

export const useCartStore = defineStore("cart", () => {
    const userStore = uesUserStore();
    const isLogin = computed(() => userStore.userInfo.token);

    const cartList = ref([])

    const addCart = async (item) => {
        const { skuId, count } = item
        if (isLogin.value) {
            // 登录状态购物车操作
            await insertCartAPI({ skuId, count })
            const resCartList = await findNewCartListAPI()
            cartList.value = resCartList.result
        } else {
            // 非登录状态，本地购物车操作
            const itemOld = cartList.value.find((tmp) => tmp.skuId === item.skuId)
            if (itemOld) {
                itemOld.count += item.count
            } else {
                cartList.value.push(item)
            }
        }

    }

    const delFromCart = (skuId) => {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }

    const sumCount = computed(() => {
        return cartList.value.reduce((sum, item) => sum + item.count, 0);
    })

    const sumPrice = computed(() => {
        return cartList.value.reduce((sum, item) => sum + item.price * item.count, 0);
    })

    const selectedCount = computed(() => {
        return cartList.value.reduce((sum, item) => sum + (item.selected ? item.count : 0), 0);
    })

    const selectedPrice = computed(() => {
        return cartList.value.reduce((sum, item) => sum + (item.selected ? item.price * item.count : 0), 0);
    })


    const singleCheck = (skuId, selected) => {
        cartList.value.find((item) => item.skuId === skuId).selected = selected
    }


    const isAll = computed(() => cartList.value.every((item) => item.selected === true))

    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }

    return { cartList, addCart, delFromCart, sumCount, sumPrice, singleCheck, isAll, allCheck, selectedCount, selectedPrice }
}, {
    persist: true
})