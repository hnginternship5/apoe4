<template>
    <section class="mobile py-5" id="mobile">
    <div class="container">
      <!-- section title -->
      <div class="row col-10 mx-auto mb-5">
        <div class="mx-auto">
          
         <div class="feature-underline"></div>
        </div>
      </div>
      <!-- end of section title -->
      <div class="row">
       
        <!-- mobile -->
        <div class="col-10 mx-auto col-lg-7 text-left my-3">
        <h6 class="title-heading mt-5 text-uppercase">Built with precision</h6>
        <h2 class="bold-text">
        the APOE4 app
        </h2>
          <p class=" mx-auto text-muted">APOE-4 comes as a downloadable mobile app for iOS and Android devices. Our app is specially designed to offer users a reliable approach towards understanding the ins and outs of the Alzheimer's disease. Its user-friendly interface aids seamless health tracking and delivers the best tips for health improvement. Get the app on your mobile device today. </p>
           <div class="col mx-auto download-icon">
          <img src="@/assets/img/apple-icon.png" class="img-fluid my-3" style="width: 150px;">
          <img src="@/assets/img/google-icon.png" class="img-fluid my-3" style="width: 150px;">
        </div>
        </div>
        <!-- end of single feature -->
        <!-- single feature -->
         <div class="apoe-fones col-lg-5 mb-4 text-center my-3">
	        <div class=" column  mb-4 text-center">
	            <img src="@/assets/img/small-samsung.png" class="phone left-phone" style="height: 400px">
	        </div>
	        <div class=" column mb-4 text-center">
	            <img src="@/assets/img/big-samsung.png" class="right-phone" style="height: 500px">
	        </div>
	     </div>
       
        <!-- end of single feature -->
      </div>
    </div>
    </section>
</template>

<style scoped>
.apoe-fones {
  display: flex;
  justify-content: center;
}

.column {
 flex: 25%;
 padding: 5px;
}

.phone {
	margin-top: 80px;
	margin-right: -100px;
}

@media screen and (max-width: 800px) {

    .apoe-fones img {
      max-width: 100%;
      width: 233px;
      margin-right: 0;
    }

    .left-phone {
      height: 278px;
      position: relative;
      right: -67px;
    }

    .right-phone {
      height: auto;
      position: relative;
      left: -40px;
    }
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
