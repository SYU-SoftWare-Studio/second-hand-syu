import service from "@/utils/request"

export function test(data){
  service.request({
    method:"get",
    url: "",
    data
  })
}