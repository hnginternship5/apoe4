<template>

  <div>
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
