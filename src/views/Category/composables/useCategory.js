//封装分类数据业务相关的代码

import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getTopCategoryAPI} from "@/apis/category";

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())

//目标：路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
        console.log(to)
        getCategory(to.params.id)
    })

    return{
        categoryData
    }
}
