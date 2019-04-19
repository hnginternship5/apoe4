<template>
    <div class="container-fluid" id="about" :style="{ backgroundImage: 'url(' + require('@/assets/img/r29.png') + ')' }">
        <div class="container">
            <h1 class="font-weight-bold text-white">About</h1>
            <p class="text-white">Leading the way in Alzheimers Reasearch</p>
        </div>
    </div>
</template>

<style scoped>

    #about {
        background-repeat: no-repeat;
        background-position: right;
    }

    #about .container {
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
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
