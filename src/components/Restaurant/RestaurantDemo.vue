<template>
    <div>
        <div v-if="showTableSet">
            <v-btn @click="gotoTable()">Enter table</v-btn>
        </div>
        <MenuDemo v-if="!showTableSet"/>
    </div>
</template>
  
<script>
import MenuDemo from './Menu/MenuDemo.vue';

export default {
    name: 'RestaurantDemo',
    components : {
        MenuDemo
    },
    data: () => ({
        showTableSet : true,
    }),
    methods: {
        gotoTable () {
            this.showTableSet = false
        }
    }
}
</script>