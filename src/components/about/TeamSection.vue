<template>
    <div class="container-fluid" id="team">
        <div class="container">
          <!-- ALL COMPONENT MARKUP GOES HERE-->
          <h1>Meet the Team</h1>
          <h3>The team ready and waiting to talk about the new APoe4 App and subsequent ideas.</h3>
          <div id="img-area">
            <span><img src="@/assets/img/team/letoya2.jpg" class="rounded-circle"><h4>Osato Letoya Joy</h4><p>Team Lead</p></span>
            <span><img src="@/assets/img/team/s3.jpg" class="rounded-circle"><h4>Seyi Imanah</h4><p>Front-End</p></span>
            <span><img src="@/assets/img/team/ahmzyjazzy.jpg" class="rounded-circle"><h4>Ahmed Olarenwaju</h4><p>Front-End</p></span>
            <span><img src="@/assets/img/team/john.jpg" class="rounded-circle"><h4>John Ademoye</h4><p>Front-End</p></span>
            <span><img src="@/assets/img/team/zazah.jpg" class="rounded-circle"><h4>Abdulhakeem Abdulazeez</h4><p>Front-End</p></span>
            <span><img src="@/assets/img/team/jeff.jpg" class="rounded-circle"><h4>Jeffrey Ogah</h4><p>Developer</p></span>
         </div>
        </div>
    </div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Poppins');
	@import url('https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins');

#team h1 {
  margin-top: 100px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: normal;
  text-align: center;
  color: #222121;

}

#team h3 {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  line-height: normal;
  color: #000000;
}
#team img {
  width: 217px;
  height: 217px;
  border-radius: 100%;
  margin-top: 50px;
}

#team #img-area {
  content: '';
  clear: both;
}

#team #img-area span {
	display: inline;
	float: left;
  margin-left: 100px;
}
#team #img-area span h4, 
#team #img-area span p {
	text-align: center;
	font-family: Nunito Sans;
	font-style: normal;
	font-weight: 800;
	font-size: 22px;
	line-height: normal;
	text-align: center;
	color: #000000;
	margin-top: 10px;
}
#team #img-area span p {
	font-size: 16px;
	font-weight: 600;
}
#team .img-area:after {
    content: "";
    display: block;
    clear: both;
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
