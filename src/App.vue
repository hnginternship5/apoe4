<template>
  <div>

    <Header/>
    <CoreView/>
    <CoreFooter/>

  </div>
</template>

<script>
import Header from '@/components/common/Header'
import CoreView from '@/components/common/View'
import CoreFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    CoreView,
    CoreFooter,
  },
  data () {
    return {
      //
    }
  }
}
</script>
