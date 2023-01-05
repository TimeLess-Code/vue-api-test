<template>
    <div>
        <div class="ma-5" v-show="showAllCategories">
            <div class="top-actions-header">
                <v-autocomplete 
                v-model="selectedProductList"
                :items="products"
                item-text="name"
                item-value="name"
                chips
                label="Select"
                multiple
                class="search-var"
                >
                <template v-slot:selection="prod">
                    <v-chip v-bind="prod.attrs" close @click="goto(prod.item.id)" @click:close="onRemove(prod.item)">
                        <v-avatar left>
                            <v-icon> {{prod.item.icon}} </v-icon>
                        </v-avatar>
                        {{ prod.item.name }}
                        </v-chip>
                    </template>
                    <template v-slot:item="prod">
                        <template >
                            <v-list-item-avatar>
                                <v-icon>{{prod.item.icon}}</v-icon>
                            </v-list-item-avatar>
    
                            <v-list-item-content>
                                <v-list-item-title v-html="prod.item.name"></v-list-item-title>
                            </v-list-item-content>
                        </template>
                    </template>
                </v-autocomplete>

                <div class="send-btn">
                    <v-btn @click="sendOrder()">
                        <v-progress-circular indeterminate color="black" v-show="sendingOrder" ></v-progress-circular>
                        <v-icon v-show="!sendingOrder">fa-solid fa-paper-plane</v-icon>
                    </v-btn>
                </div>
            </div>
    
            <v-list dense nav>
                <v-list-item link v-for="cat in categories" :key="cat.name" @click="goto(cat.id)">
                    <v-list-item-icon>
                        <v-icon>  {{cat.icon}} </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="cat.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </div>

        <!-- COMPONENTS -->
        <div v-if="!showAllCategories" class="mt-5">
            <div class="top-actions">
                <div class="back-icon">
                    <v-btn @click="allCategories()">
                        <v-icon>mdi-arrow-left-bold</v-icon>
                    </v-btn>
                </div>
                <div class="send-order">
                    <v-btn @click="sendOrder()">
                        <v-progress-circular indeterminate color="black" v-show="sendingOrder" ></v-progress-circular>
                            <v-icon v-show="!sendingOrder">fa-solid fa-paper-plane</v-icon>
                        </v-btn>
                    </div>
            </div>

            <div class="mt-2">
                <ProductComponent :itemId=selectesCategory :order=order></ProductComponent>
            </div>
        </div>
        <div class="order-box">
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="prod in order" :key="prod.name">
                    <v-list-item-avatar>
                        <v-icon> {{prod.icon}} </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content @click="goto(prod.id)">
                        <v-list-item-title v-text="prod.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="d-block">
                        <v-btn icon @click="seeProdDetails(prod)"> 
                            <v-icon> fa-solid fa-sheet-plastic </v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <span >{{prod.count}}</span>
                </v-list-item>
            </v-list>
            <v-dialog v-model="showDetailModal">
                <ProdDetails :productList=detailObjList :defaultProd=defaultProd />
            </v-dialog>
        </div>
    </div>
</template>

<!-- 
    MEJORAS: 
    1. FUNCIONALIDAD PARA SABER SI SE QUIERE SUMAR O RESTAR INGREDIENTES EN EL MODAL DE CUSTOMIZACOIN DEL PRODCUTO
    2. NUMERO DE PRODUCTOS NORMALES Y NUMERO DE PRODUCTOS MODIFICADOS
    3. CREAR PANTALLA DE MESAS
    2. CREAR NOMBRE DE USUARIOS
    4. CREAR UNA BASE DE DATOS Y HACER LLAMAS API A ESA BASE DE DATOS (FICHEROS)
 -->

<script>
import ProductComponent from './Product/ProductComponent';
import * as MenuService from './MenuDemo.service';
import * as ProductService from './Product/Product.service.js'

import ProdDetails from './Product/ProductDetails/ProdDetailsModal.vue'

import './menu.scss'


export default {
    name : 'MenuDemo',
    components : {
        ProductComponent,
        ProdDetails
    },
    data : () => ({
        selectedProductList : '',
        categories : [],
        products : [],
        order : [],
        selectesCategory : '',
        showAllCategories : true,
        showDetailModal : false,
        ordeObjList : [],
        detailObjList : {},
        defaultProd : {},
        sendingOrder : false
    }),
    methods: {
        loadData () {
            this.products = ProductService.getProductList();
            this.categories = MenuService.getCategories();
        },
        allCategories () {
            this.selectesCategory = ''
            this.showAllCategories = true
        },
        goto (prodKeyWord) {
            this.selectesCategory = this.categories.find(x => x.id === prodKeyWord).id;
            this.showAllCategories = false
        },
        onRemove (item) {
            this.selectedProductList = this.selectedProductList.filter(x => x !== item.name)
        },
        addToBill (prod) {
            this.formatObjForDetailModal(prod)
            // SI EL PRODUCTO AUN NO SE HA AÑADIDO A LA ORDEN SE AÑADE
                // SI YA SE HA AÑADIDO SE ACTUALIZA LA CANTIDAD
            let index = this.order.map(x => x.name).indexOf(prod.name)
            
            if(index >= 0){
                prod.count !== 0 ? this.order[index].count = prod.count : this.order.splice(index, 1)
            } else {
                this.order.push(prod)
            }
        },
        formatObjForDetailModal (prod) {
            // OBJETO GENERICO
            /* this.defaultProd = this.products.find(x => x.name === prod.name) */

            let p = {...prod}
            let tmpObj = { name : '', amountOfProd : 0, prodList : [] , normal : true }
            if(prod.count > 0){
                if(this.ordeObjList.length > 0){
                    if(this.ordeObjList.some(x => x.name === p.name)){
                        // SI EXISTE UN EJEMPLAR DEL PRODUCTO, SE AÑADE A LA LISTA
                        this.ordeObjList.forEach(x => {
                            if(x.name === p.name){
                                p.count = 1
                                x.prodList.push(p)
                                x.amountOfProd = x.prodList.length
                            }
                        })
                    } else {
                        // SI NO EXISTE UN EJEMPLAR DEL PRODUCTO
                        tmpObj.name = p.name;
                        p.count = 1
                        tmpObj.prodList.push(p);
                        tmpObj.amountOfProd = tmpObj.prodList.length
                        this.ordeObjList.push(tmpObj);
                    }
                } else {
                    tmpObj.name = p.name;
                    p.count = 1
                    tmpObj.prodList.push(p);
                    tmpObj.amountOfProd = tmpObj.prodList.length
                    this.ordeObjList.push(tmpObj);
                }
            } else  {
                let index = this.ordeObjList.map(x => x.name).indexOf(p.name)
                if(index >= 0 && p.count === 0){
                    this.ordeObjList.splice(index, 1)
                }
            }
        },
        seeProdDetails (prod) {
            this.detailObjList = this.ordeObjList.find(x => x.name === prod.name).prodList
            this.showDetailModal = true
        },
        deleteObjFromList (list, obj) {
            let index = list.map(x => x.name).indexOf(obj.name)
            if(index >= 0) list.splice(index, 1)
            
            return list
        },
        sendOrder () {
            this.sendingOrder = true
            setTimeout(() => this.sendingOrder = false,2000)
        }
    },
    beforeMount() {
        this.loadData()
    },
}
</script>