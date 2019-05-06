<template>
  <footer class="pt-3 pb-3" id="footer">
    <div class="container" style="padding-top:50px;">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
          <div class="logo-img">
            <a href="/">
              <img src="@/assets/img/logo-blue.png" alt="logo" id="logo" class="footer-logo">
            </a>
          </div>

          <div class="footer-links">
            <ul class="pt-5 pl-0 d-flex">
              <li v-for="(link, i) in links" :key="i" class="mr-3 p-0">
                <router-link tag="a" class class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
          <form id="subscriber-form" @submit.prevent="sendSubscriberMail">
            <h6 class="text-white mb-3">Subscribe to our newsletter</h6>
            <input
              class="p-2"
              type="email"
              placeholder="Email address..."
              name
              value
              v-model="subscriber_email"
              required
            >
            <button class="text-uppercase btn mt-4 btn-primary p-2">Subscribe</button>
          </form>
        </div>
      </div>
      <hr style="background-color:#fff;">
      <div class="row col-12 pt-5">
        <div class="copyright d-flex justify-content-start col-6">
          <span class="copyright-text">&copy; 2019 All rights reserved</span>
        </div>

        <div id="social" class="d-flex justify-content-end col-6">
          <a href="#" class="mr-3">
            <img src="@/assets/img/fb.png" alt="facebook">
          </a>
          <a href="#" class="mr-3">
            <img src="@/assets/img/tw.png" alt="twitter">
          </a>
          <a href="#" class="mr-3">
            <img src="@/assets/img/Inst.png" alt="instagram">
          </a>
        </div>
      </div>
    </div>

    <button
      id="scrollBut"
      @click="scrollToTop"
      style="background-color: #E5E5E5;display:none;position:fixed;bottom:10px;right:15px;outline:none;z-index:1;border:none;border-radius:20px;padding:15px;cursor:pointer;"
      type="button"
    >
      <i class="fa fa-arrow-up"></i>
    </button>
  </footer>
</template>

<style scoped>
#footer {
  background-color: #1c1c1c;
}

#footer .footer-logo {
  max-width: 100%;
  height: 50px;
}

#footer ul li a {
  color: #ffffff;
  font-weight: 400;
}

/* subscribe form */

#subscriber-form {
  text-align: left;
}

#subscriber-form h6 {
  font-style: normal;
  line-height: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

#subscriber-form input {
  border: none;
  width: 100%;
  border-radius: 33px;
  background: #ffffff;
}

#subscriber-form button {
  border: none;
  border-radius: 30px;
  font-size: 14px;
  transition: all ease-in 0.3s;
}

#subscriber-form button:hover {
  background-color: #0060c8;
  transition: all ease-in 0.3s;
}

#social img {
  max-width: 100%;
  width: 1.5em;
}

.copyright-text {
  color: #fff;
  font-size: 12px;
}

/*	placeholder styling*/
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  padding-left: 15px;
  font-size: 14px;
  /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  padding-left: 15px;
  font-size: 14px;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  padding-left: 15px;
  font-size: 14px;
}

/*	placeholder styling*/

@media screen and (max-width: 800px) {
  #social img {
    width: 1.3em;
    height: auto;
  }
}
</style>
<script>
import axios from "axios";

// Utilities
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      subscriber_email: ""
    };
  },
  mounted() {
    //when the component is render to the dom then expose this function
    window.onscroll = function() {
      scrollUp();
    };
    //create scroll function, if user scrolls 40px from top, scroll button becomes visible
    function scrollUp() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("scrollBut").style.display = "block";
      } else {
        document.getElementById("scrollBut").style.display = "none";
      }
    }
  },
  computed: {
    ...mapGetters(["links"])
  },
  methods: {
    //button event
    scrollToTop(e) {
      e.stopPropagation();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    sendSubscriberMail(e, value) {
      e.preventDefault();
      this.alertDisplay();
      this.resetForm();
      return; //api not yet working
      axios
        .post(
          "https://api.apoe4.app/api/v1/mails/subscribe-chimp",
          {
            email: this.email
          },
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(response =>
          console.log("response is: ", JSON.stringify(response, null, 2))
        );
    },
    alertDisplay() {
      this.$swal("Newsletter", "Thanks for subscribing", "success");
    },
    resetForm() {
      this.subscriber_email = "";
    }
  }
};
</script>
