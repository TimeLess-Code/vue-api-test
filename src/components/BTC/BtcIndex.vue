<template>
    <div>
        <v-autocomplete
        v-model="chipModel"
        :items="indexList"
        item-text="chartName"
        multiple
        deletable-chips
        hide-no-data
        chips
        >

        </v-autocomplete>
    </div>
</template>
<script>
import * as btcService from './Btc.service'
export default {
    name : 'BtcIndex',
    data : () => ({
        index : { time: undefined, bpi : undefined, name : undefined, disclaimer : undefined },
        indexList : [],
        chipModel : []
    }),
    methods: {
        loadData () {
            btcService.getBtcIndex().then(response => {
                this.multiplyData(response)                
            })
        },
        multiplyData (response) {
            for (let i = 0; i < 3; i++) {
                this.indexList.push(response)
            }
        }
        /* Crear filtro por moneda */
    },
    beforeMount() {
        this.loadData()
    },
    mounted() {
        /* setInterval(this.loadData(), 5000); */
    },
}
</script>