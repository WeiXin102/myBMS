<template>
  <div>
    <el-table
      :data="tableTreeDdata"
      stripe
      size="mini"
      style="width: 100%;"
      row-key="id"
      v-loading="loading"
      element-loading-text="拼命加载中"
    >
      <!-- element-loading-text="测试"> -->
      <el-table-column prop="id" header-align="center" align="center" width="80" label="ID"></el-table-column>
      <el-table-column prop="name" header-align="center" treeKey="id" width="150" label="名称"></el-table-column>
      <el-table-column header-align="center" align="center" label="图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon || ''"></i>
        </template>
      </el-table-column>
      <el-table-column prop="type" header-align="center" align="center" label="类型">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 0" size="small">目录</el-tag>
          <el-tag v-else-if="scope.row.type === 1" size="small" type="success">菜单</el-tag>
          <el-tag v-else-if="scope.row.type === 2" size="small" type="info">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="url"
        header-align="center"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="菜单URL"
      ></el-table-column>
      <el-table-column
        prop="perms"
        header-align="center"
        align="center"
        width="150"
        :show-overflow-tooltip="true"
        label="授权标识"
      ></el-table-column>
      <el-table-column prop="orderNum" header-align="center" align="center" label="排序"></el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="185" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="primary" size="mini" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// let id = 1000;
