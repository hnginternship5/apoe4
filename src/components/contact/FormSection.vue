<template>
    <div class="container-fluid">
        <div class="container">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
				<section class="formbox" align="center">
					<center>
						<form action="#" id="contact">
							<h3 align="center"><strong>Contact</strong></h3>
							<p align="center">Contact us to find out more on how we can help you better</p>
								<br></br>
						<table cellspacing="15px" cellpadding="10%">
							<tr>
								<td style="padding-bottom:0px; padding-top:0px;" id="left1"><label for="name">Name</label><br><input type="text" name="name"><br></br></td>
								<td style="padding-bottom:0px;padding-top:0px;"  id="right1"><label for="email" style="padding-right:10%;">E-mail</label><input type="email" width="100%" name="email"><br></br></td>
							</tr>
							<tr>
								<td style="padding-top:0px;">
									<label for="message">Message</label><br><textarea cols="20" rows="11" style="padding-top:1px;"  id="left2" name="message"  form="contact"></textarea>
								</td>
							</tr>
						</table>
						<button id="sub" type="submit" name="Send" >SEND</button>
					</form>
				</center>
			</section>
        </div>
    </div>
</template>

<style scoped>

</style>
	section {
	border: none;
	margin-top: 50%;
	}

table {
	padding-top:0;
	font-weight: bold;
}

#right1 {
	float:right;
	width:45%;
	height: 15%;
}
	
#left1 {
	float: left;
	width:50%;
	height: 15%;
}

#left2 {
	float: left;
	width:100%;
}
	

form {
	border: 2px solid #F2F2F2;
	width:70%; 
}

input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font: 15px/1 'Open Sans', sans-serif;
	color: #333;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color:#F2F2F2;
	border: 1px solid lightgrey; 
	border-radius: 3px;   
	box-shadow: none;   
	outline: none;   
	margin: 0;   
	box-sizing: border-box; 
	padding-bottom: 0;
}
	
p{
	font-size:1em;
	padding-bottom:0;
	font-weight:bold;
}

#sub {
	border: 1px solid #1B8CFB;
	background-color: #1B8CFB;
	color: white;
	border-radius: 10px 10px 10px 10px;
	width:18%;
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
	font-weight: normal !important;
}

h3{
	padding-top:50px;
	font-weight:600;
}

tr {
	padding-top:0px;
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
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
