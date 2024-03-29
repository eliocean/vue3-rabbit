//封装轮播图业务代码
import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";


export function useBanner() {

    const bannerList = ref([]);

    const getBanner = async () => {
        const res = await getBannerAPI({
            distribution: '2'
        });
        // console.log(res);
        bannerList.value = res.result;
    }

    onMounted(() => getBanner());


    return { bannerList };
}