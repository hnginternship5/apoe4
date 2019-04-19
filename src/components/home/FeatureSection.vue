<template>
    <div class="container-fluid" id="feature">
        <div class="container py-5 px-4 mt-5">
            <div class="row">
                <div class="col-md-5">
                    <div class="row">
                        <div class="col-md-6 feature-group-left">
                            <div class="card feature-card">
                                <div class="card-header">
                                    <img src="@/assets/img/s-fea-icon-1.png" />
                                </div>
                                <div class="card-body px-0">
                                    <h3 class="feat-title">Daily Tips</h3>
                                    <p class="feat-desc">A daily dose on how to live better</p>
                                </div>
                            </div>
                            <div class="card feature-card">
                                <div class="card-header">
                                    <img src="@/assets/img/s-fea-icon-4.png" />
                                </div>
                                <div class="card-body px-0">
                                    <h3 class="feat-title">Get Informed</h3>
                                    <p class="feat-desc">Up-to-date news about ApoE4 lipoprotein gene</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 feature-group-right">
                            <div class="card feature-card">
                                <div class="card-header">
                                    <img src="@/assets/img/s-fea-icon-5.png" />
                                </div>
                                <div class="card-body px-0">
                                    <h3 class="feat-title">Group Discussion</h3>
                                    <p class="feat-desc">Get to meet and interact with people about APOE4</p>
                                </div>
                            </div>
                            <div class="card feature-card">
                                <div class="card-header">
                                    <img src="@/assets/img/s-fea-icon-3.png" />
                                </div>
                                <div class="card-body px-0">
                                    <h3 class="feat-title">Map Information</h3>
                                    <p class="feat-desc">This gives you a guide of places to visit to get more information and care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="offset-md-2 col-md-5 py-5 text-right">
                    <p style="text-transform: uppercase; font-weight: 500;">Who we are</p>
                    <h2 class="bold-text">Paving the <br> Way </h2>
                    <p class="feat-desc-long">ApoE4 is a personal monitoring/analysis application for patients who have the ApoE4 lipoprotein gene
                        - a major pointer for late onset Alzheimer's</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #feature {
        background: #fdfdfd;
    }

    .feature-group-left {
        position: relative;
        top: -90px;
    }

    .feature-group-right {
        position: relative;
        top: 100px;
    }

    .feature-card {
        height: 40%;
        padding: 1rem;
        margin: 0 0 2rem 0;
        border: 0px solid #fff !important;
        box-shadow: 0px 5px 11px 15px rgba(0,64,128,0.05);
    }

    .feature-card .card-header {
        background: white;
        border: 0px solid #fff;
        padding: 0 0;
    }

    .feat-title {
        font-size: 1.4rem;
        font-weight: 600;
    }

    .feat-desc-long {
        text-align: justify;
    }

    .bold-text {
        font-weight: bolder;
        line-height: 50px;
        text-align: right;
        color: #222121;
    }

     /* responsive css for page */

    @media screen and (max-width: 800px) {

        .bold-text {
            font-weight: bolder;
            font-size: 24px;
        }

        .feature-group-left,
        .feature-group-right {
            position: relative;
            top: 0;
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
