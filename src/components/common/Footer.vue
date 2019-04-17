<template>
  <footer>
  	<div id="logo-area">
  		<img src="@/assets/img/logo-blue.png"  alt="logo" id="logo">
  		<form id="subscriber-form">
  			<h4>Subscribe to our newsletter</h4>
  			<input type="text" placeholder="Email address...">
  			<br>
  			<button>Subscribe</button>
  		</form>
  	</div>
  	<div id="footer-link">
  		<ul>
			  <li
              v-for="(link, i) in links"
              :key="i"
              class="col"
            >
              <router-link tag="a" class="" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
          </li>
  		</ul>
  		<hr>
  		<div id="footer-text">
  			<span>&copy; 2019, All rights reserved</span>
  			<div id="social">
  				<img src="@/assets/img/fb.png" alt="facebook" />
  				<img src="@/assets/img/tw.png" alt="twitter" />
  				<img src="@/assets/img/Inst.png" alt="instagram" />
  			</div>
  		</div>
  	</div>
  </footer>
</template>

<style scoped>
	footer {
		background-color: #1C1C1C;
		height: 318px;
		width: 100%;
		position: relative;
		top: 100px;
	}
	#logo-area img {
		height: 48px; 
		max-width: 100%;
		float: left;
		position: relative;
		top: 100px;
		margin-left: 142px;
	}
	#logo-area form {
		float: right;
		position: relative;
		top: 100px;
		margin-right: 142px;
	}
	#logo-area form input {
		width: 434px;
		height: 43px;
		border-radius: 33px;
		padding-left: 10px;
		background: #ffffff;
		border: none;
	}
	#logo-area form button {
		width: 110px;
		height: 47px;
		background: #0272E0;
		border-radius: 12px;
		padding: 10px;
		text-align: center;
		color: #ffffff;
		margin-top: 10px;
		border: none;

	}
	#subscriber-form h4 {
		font-family: Nunito Sans;
		font-style: normal;
		font-weight: 800;
		font-size: 18px;
		line-height: normal;
		color: #FFFFFF;
		text-transform: uppercase;
	}
	#logo-area:after {
		content: "";
		clear: both;
		display: block;
	}
	#footer-link {
		margin-top: 80px;
		margin-left: 90px;
	}
	#footer-link ul li {
		display: inline;
		margin-left: 20px;
		font-family: Nunito Sans;
		font-style: normal;
		font-weight: 800;
		font-size: 14px;
		line-height: normal;
		color: #FFFFFF;

	}
	#footer-link ul li a {
		color: #ffffff;
	}
	#footer-link li {
		list-style-type: none;
	}
	#footer-link a {
		text-decoration: none;
	}
	hr {
		background-color: #ffffff;
		width: 80%;
		position: absolute;
		left: 150px;
	}
	#footer-text {
		margin-top: 50px;
	}
	#footer-text span {
		float: left;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: normal;
		color: #FFFFFF;
		margin-left: 50px;
	}
	#footer-text img {
		float: right;
		width: 17px;
		height: 17px;
		margin-left: 10px;
	}
	#social {
		margin-right: 120px;
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