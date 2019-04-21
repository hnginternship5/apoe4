<template>
  	<footer class="container-fluid" id="footer">
		<div class="container py-3" style="padding-bottom: 0 !important;">
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
					<form id="subscriber-form" @submit.prevent="sendSubscriberMail">
						<h4 class="text-left">Subscribe to our newsletter</h4>
						<input type="email" placeholder="Email address..." name="" value="" v-model="subscriber_email" required>
						<button class="text-uppercase nav-link btn-md btn-primary mt-3">Subscribe</button>
					</form>
				</div>
			</div>
			<div class="row">
				<div id="footer-text" class="col-md-12 py-3 mt-2">
					<span class="col-md-4 copyright-text">&copy; 2019, All rights reserved</span>
					<div id="social" class="col-md-2 offset-md-6">
						<a href=""><img src="@/assets/img/fb.png" alt="facebook" /></a>
						<a href=""><img src="@/assets/img/tw.png" alt="twitter" /></a>
						<a href=""><img src="@/assets/img/Inst.png" alt="instagram" /></a>
					</div>
				</div>
			</div>
		</div>
		
		<button id="scrollBut" @click="scrollToTop" style="background-color: #E5E5E5;display:none;position:fixed;bottom:10px;right:15px;outline:none;z-index:1;border:none;border-radius:20px;padding:15px;cursor:pointer;" type="button"><i class="fa fa-arrow-up"></i></button>
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

	.copyright-text {
		color:#fff;
		font-size:12px;
	}

	
	@media screen and (max-width: 800px) {
		
		#footer-text {
			flex-direction: column;
		}

		.copyright-text {
			order: 1;
			margin-top: 13px;
		}

		#social {
			width: 200px;
			order: 0;
		}

		#social img {
			width: 2.5rem;
			height: auto;
		}

		#subscriber-form button {
		    width: 100%;
		}
	}


</style>
<script>
import axios from 'axios';

 // Utilities
  import {
    mapGetters,
  } from 'vuex'
  export default {
    data() {
      return {
        subscriber_email: ''
      }
		},
		mounted() {
			//when the component is render to the dom then expose this function
			window.onscroll = function(){
				scrollUp();
			};
			//create scroll function, if user scrolls 40px from top, scroll button becomes visible
			function scrollUp(){
				if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
					document.getElementById("scrollBut").style.display = "block";
				}
				else {
					document.getElementById("scrollBut").style.display = "none";
				}
			};
		},
		computed: {
			...mapGetters(['links'])
		},
		methods: { 
				
			//button event
			scrollToTop (e) {
				e.stopPropagation()
				document.body.scrollTop =  0;
				document.documentElement.scrollTop = 0;
			},
			sendSubscriberMail (e,value){
				e.preventDefault();
				this.alertDisplay();
				this.resetForm();
				return;
				axios.post('https://api.apoe4.app/api/v1/mails/contact-form', 
					{ email: this.email },
					{ 
						headers: { 
							'Content-type': 'application/x-www-form-urlencoded',
					}
				}).then(response => console.log('response is: ', JSON.stringify(response, null, 2)) );
			},
			alertDisplay() {
				this.$swal('Newsletter', 'Thanks for subscribing', 'success');
			},
			resetForm(){
				this.subscriber_email = '';
			}
		}
			
	
  }
</script>