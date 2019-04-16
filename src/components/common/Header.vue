<template>
  <nav class="navbar container navbar-expand-lg px-3" id="navBar">
    <a href="index.html" class="navbar-brand">
      <img src="img/logo-blue.png" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle='collapse' data-target='#myNav'>
      <span class="navbar-icon">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="myNav">
      <ul class="navbar-nav">
        <li
            v-for="(link, i) in links"
            :key="i"
            @click="onClick($event, link)"
          >
            <router-link tag="a" class="col" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>

  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
      }
    }
  }
</script>