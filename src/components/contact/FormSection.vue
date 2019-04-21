<template>
    <div class="container-fluid">
        <div class="row">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
            <div class="col-md-2">
			</div>
			<div class="col-md-8 contact-form">
				<div class="contact-form-details text-center">
					<h1 class="contact-form-heading">Contact</h1>
					<p class="contact-form-text">Contact us to find out more or how we can help you better.</p>
				</div>
				
				<div class="form">
					<form method="post" @submit.prevent="sendContactMail">
							<div class="row">
								<div class="form-group col-md-6 mt-4">
									<label for="name " class="label">Name</label>
									<input type="text" class="form-control input" id="name" placeholder="" name="" value="" v-model="name" required>
								</div>
								<div class="form-group col-md-6 mt-4">
									<label for="email " class="label">E-mail</label>
									<input type="email" class="form-control input" id="email" placeholder="" name="" value="" v-model="email" required>
								</div>
							</div>
							<div class="form-group mt-4">
								<label for="message " class="label">Message</label>
								<textarea class="form-control input" id="message" rows="9" name="" value="" v-model="message" required></textarea>
							</div>
							<div class="text-center">
							<button type="submit" class="btn btn-contact">Send</button>

							</div>
						
					</form>
				</div>
			</div>
			<div class="col-md-2">
			</div>
						
				
        </div>
    </div>
</template>

<style scoped>

	.contact-form{
		padding: 70px;
		background: #FFFFFF;
		box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.25);
		border-radius: 11px;
		margin-top: -140px;
	}

	.contact-form-heading{
		font-style: normal;
		font-weight: bold;
		font-size: 35px;
		line-height: normal;
		padding-bottom: 15px;

		color: #222121;
	}
	.contact-form-text{
		font-style: normal;
		font-size: 18px;
		line-height: normal;

		color: #000000;
	}

	.contact-form .label{
		font-style: normal;
		font-size: 16px;
		line-height: normal;
		padding-bottom: 5px;
		color: #000000;
			}
	.contact-form .input {
		background: #FAFAFA;
		border: 1px solid #BCBCBC;
		border-radius: 5px;
		
	}

	.btn-contact{
		background: #1B8CFB;
		border-radius: 10px;
		padding: 10px 30px;
		font-style: normal;
		font-weight: bolder;
		font-size: 14px;
		line-height: normal;
		text-transform: Uppercase;
		color: #FFFFFF;
		margin-top: 30px;
	}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
			name: '',
			email: '',
			message: '', 
       		show: false 
        }
	},
	methods: {
		sendContactMail (e,value){
			e.preventDefault();
			this.alertDisplay();
			this.resetForm();
			return;
			axios.post('https://api.apoe4.app/api/v1/mails/contact-form', 
				{ name: this.name, email: this.email, message: this.message },
				{ 
					headers: { 
						'Content-type': 'application/x-www-form-urlencoded',
				}
			}).then(response => console.log('response is: ', JSON.stringify(response, null, 2)) );
		},
		alertDisplay() {
			this.$swal('Contact Us', 'Thanks for contacting us, we hope to get back to you soon.', 'success');
		},
		resetForm(){
			this.name = '';
			this.email = '';
			this.message = '';
			this.show = false;
		}
	}
}
</script>
