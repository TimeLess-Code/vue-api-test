<template>
  <div>
    <CatFacts v-if="msg === '2'" />
    <BoredActivities v-if="msg === '3'" />
  </div>

</template>

<script>

import CatFacts from './CatFacts/CatFacts.vue';
import BoredActivities from './Activities/BoredActivities.vue'

export default {
  name: 'HomePage',
  components : {
    CatFacts,
    BoredActivities
  },
  props : {
    msg : String,
  },
  data: () => ({
    inputModel : '',
  }),
  methods: {

  }
}
</script>