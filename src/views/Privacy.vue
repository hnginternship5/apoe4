<template>

  <div>
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
