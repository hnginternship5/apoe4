<template>
    <div class="container-fluid" id="team">
        <div class="container">
            <!-- ALL COMPONENT MARKUP GOES HERE-->
            <h1 class="team-title">Meet the Team</h1>
            <h3 class="team-desc">The team ready and waiting to talk about the new APoe4 App and subsequent ideas.</h3>
          <div id="img-area">
	            <div class="team-member"><img src="@/assets/img/team/letoya2.jpg" class="rounded-circle py-5"><h4 class="member-name">Osato Letoya Joy</h4><p>Team Lead</p></div>
	            <div class="team-member"><img src="@/assets/img/team/s3.jpg" class="rounded-circle py-5"><h4 class="member-name">Seyi Imanah</h4><p>Front-End</p></div>
	            <div class="team-member"><img src="@/assets/img/team/ahmzyjazzy.jpg" class="rounded-circle py-5"><h4 class="member-name">Ahmed Olarenwaju</h4><p>Front-End</p></div>
	            <div class="team-member"><img src="@/assets/img/team/john.jpg" class="rounded-circle py-5"><h4 class="member-name">John Ademoye</h4><p>Front-End</p></div>
	            <div class="team-member"><img src="@/assets/img/team/zazah.jpg" class="rounded-circle py-5"><h4 class="member-name">Abdulhakeem Abdulazeez</h4><p>Front-End</p></div>
	            <div class="team-member"><img src="@/assets/img/team/jeff.jpg" class="rounded-circle py-5"><h4 class="member-name">Jeffrey Ogah</h4><p>Developer</p></div>
        </div>
        </div>
    </div>
</template>

<style scoped>

.team-title {
  margin-top: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: normal;
  text-align: center;
  color: #222121;
}

.team-desc {
  font-style: normal;
  font-size: 25px;
  text-align: center;
  line-height: normal;
  color: #000000;
}

#img-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 100px;
    width: 100%;
    margin: 50px 0;
    padding: 0 50px;
}

.team-member {
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#img-area img {
  max-width: 100%;
}

#img-area img {
  max-width: 100%;
  height: 200px;
}

.member-name {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: normal;
  text-align: center;
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
