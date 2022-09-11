<template>
    <div>
        <v-data-table
        :headers="headers"
        :items="activities"
        class="elevation-1">
        </v-data-table>
    </div>
</template>

<script>
import * as BoredActivitiesService from './BoredActivities.service'
export default {
    name : 'BoredActivities',
    data : () => {
        return {
            headers : [
            {
                text: 'Activity',
                align: 'start',
                sortable: false,
                value: 'activity',
            },
            {
                text: 'Type',
                value: 'type',
            },
            {
                text: 'Participants',
                value: 'participants',
            },
            {
                text: 'Price',
                value: 'price',
            },
            {
                text: 'Link',
                value: 'link',
            },
            {
                text: 'Key',
                value: 'key',
            },
        ],
            activities : []
        }
    },
    methods: {
        loadData () {
            BoredActivitiesService.getActivities().then(result => {
                this.activities = [result].filter(x => x.link = x.link === '' ? '-' : x.link)
            })
        }
    },
    beforeMount() {
        this.loadData()
    },
}
</script>