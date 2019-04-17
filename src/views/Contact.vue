<template>

  <div>
    <h1> This is contact </h1>
    <MapSection />
    <FormSection />
    <AddressSection />
  </div>
  
</template>

<script>
  import MapSection from '@/components/contact/MapSection'
  import FormSection from '@/components/contact/FormSection'
  import AddressSection from '@/components/contact/AddressSection'

  export default {
    components: {
      MapSection,
      FormSection,
      AddressSection
    },
    data() {
      return {
        
      }
    },
  }
</script>
