<template>
    <div class="container-fluid">
        <div class="container mobile-section">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
            	<div class="mobile-description">
            		<span>Built with Precision</span>
            		<h1>The Apoe4 App</h1>
            	 		<p>Lorem ipsum dolor sit amet, consectetur adderhukk gses serw wear <br>tfhhn ikly teyh iuhjkik ipiscng elit, sed do eiusmod tempor incididt brtseryl<br> gdrw hyet gredg juyfb dder ujkl gresc unt ut labore et dolore magna aliqua<br> dotrgtt gretaer gtrar ipsij lerdf drese gtre fddtg ftre tg fthytf berde frefghh<br> fderb ggfdr hgfddd jygyj btreatesr ipsum reyh fers yljy bseuytgb gcfrfv</p>
            		<div class="download-buttons">
            			<img src="@/assets/img/apple-icon.png" alt="apple icon">
            			<img src="@/assets/img/google-icon.png" alt="google icon">
            		</div> 
            	</div>
            	<div class="mobile-advert">
            		<img src="@/assets/img/Dark.png" alt="apple icon">
        			<img src="@/assets/img/Dark2.png" alt="google icon">
            	</div>
        </div>
    </div>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Poppins');
	.mobile-section {
		margin-top: 10%;
	}
	.mobile-description {
		float: left;
	}
	.mobile-description span {
		font-family: Poppins;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: normal;
		letter-spacing: 0.26em;
		color: #222121;
	}
	.mobile-description h1 {
		width: 353px;
		height: 68px;
		font-family: Poppins;
		font-style: normal;
		font-weight: 800;
		font-size: 45px;
		line-height: normal;
		color: #222121;
	}
	.mobile-description p {
		text-align: justify;
		line-height: 1.5;
		font-size: 1rem;
		color: #222121;
	}
	.download-buttons img {
		/*width: 150px;
		height: 53px;*/
		width: 25%;
		margin-top: 50px;
	}
	.download-buttons img:last-child {
		margin-left: 20px;
	}
	.mobile-advert {
		float: right;
		position: relative;
		left: 10%;
		bottom: 400px;
	}
	.mobile-advert img:first-child {
		/*width: 295px;
		height: 476px;*/
		width: 40%;
		position: relative;
		left: 15%;
	}
	.mobile-advert img:last-child {
		/*width: 385px;
		height: 621px;*/
		width: 60%;
	}
	.mobile-section:after {
		 content: '';
	    display: block;
	    clear: both;	
	}
	@media screen and (max-width: 1024px) {
		.mobile-advert {
			position: relative;
			left: 23%;
		}
		.mobile-advert img:first-child {
			width: 30%;
		}
	.mobile-advert img:last-child {
			width: 50%;
		}		
	}
	@media screen and (max-width: 800px) {
		.mobile-advert {
		float: right;
		position: relative;
		left: 0;
		bottom: 0px;
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
