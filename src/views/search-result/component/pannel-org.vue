<template>
  <div class="org-wrapper text-wrapper">
    <h2 class="comm-title">{{title}}</h2>
    <ul>
      <li v-for="item in list" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'OrgPannel',
  data () {
    return {
      title: '合作机构',
      list: ['Courant Institute of Mathematical Sciences']
    }
  }

}
</script>
<style scoped>

</style>
