<template>
  <el-table :data="list" stripe style="width: 100%">
    <el-table-column prop="_id" label="id" width="180" show-overflow-tooltip></el-table-column>
    <el-table-column prop="total" label="运动步数" width="180"></el-table-column>
    <el-table-column prop="nickName" label="用户名" width="180"></el-table-column>
    <el-table-column label="头像">
      <template slot-scope="scope">
        <el-avatar :src="scope.row.avatarUrl"></el-avatar>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { list } from "@/api/wx-step.js"
export default {
  name: 'user-list',
  components: {

  },
  props: {

  },
  data () {
    return {
      list: []
    };
  },
  computed: {

  },
  watch: {

  },
  created () {
    this.init()
  },
  mounted () {

  },
  methods: {

    async init () {
      const res = await list();
      if (res.status === 200) {
        res.data.forEach(element => {
          this.list.push({
            _id: element._id,
            total: element.total,
            avatarUrl: element.users[0].avatarUrl,
            nickName: element.users[0].nickName
          })
        });
        // this.list = res.data;
      }
      console.log(res)
    }
  },
};
</script>

<style scoped lang="scss">
</style>
