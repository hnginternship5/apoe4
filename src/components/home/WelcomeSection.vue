<template>
  <!-- header section -->
  <section class="container-fluid welcome mb-5 first-section-reset">
    <div class="container">
      <!-- end of section title -->
      <div class="row">
        <!-- featured info -->
        <div class="col-12 mx-auto col-lg-8 featured-info mt-5 my-3">
          <div class="row height-max align-items-left">
            <div class="col text-left pr-5">
               <h6 class="title-heading mt-5 text-uppercase">introducing apoe4</h6>
              <h2 class="mt-4 bold-text">Leading the way<br class="hide-sm-sc"> in Alzheimer's Reasearch</h2>
              <p class="mt-4 feat-desc-long">A progressive disease that destroys memory and other important mental functions.</p>
              <router-link tag="a" class="btn btn-primary btn-lg mt-5" role="button" class-active="active" to="/about" exact>Learn more</router-link>
            </div>
          </div>
        </div>
        <!-- featured img -->
        <div class="col-12 mx-auto col-lg-4 featured-img align-self-center mt-5 my-3">
          <!-- img container -->
          <div class="img-container">
            <img src="@/assets/img/header-artwork.png" alt="" class="img-fluid featured-photo">
          </div>
        </div>

      </div>
    </div>
  </section>
  <!--end of  header section -->
</template>

<style scoped>
	.welcome {
        background: linear-gradient(180deg, #BEE4FF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
        margin-bottom: 6rem !important;
	}
	

    header button, 
    .header-btn,
    .header-btn:hover {
    background-color: var(--mainBlue);
    color: #fff;
    border: solid 2px var(--mainBlue);
    border-radius: .5rem;
    padding: .5rem;
    /* padding-left: 1.6rem; */
    text-decoration: none;
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 150px;
    }

    .feat-desc-long {
        text-align: justify;
    }

    .bold-text {
        font-weight: bolder;
        line-height: 50px;
        text-align: left;
        color: #222121;
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
