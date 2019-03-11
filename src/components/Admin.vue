<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- New pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class = "text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import NewPizza from './NewPizza';
export default {
  components: {
    "app-new-pizza" : NewPizza
  },
  computed: {
      getMenuItems: {
        set() {

        },
        get() {
          // return this.$store.state.menuItems
          return this.$store.getters.getMenuItems;
        }
      }
  },
  data() {
    return {
      // getMenuItems: []
    }
  },
  created() {
    fetch('https://wd1991145099otodfz.wilddogio.com/menu.json')
      .then(res => res.json())
      .then(data => {
        let menuArray = []
        for (const key in data) {
          data[key].id = key
          menuArray.push(data[key])
        }
        // this.getMenuItems = menuArray
        // 数据同步
        this.$store.commit('setMenuItems', menuArray)
      })
  },
  methods: {
      deleteData(item) {
        fetch('https://wd1991145099otodfz.wilddogio.com/menu/'+item.id+"/.json", {
          method: "DELETE",
          headers: {
            'Content-type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(res => {
          this.$store.commit('removeMenuItems',item)
        })
        // .then(data => 
        // this.$router.push('/menu'))
        .catch(err => console.log(err))
      }
  }
}
</script>