export default {
  data() {
    return {
      loading: false,
      tableTreeDdata: [
        {
          id: 1,
          createBy: null,
          createTime: null,
          lastUpdateBy: null,
          lastUpdateTime: null,
          parentId: 0,
          name: "系统管理",
          url: null,
          perms: null,
          type: 0,
          icon: "el-icon-setting",
          orderNum: 0,
          delFlag: 0,
          parentName: null,
          level: 0,
          children: [
            {
              id: 2,
              createBy: null,
              createTime: null,
              lastUpdateBy: null,
              lastUpdateTime: null,
              parentId: 1,
              name: "用户管理",
              url: "/sys/user",
              perms: null,
              type: 1,
              icon: "el-icon-service",
              orderNum: 1,
              delFlag: 0,
              parentName: "系统管理",
              level: 1,
              children: [
                {
                  id: 9,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 2,
                  name: "查看",
                  url: null,
                  perms: "sys:user:view",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "用户管理",
                  level: 2,
                  children: []
                },
                {
                  id: 10,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 2,
                  name: "新增",
                  url: null,
                  perms: "sys:user:add",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "用户管理",
                  level: 2,
                  children: []
                },
                {
                  id: 11,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 2,
                  name: "修改",
                  url: null,
                  perms: "sys:user:edit",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "用户管理",
                  level: 2,
                  children: []
                },
                {
                  id: 12,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 2,
                  name: "删除",
                  url: null,
                  perms: "sys:user:delete",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "用户管理",
                  level: 2,
                  children: []
                }
              ]
            },
            {
              id: 3,
              createBy: null,
              createTime: null,
              lastUpdateBy: null,
              lastUpdateTime: null,
              parentId: 1,
              name: "机构管理",
              url: "/sys/dept",
              perms: null,
              type: 1,
              icon: "el-icon-news",
              orderNum: 2,
              delFlag: 0,
              parentName: "系统管理",
              level: 1,
              children: [
                {
                  id: 13,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 3,
                  name: "查看",
                  url: null,
                  perms: "sys:dept:view",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "机构管理",
                  level: 2,
                  children: []
                },
                {
                  id: 14,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 3,
                  name: "新增",
                  url: null,
                  perms: "sys:dept:add",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "机构管理",
                  level: 2,
                  children: []
                },
                {
                  id: 15,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 3,
                  name: "修改",
                  url: null,
                  perms: "sys:dept:edit",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "机构管理",
                  level: 2,
                  children: []
                },
                {
                  id: 16,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 3,
                  name: "删除",
                  url: null,
                  perms: "sys:dept:delete",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "机构管理",
                  level: 2,
                  children: []
                }
              ]
            },
            {
              id: 4,
              createBy: null,
              createTime: null,
              lastUpdateBy: null,
              lastUpdateTime: null,
              parentId: 1,
              name: "角色管理",
              url: "/sys/role",
              perms: null,
              type: 1,
              icon: "el-icon-view",
              orderNum: 4,
              delFlag: 0,
              parentName: "系统管理",
              level: 1,
              children: [
                {
                  id: 17,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 4,
                  name: "查看",
                  url: null,
                  perms: "sys:role:view",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "角色管理",
                  level: 2,
                  children: []
                },
                {
                  id: 18,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 4,
                  name: "新增",
                  url: null,
                  perms: "sys:role:add",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "角色管理",
                  level: 2,
                  children: []
                },
                {
                  id: 19,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 4,
                  name: "修改",
                  url: null,
                  perms: "sys:role:edit",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "角色管理",
                  level: 2,
                  children: []
                },
                {
                  id: 20,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 4,
                  name: "删除",
                  url: null,
                  perms: "sys:role:delete",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "角色管理",
                  level: 2,
                  children: []
                }
              ]
            },
            {
              id: 5,
              createBy: null,
              createTime: null,
              lastUpdateBy: null,
              lastUpdateTime: null,
              parentId: 1,
              name: "菜单管理",
              url: "/sys/menu",
              perms: null,
              type: 1,
              icon: "el-icon-menu",
              orderNum: 5,
              delFlag: 0,
              parentName: "系统管理",
              level: 1,
              children: [
                {
                  id: 21,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 5,
                  name: "查看",
                  url: null,
                  perms: "sys:menu:view",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "菜单管理",
                  level: 2,
                  children: []
                },
                {
                  id: 22,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 5,
                  name: "新增",
                  url: null,
                  perms: "sys:menu:add",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "菜单管理",
                  level: 2,
                  children: []
                },
                {
                  id: 23,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 5,
                  name: "修改",
                  url: null,
                  perms: "sys:menu:edit",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "菜单管理",
                  level: 2,
                  children: []
                },
                {
                  id: 24,
                  createBy: null,
                  createTime: null,
                  lastUpdateBy: null,
                  lastUpdateTime: null,
                  parentId: 5,
                  name: "删除",
                  url: null,
                  perms: "sys:menu:delete",
                  type: 2,
                  icon: null,
                  orderNum: 0,
                  delFlag: 0,
                  parentName: "菜单管理",
                  level: 2,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 53,
          createBy: null,
          createTime: null,
          lastUpdateBy: null,
          lastUpdateTime: null,
          parentId: 0,
          name: "渠道管理",
          url: "",
          perms: "",
          type: 0,
          icon: "el-icon-setting",
          orderNum: 1,
          delFlag: 0,
          parentName: null,
          level: 0,
          children: [
            {
              id: 56,
              createBy: null,
              createTime: null,
              lastUpdateBy: null,
              lastUpdateTime: null,
              parentId: 53,
              name: "首页",
              url: "/channel/view",
              perms: "",
              type: 1,
              icon: "el-icon-news",
              orderNum: 1,
              delFlag: 0,
              parentName: "渠道管理",
              level: 1,
              children: []
            }
          ]
        }
      ],
      data4: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    userData(user) {
      user.forEach(el => {
        if (el.meta) {
          el.id = el.meta.index;
          el.name = el.meta.title;
          el.url = el.path;
          el.name = el.meta.title;
          el.type = 1;
          el.icon = el.meta.icon;
          el.orderNum = 1;
          if (!el.parentId) {
            el.parentId = 0;
            el.type = 0;
          }
          if (el.children) {
            this.userData(el.children);
          }
        }
      });
    },
    getUserData() {
      let user = JSON.parse(
        JSON.stringify(this.$store.state.permission.addRoutes)
      );
      this.userData(user);
      user.pop();
      this.tableTreeDdata = user;
    },
    getInfo() {}
  },
  created() {
    this.getUserData();
  }
};
</script>
<style lang='scss' scoped>
</style>