<template>
  <div class="wrap">
    <el-button class="submit-btn" type="primary" @click="submit">保存</el-button>
    <el-tree
      :data="roleList"
      show-checkbox 
      ref="tree"
      node-key="key"
      :default-checked-keys="childFilList"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
import {initRole} from '@/util/util'
import router from '@/route/routes'
  export default {
    data() {
      return {
        roleList: [],
        parentList:[],
        childList:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    computed:{
      authList(){
        return this.$store.state.menu.authList;
      },
      parentFilList(){
        let that=this;
        return this.parentList.filter(i=>{
          return that.authList.indexOf(i)>-1;
        });
      },
      childFilList(){
        let that=this;
        return this.childList.filter(i=>{
          return that.authList.indexOf(i)>-1;
        });
      },
    },
    mounted(){
      this.roleList=this.initRole(router.asynRoutes);
    },
    methods:{
      /**
       * 初始化角色列表
       */
      initRole(router){
        let that=this;
        return router.map(i=>{
          let item={};
          if(i.leaf){
            item.label=i.children[0].name;
            item.key=i.children[0].meta.name;
            that.childList.push(item.key);
          }else{
            item.label=i.name;
            if(i.children && i.children instanceof Array){
              item.key=i.name;
              item.children=that.initRole(i.children);
              that.parentList.push(item.key);
            }else{
              item.key=i.meta.name;
              that.childList.push(item.key);
            };
          };
          return item;
        });
      },
      /**
       * 保存
       */
      submit(){
        let checkedNodes=this.$refs.tree.getCheckedNodes();
        let output=[];
        checkedNodes.forEach(i=>{
          if(!i.children){
            output.push(i.key);
          }
        });
        this.$store.commit('setAuthList',output);
        this.$message('修改成功');
        console.log(this.$store.state.menu.authList);
        
      },
    }
  };
</script>

<style lang="scss" scoped>
  .wrap{
    height:100%;
  }
  .submit-btn{
    margin:15px 0;
  }
</style>