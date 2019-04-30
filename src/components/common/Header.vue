<template>
   
  <nav class="navbar navbar-expand-lg px-3 bg-light navbar-light sticky-top" id="navBar">
  <div class="container">
    <a href="/" class="navbar-brand">
      <img src="@/assets/img/logo-blue.png" alt="logo">
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
            class="col"
            @click="closeNav" 
          >
            <router-link tag="a" class="nav-link text-uppercase" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
        </li>
        <li>
          <a class="text-uppercase nav-link btn-lg btn-primary btn px-5" role="button" href="#">Get app</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<style scope>

:root{
  --mainBlue:#1B8CFB;
  --mainBlack:#222121;
}

.bg-default, .navbar-default {
  background-color: #fff!important;
}

.navbar-brand img {
  height: 48px;
  max-width: 100%;
}

.navbar{
  box-shadow: 0px 5px 10px 0px rgba(0,64,128,0.05);
}

.navbar-expand-lg .navbar-nav .nav-link {
    font-size: 1rem;
    font-weight: 600;
    color: var(--mainBlack);
}

.navbar-light .navbar-nav .nav-link{
  color: var(--mainBlack);
}
.nav-link.active,
.router-link-active {
  color: var(--mainBlue) !important;
  /*border-bottom: 4px solid #6c63ff;*/
}

.nav-link.active a {
  color: var(--mainBlue) !important;
}

.navbar-toggler{
  outline-color: var(--mainBlue)!important;
}
.nav-link{
  color: var(--mainBlack);
  text-transform: capitalize;
}
.nav-link:hover{
  color: var(--mainBlue);
}


a.btn {
  color: #fff!important;
}

@media screen and (min-width: 900px) {
    li.nav-btn {
      padding-left: 3rem!important;
  }

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
      closeNav (e, item) {
        e.stopPropagation()
        const nav = document.querySelector('.collapse')
        if (!nav.classList.contains('show')) return
        nav.classList.remove('show');
      }
    }
  }
  
</script>