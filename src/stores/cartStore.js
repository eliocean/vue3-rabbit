import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartList = ref([])

    const addCart = (item) => {
        const itemOld = cartList.value.find((tmp) => tmp.skuId === item.skuId)
        if (itemOld) {
            itemOld.count += item.count
        } else {
            cartList.value.push(item)
        }
    }

    return { cartList, addCart }
},{
    persist: true
})