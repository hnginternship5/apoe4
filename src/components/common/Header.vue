<template>
   
  <nav class="navbar navbar-expand-lg px-3 bg-light navbar-light sticky-top" id="navBar">
  <div class="container">
    <a href="index.html" class="navbar-brand">
      <img src="@/assets/img/logo-blue.png" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle='collapse' data-target='#myNav'>
      <span class="navbar-icon">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <!--  -->
    <div class="collapse navbar-collapse justify-content-end" id="myNav">
      <ul class="navbar-nav">
        <li class="nav-item active px-2">
          <a href="#navBar" class="nav-link text-uppercase">
            Home
          </a>
        </li>
        <li class="nav-item px-2">
          <a href="features.html" class="nav-link text-uppercase">
            about
          </a>
        </li>
        <li class="nav-item px-2">
          <a href="#mobile" class="nav-link text-uppercase">
            contact
          </a>
        </li>
        <li class="nav-item pl-2 pr-5">
          <a href="contact.html" class="text-uppercase nav-link">
            privacy
          </a>
        </li>
        <li class="nav-item nav-btn ">
          <a href="contact.html" class="text-uppercase nav-link btn-lg btn-primary btn px-5" role="button">
            Get App
          </a>
        </li>
      </ul>
      <!-- end of nav element -->
    </div>
    </div>
  </nav>
</template>

<style scope>

:root{
  --mainBlue:#1B8CFB;
  --mainBlack:#222121;
}

body {
  font-size: 1.5rem;
  line-height: 2rem;
}

bg-default, navbar-default {
  background-color: #fff!important;
}

#logo {
  
}

 .navbar-brand img {
  height: 64px;
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
.nav-item.active {
  color: var(--mainBlue) !important;
  /*border-bottom: 4px solid #6c63ff;*/
}

.nav-item.active a {
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
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
      }
    }
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
  
</script>