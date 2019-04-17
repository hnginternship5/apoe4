<template>

  <div>
    <HeaderSection />
    <AboutSection />
    <TeamSection />
  </div>
  
</template>

<script>
  import HeaderSection from '@/components/about/HeaderSection'
  import AboutSection from '@/components/about/AboutSection'
  import TeamSection from '@/components/about/TeamSection'

  export default {
    components: {
      HeaderSection,
      AboutSection,
      TeamSection
    },
    data() {
      return {
        
      }
    },
  }
</script>
