<template>
    <v-card class="detail-container">
        <v-card-title class="header">
            <span>Desglose de comanda</span>
            <div>
                <span> N </span> /
                <span class="modified"> N </span> 
            </div>
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item v-for="prod, index in productList" :key="index">
                    <template>
                        <v-row>
                            <span><strong>{{prod.name}}</strong></span>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-list-item-content>
                                    <v-select multiple v-model="prod.customModel" :items="customizationList" :label="prod.description" @change=customProd(prod)
                                    ></v-select>
                                </v-list-item-content>
                            </v-col>
                            <v-list-item-action class="d-block">
                                <v-btn icon @click="deleteProd(prod)"> 
                                    <v-icon> fa-solid fa-minus </v-icon>
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

    SE DEBE PERMITIR ELIMINAR DESDE EL MODAL DE DETALLE
    CONTADOR DE CUANTOS PRODUCTOS NORMALES Y CUANTOS PRODUCTOS MODIFICADOS
-->

<script>
import './productDetail.scss';
import * as ProductService from '../../Product/Product.service'

export default {
    name : 'ProdDetailsModal',
    props : {
        productList : [],
        defaultProd : {}
    },
    data : () => ({
        customizationList : [],
        customModel : [],
        show : false,
    }),
    methods : {
        deleteProd () {
            console.warn("deleteProd")
        },
        equalObjs(obj1, obj2) {
            console.log(obj1, obj2);
            return JSON.stringify(obj1) === JSON.stringify(obj2)
        },
        modifyProd () {
            console.log();
        },
        loadCustomizationList () {
            this.customizationList = ProductService.getProdCustomList()
        },
        customProd (prod) {
            console.log(prod.customModel);
        }
    },
    beforeMount(){

        this.loadCustomizationList()
    },
    onMounted() {
        console.log(this.productList);
    }
}
</script>