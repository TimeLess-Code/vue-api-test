<template>
    <v-card>
        <v-card-title> Desglose de comanda </v-card-title>

        <v-card-text>
            <v-list>
                <v-list-item v-for="prod, index in product" :key="index">
                    <template>
                        <v-row>
                            <v-col>
                                <v-list-item-content>
                                    <v-text-field v-model="prod.name"> {{prod.name}} </v-text-field>
                                </v-list-item-content>
                            </v-col>
                            <v-col>
                                <v-list-item-content>
                                    <v-text-field v-model="prod.description"> {{prod.description}} </v-text-field>
                                </v-list-item-content>
                            </v-col>
                            <v-col>
                                <v-list-item-content>
                                    <v-text-field v-model="prod.info"> {{prod.info}} </v-text-field>
                                </v-list-item-content>
                            </v-col>
                            <v-list-item-action class="d-block">
                                <v-btn icon @click="modifyProdDetails(prod)"> 
                                    <v-icon> fa-solid fa-pen </v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-row>
                    </template>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<!-- 
    COMPARAR LOS OBJETOS, SI SON IGUALES (EL VALOR DE TODOS LOS ATRIBUTOS ES EL MISMO)
        MOSTRAR UNA SOLA FILA Y UN EL TOTAL
        HABILITAR UN BOTON PARA SACAR UN PRODUCTO DE ESE TOTAL Y PODERLO EDITAR
            PARA EDITAR SE MOSTRARA UN LISTADO DE OPCIONES PARA PONER Y QUITAR
-->

<script>
export default {
    name : 'ProdDetailsModal',
    props : {
        product : []
    },
    data : () => ({
        nameModel : '',
        addOnList : [],
        show : false
    }),
    methods : {
        modifyProdDetails () {
            console.warn("modifyProdDetails")
        }
    },
}
</script>