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
                <!-- 
                  :data="trees"

                -->
                <el-tree
                  :load="loadNode"
                  lazy
                  :props="defaultProps"
                  :show-checkbox="true"
                  ref="tree"
                ></el-tree>
                <el-button style="margin-top:20px" size="mini" @click="getCheckedNodes">保存</el-button>
              </el-collapse-item>
            </el-collapse>
          </el-form>
        </el-card>
      </el-col>

      <!-- 展示 -->
      <el-col :span="12">
        <el-card header="数据展示"></el-card>
        <el-tree :data="saveTrees" :props="defaultProps" :show-checkbox="true" ref="tree-2"></el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { permissionRoutes } from "@/router/index";
console.log(permissionRoutes)
let noderoutes = []
export default {
  name: '',
  components: {

  },
  props: {

  },
  data () {
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
      saveTrees: []
    };
  },
  computed: {

  },
  watch: {

  },
  created () {
    noderoutes = this.trees = this.generateRouter(permissionRoutes);
    console.log(this.trees)
  },
  mounted () {

  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },

    handleChange () {

    },

    generateRouter (arr) {
      let newArr = []
      arr.forEach(item => {
        if (item.label) {
          let params = {
            label: item.label || "",
            path: item.path || ""
          }
          if (item.children) {
            params.children = this.generateRouter(item.children)
          } else {
            params.leaf = true
          }
          newArr.push(params)
        }

      })
      return newArr
    },

    getCheckedNodes () {
      const routes = this.$refs.tree.getCheckedNodes(false, true).filter(item => item.children);
      console.log(routes);
    },

    loadNode (node, resolve) {
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

        console.log("noderoutes==>", noderoutes,"label===>",node.data.label)


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
  }
};
</script>

<style scoped lang="scss">
</style>
