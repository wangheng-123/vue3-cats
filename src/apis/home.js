import httpInstance from "@/utils/http";

//封装获取banner
export function getBannerAPI() {
    return httpInstance({
        url:'/home/banner'
    })
}
