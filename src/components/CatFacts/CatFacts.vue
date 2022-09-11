<template>
    <div class="ma-5">
        <p>{{info}}</p>
    </div>
</template>

<script>
import * as CatFactsService from './CatFacts.service'
export default {
    name : 'CatFacts',
    data : () => ({
        info : undefined
    }),
    methods: {
        loadData () {
            CatFactsService.getCatsInfo().then(result => {
                this.info = result.fact
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    beforeMount() {
        this.loadData()
    },
}
</script>