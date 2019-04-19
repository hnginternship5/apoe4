<template>
    <div class="container-fluid">
        <div class="container">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
            <div class="contact">
            <img class="contact-image" src="../../assets/img/location.png" alt="apoe4 location">
            <h5 class="contact-heading">ADDRESS</h5>
            <p>Care+ Family Parham Bridges</p>
            <p>Canton Jackson MS 39211</p>
            </div>
            <div class="contact">
                <img class="contact-image" src="../../assets/img/phonecall.png" alt="call apoe4">
                <h5 class="contact-heading">CALL US</h5>
                <a href="tel:+2348012334590">+2348012334590</a></br></br>
                <a href="tel:+2348012345678">+2348012345678</a>
            </div>    
            <div class="contact">
                <img class="contact-image" src="../../assets/img/mail.png" alt="mail apoe4">
                <h5 class="contact-heading">SAY HELLO</h5>
                <a href="mailto:apoe4@hng.com">apoe4@hng.com</a></br></br>
                <a href="mailto:hello@apoe4.com">hello@apoe4.com</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
            margin-top: 80px;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: baseline;
        }
        .contact{
            margin: 30px;
            text-align: center;
            align-items: center;
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
