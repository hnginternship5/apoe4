<template>

  <div>
    <h1> This is privacy </h1>
    <HeaderSection />
    <DetailSection />
  </div>
  
</template>

<script>
  import HeaderSection from '@/components/privacy/HeaderSection'
  import DetailSection from '@/components/privacy/DetailSection'

  export default {
    components: {
      HeaderSection,
      DetailSection
    },
    data() {
      return {
        
      }
    },
  }
</script>
