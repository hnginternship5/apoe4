<template>
    <section class="container-fluid py-5">
    <div class="container">
      
      <div class="row">
       
        <!-- mobile -->
        <div class="col-12 mx-auto col-lg-7 text-left my-3">
          <h6 style="padding:8px;" class="title-heading mt-5 text-uppercase">Built with precision</h6>
          <h2 class="bold-text">
          The Apoe4 App
          </h2>
          <p class="mx-auto text-muted">APOE-4 comes as a downloadable mobile app for iOS and Android devices. Our app is specially designed to offer users a reliable approach towards understanding the ins and outs of the Alzheimer's disease. Its user-friendly interface aids seamless health tracking and delivers the best tips for health improvement. Get the app on your mobile device today. </p>
          <div class="col download-icon px-0">
            <a href="#"><img src="@/assets/img/apple-icon.png" class="img-fluid my-3" style="width: 150px; height:53px"></a>
            <a href="https://play.google.com/store/apps/details?id=hng.tech.apoe_4"><img src="@/assets/img/google-icon.png" class="img-fluid my-3" style="width: 150px; height:53px"></a>
          </div>
        </div>
        <!-- end of single feature -->
        <!-- single feature -->
         <div class="apoe-fones col-lg-5 mb-4 text-center my-3">
	        <div class="mb-4 text-center left-column">
	            <img src="@/assets/img/small-samsung.png" class="phone left-phone">
	        </div>
	        <div class="mb-4 text-center right-column">
	            <img src="@/assets/img/big-samsung.png" class="right-phone">
	        </div>
	     </div>
       
        <!-- end of single feature -->
      </div>
    </div>
    </section>
</template>

<style scoped>
*{
  font-family: 'Raleway', sans-serif;
}
.apoe-fones {
  display: flex;
  justify-content: center;
}

.left-column {
  align-self: center;
}

.left-column img {
  position: relative;
  right: -100px;
}

.left-phone {
  height: 400px;
}

.right-phone {
  height: 500px;
}

@media screen and (max-width: 800px) {

    .apoe-fones {
      display: grid;
      grid-template-columns: 5fr 2fr;
      width: 100vW;
    }

    .left-phone {
      height: 263px;
      width: 50%;
      position: absolute !important;
      top: 8%;
      left: 0;
      right: 0;
    }

    .right-phone {
      width: 209px;
      height: 300px;
    }

    .download-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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
