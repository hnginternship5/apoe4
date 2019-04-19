<template>
  	<footer class="container-fluid" id="footer">
		<div class="container py-5">
			<div class="row">
				<div class="col-md-5">
					<img src="@/assets/img/logo-blue.png"  alt="logo" id="logo" class="footer-logo">
					<ul class="mt-5">
						<li
						v-for="(link, i) in links"
						:key="i"
						class="col"
					>
						<router-link tag="a" class="" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
					</li>
					</ul>
				</div>
				<div class="col-md-5 offset-md-2 text-right">
					<form id="subscriber-form">
						<h4 class="text-left">Subscribe to our newsletter</h4>
						<input type="text" placeholder="Email address...">
						<button class="btn btn-primary mt-3">Subscribe</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div id="footer-text" class="col-md-12 py-3">
					<span class="col-md-4" style="color:#fff;font-size:12px;">&copy; 2019, All rights reserved</span>
					<div id="social" class="col-md-2 offset-md-6">
						<a href=""><img src="@/assets/img/fb.png" alt="facebook" /></a>
						<a href=""><img src="@/assets/img/tw.png" alt="twitter" /></a>
						<a href=""><img src="@/assets/img/Inst.png" alt="instagram" /></a>
					</div>
				</div>
			</div>
		</div>
		
<button id="scrollBut" style="background-color: #222121;display:none;position:fixed;bottom:10px;right:15px;ouline:none;z-index:1;border:none;border-radius:20px;padding:15px;cursor:pointer;" onclick="scrollToTop()" type="button"><i class="fa fa-arrow-up"></i></button>
  </footer>
</template>

<style scoped>
	#footer {
		background-color: #1C1C1C;
		width: 100%;
		position: relative;
	}

	#footer .footer-logo {
		max-width: 100%;
		height: 50px;
	}

	#footer ul {
		list-style-type: none;
		display: flex;
		padding: 0;
	}

	#footer ul li {
		padding-left: 0;
	}

	#footer ul li a {
		color: #ffffff;
		font-weight: 400;
	}

	/* subscribe form */

	#subscriber-form {
		text-align: left;
	}

	#subscriber-form h4 {
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		color: #FFFFFF;
		text-transform: uppercase;
		font-size: 1.2rem;
	}

	#subscriber-form input {
		height: 43px;
		width: 100%;
		border-radius: 33px;
		padding-left: 10px;
		background: #ffffff;
		border: none;
	}

	#subscriber-form button {
		background: #1B8CFB;
		border-radius: 33px;
	}

	#footer-text {
		border-top: 1px solid rgb(204, 204, 204);
		padding: 0px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}

	#social {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#social img {
		max-width: 100%;
		height: 16px;
		width: 16px;
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
window.onscroll = function(){
scrollUp();};

//create scroll function, if user scrolls 40px from top, scroll button becomes visible

function scrollUp(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		document.getElementById("scrollBut").style.display = "block";
	}
	else {
		document.getElementById("scrollBut").style.display = "none";
	}
};
//create function which takes user to the top upon clicking

function scrollToTop(){
	document.body.scrollTop =  0;
	document.documentElement.scrollTop = 0;
}
    }
	
  }
</script>