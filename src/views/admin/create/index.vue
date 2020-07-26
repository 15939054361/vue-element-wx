<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>创建管理员</span>
          </div>
          <el-form label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formLabelAlign.path"></el-input>
            </el-form-item>
            <el-collapse v-model="activeNames" @change="handleChange">
              <!-- 路由 -->
              <el-collapse-item title="权限配置" name="0">

                <!-- <el-table :data="trees" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                  <el-table-column  prop="label" label="路由名称" sortable width="180">
                  </el-table-column>
                  <el-table-column prop="path" label="路径展示" sortable width="180">
                  </el-table-column>
                </el-table> -->

                <!-- :load="loadNode" lazy-->
                <el-tree @check-change="treeChange" id="tree" :data="trees" node-key="id" :props="defaultProps" :show-checkbox="true" ref="tree"></el-tree>
                <el-button style="margin-top:20px" size="mini" @click="getCheckedNodes">保存</el-button>
              </el-collapse-item>
            </el-collapse>
          </el-form>
        </el-card>
      </el-col>

      <!-- 展示 -->
      <el-col :span="12">
        <el-card header="数据展示">
          <el-tree :data="checkRoute" :props="defaultProps" ref="tree-2"></el-tree>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { permissionRoutes } from "@/router/index";
  // console.log(permissionRoutes)
  let noderoutes = []
  export default {
    name: '',
    components: {

    },
    props: {

    },
    data() {
      return {
        formLabelAlign: {
          name: "",
          region: "",
          type: ""
        },
        activeNames: ['1'],
        trees: [],
        defaultProps: {
          children: "children",
          label: 'label',
          id: 'path',
          isLeaf: 'leaf'
        },
        saveTrees: [],
        parentNode: "",
        checkRoute: [],
        permissionRoutes
      };
    },
    computed: {

    },
    watch: {

    },
    created() {
      noderoutes = this.trees = this.generateRouter(permissionRoutes);
      console.log("permissionRoutes==>", permissionRoutes)
      setTimeout(() => {
        console.log("permissionRoutes==>", permissionRoutes)
      }, 5000);
    },
    mounted() {

    },
    methods: {


      handleClick(tab, event) {
        console.log(tab, event);
      },

      handleChange() {

      },

      // 将权限路由生成tree组件需要的数据格式
      generateRouter(arr) {
        let newArr = []

        arr.forEach(item => {
          if (item.label) {
            let params = {
              id: item.id,
              label: item.label || "",
              path: item.path || ""
            }
            if (item.children) {
              params.children = this.generateRouter(item.children)
            }
            newArr.push(params)
          }

        })
        return newArr
      },

      // 最终获取所有选中路由的数组
      getCheckedNodes() {
        // this.permissionRoutes = impor
        if (!this.parentNode) {
          return
        }

        const { childNodes } = this.parentNode;

        if (this.parentNode.childNodes.filter(item => item.checked === false).length === 0) {
          this.checkRoute = this.trees
          console.log(this.get(this.checkRoute, this.permissionRoutes))
        } else {
          this.checkRoute = this.generateCheckRouter(childNodes);

          console.log(this.get(this.checkRoute, this.permissionRoutes))
        }

      },

      get(route, permission) {
        let arr = [];
        let flag = false
        for (let index = 0; index < route.length; index++) {
          const element = route[index];
          const res = permission.find(per_item => per_item.id === element.id);
          if (res && res.children) {
            // if (flag) {
            //   res.children.push(this.get(element.children, res.children))
            // } else {
            //   res.children = this.get(element.children, res.children)
            // }
            res.children = this.get(element.children, res.children)
            // flag = true;
          }
          if (res) {
            arr.push(res)
          }
        }
        return arr;

      },

      //向下方获取获取tree组件的root(最高)节点方法传递需要数据 
      treeChange(data, node, check) {
        const nodeData = this.$refs.tree.getNode(data.id);
        this.getParent(nodeData)
      },

      // 懒加载 弃用
      loadNode(node, resolve) {
        if (node.level === 0) {
          const level_1 = []
          this.trees.forEach(item => {
            level_1.push({
              label: item.label,
              path: item.path
            })
          })
          return resolve(level_1);
        }

        if (node.level === 1) {
          noderoutes = this.trees
        }

        let hasChild;

        if (Array.isArray(noderoutes)) {
          noderoutes.forEach(item => {
            if (item.children) {
              hasChild = true
            } else {
              hasChild = false
            }
          })

          const arr = noderoutes.filter(item => item.label === node.data.label);
          if (arr[0].children) {
            noderoutes = arr[0].children
            resolve(arr[0].children)
          } else {
            resolve([])
          }

        } else {
          hasChild = false
        }
      },

      // 工具方法 获取tree组件的root(最高)节点
      getParent(obj) {
        if (obj.parent) {
          return this.getParent(obj.parent);
        } else {
          this.parentNode = obj
        }
      },

      // 生成一个被选中的路由表
      generateCheckRouter(arr) {
        let newArr = [];

        arr.forEach((item, index) => {

          if (item.checked || this.getBoolean(item.childNodes)) {

            let params = {
              id: item.data.id,
              label: item.data.label || "",
              path: item.data.path || ""
            }

            if (item.childNodes.length > 0) {
              params.children = this.generateCheckRouter(item.childNodes)
            }

            newArr.push(params)
          }
        })
        return newArr
      },

      // 对路由选中进行判断
      getBoolean(array) {
        // console.log(array)
        let flag = false;
        for (let index = 0; index < array.length; index++) {
          const element = array[index];

          if (element.checked) {
            return flag = true
          }
          if (element.childNodes.length > 0) {
            flag = this.getBoolean(element.childNodes)
          } else {
            continue
          }
        }
        return flag
      }


    }
  };
</script>

<style scoped lang="scss">
</style>