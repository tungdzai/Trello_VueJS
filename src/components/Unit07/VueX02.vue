<template>
<div>
    VueX02+{{count}}
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'VueX02',
    computed: {
      ...mapState([
        'count'
      ])
    }
  }
</script>