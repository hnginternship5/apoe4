<template>
    <div class="container-fluid">
        <div class="container">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
            
            <p class="contact" style="text-align:center; margin-top:30px">Contact us to find out more on how we can help you better</p>
            	<br></br>
						<form action="#">

								<section class="details">
									<div>
										<div>
											<label for="name">Name</label>
										</div>
										<input type="text" 
											name="name" 
											class="user-name"
											placeholder="Name" 
										>
									</div>

									<div>
										<div>
											<label for="email">Email</label>
										</div>
										<input type="email" 
											name="email" 
											class="user-email"
											placeholder="Email" 
										>
									</div>
								</section>

								<div>
									<div>
										<label for="message">Message</label>
									</div>
									<textarea name="message" id="" cols="70" rows="20"></textarea>
								</div>

								<div>
									<input type="submit" value="SEND" id="sub">
								</div>
						
					</form>
				
        </div>
    </div>
</template>

<style scoped>

	section {
		display: flex;
		justify-content: space-between;
		width: 50%;
		margin: 5% auto;
		text-align: center;
	}


	form {
		border: 2px solid #F2F2F2;
		width: 80%;
		text-align: center;
		margin: auto;
	}
	.user-name, .user-email {
		width: 100%;
	}

	p{
		font-size:2em;
		font-weight:bold;
	}

	#sub {
		border: 1px solid #1B8CFB;
		background-color: #1B8CFB;
		color: white;
		border-radius: 10px 10px 10px 10px;
		width:15%;
		font-weight: 600;
	  font-family: 'Open Sans', sans-serif;
	  font-size: 18px;
	  text-align: center;
	  text-indent: 5px;
	  cursor: pointer;
	  display: block;
	  margin: 5px auto;
	  margin-bottom: 40px;
	}

	label {
		font-size: 1.3rem;
	}

	h3{
		padding-top:50px;
		font-weight:600;
	}

	textarea {
		-webkit-appearance: none;
		-moz-appearance: none;
		background-color:#F2F2F2;
		appearance: none;
		font: 15px/1 'Open Sans', sans-serif;
		color: #333;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		border: 1px solid lightgrey;  
		border-radius: 3px;   
		box-shadow: none;   
		outline: none;   
		margin: 0;   
		box-sizing: border-box; 
		padding-bottom: 0;
	}

</style>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
