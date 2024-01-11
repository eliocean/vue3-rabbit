// 封装分类数据业务代码
import { getCategoryAPI } from '@/apis/category';
import { ref, onMounted } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';


export function useCategory() {
    const route = useRoute();
    const categoryData = ref({});
    const getCategoryData = async (id = route.params.id) => {
        // console.log(route.params);
        const res = await getCategoryAPI(id);
        categoryData.value = res.data.result;
        // console.log(categoryData.value);
    }

    onMounted(() => getCategoryData());
    onBeforeRouteUpdate((to) => getCategoryData(to.params.id));

    return { categoryData };
}