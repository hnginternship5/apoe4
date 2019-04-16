<template>
  <div id="home" class="pb-0">
      <router-view  v-show="show" />
  </div>
</template>

<script>
export default {
  created(){
   this.show = true
  }
}
</script>
