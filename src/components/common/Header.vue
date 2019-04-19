<template>

  <header class="container-fluid" id="header">
    <nav class="navbar container navbar-expand-lg px-3" >
       <router-link tag="a" class="col" class-active="active" to="/" exact>
        <img src="@/assets/img/logo-blue.png" style="height: 48px; max-width: 100%;" alt="logo">
      </router-link>
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
              class="col"
            >
              <router-link tag="a" class="nav-item" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
          </li>
          <li>
            <a class="btn button" class-active="active" href="#">Get app</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<style scope>

  #header {
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgba(0,64,128,0.05);
    width: 100%;
    line-height: 50px;
    position: fixed;
    z-index: 2;
    top: 0;
  }

  #header ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #header li {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a,
  a:hover {
    font-weight: 600;
    text-transform: uppercase;
  }


</style>

<script>

  // Utilities
  import {
    mapGetters,
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
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
      }
    }
  }
</script>