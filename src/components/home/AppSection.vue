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
          <p class=" mx-auto text-muted">You can download our mobile application on the Apple or Google playstore to have access to numerous awesome features. We believe health is wealth, that's why our team of great researchers are working so hard everyday to provide a better experience for you while using the app. Dont forget to click one of the button below.</p>
           <div class="col mx-auto download-icon">
          <img src="@/assets/img/apple-icon.png" class="img-fluid my-3" style="width: 150px;">
          <img src="@/assets/img/google-icon.png" class="img-fluid my-3" style="width: 150px;">
        </div>
        </div>
        <!-- end of single feature -->
        <!-- single feature -->
         <div class="apoe-fones col-lg-5 mb-4 text-center my-3">
	        <div class=" column  mb-4 text-center">
	            <img src="@/assets/img/small-samsung.png" class=" phone" style="height: 400px">
	        </div>
	        <div class=" column mb-4 text-center">
	            <img src="@/assets/img/big-samsung.png" class="" style="height: 500px">
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
</style>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
