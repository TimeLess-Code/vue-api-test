<template>
  <div>
    <CatFacts v-if="tab === '2'" />
    <BoredActivities v-if="tab === '3'" />
    <BtcIndex v-if="tab === '4'" />
    <RestaurantDemo id="Menu" v-if="tab === '5'" />
  </div>

</template>

<script>

import CatFacts from './CatFacts/CatFacts.vue';
import BoredActivities from './Activities/BoredActivities.vue'
import BtcIndex from './BTC/BtcIndex.vue';
import RestaurantDemo from './Restaurant/RestaurantDemo.vue';

export default {
  name: 'HomePage',
  components : {
    CatFacts,
    BoredActivities,
    BtcIndex,
    RestaurantDemo
  },
  props : {
    tab : String,
  },
  data: () => ({
    inputModel : '',
  }),
  methods: {

  }
}
</script>