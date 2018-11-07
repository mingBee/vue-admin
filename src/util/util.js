/**
 * 全局通用方法
 */
//过滤路由方法
export const filterRouter=(router,fil)=>{
  let output=[];
  router.forEach(i=>{
    let item=Object.assign({},i);
    if(i.children && i.children instanceof Array){
      item.children=filterRouter(i.children,fil);
      if(item.children instanceof Array && item.children.length>0){
        output.push(item);
      }  
    }else{
      if(i.meta && fil.indexOf(i.meta.name)>-1){
        output.push(item);
      };
    }
  });
  return output;
}
