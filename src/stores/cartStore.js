import { defineStore } from "pinia";
import { ref, computed } from "vue";

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