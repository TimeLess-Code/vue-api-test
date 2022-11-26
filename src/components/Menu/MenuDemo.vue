<template>
    <div>
        <div class="ma-5" v-show="showAllCategories">
            <v-autocomplete 
            v-model="selectedProductList"
            :items="products"
            item-text="name"
            item-value="name"
            chips
            label="Select"
            multiple
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
            <div @click="allCategories" class="back-icon">
                <v-icon>mdi-arrow-left-bold</v-icon>
            </div>
            <div class="mt-2">
                <ProductComponent :itemId=selectesCategory :order=order></ProductComponent>
            </div>
        </div>
        
        <div class="order-box">
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
                <ProdDetails :product=detailObj />
            </v-dialog>
        </div>
    </div>
</template>

<!-- 
    LISTAR LAS CATEGORIAS
    CADA CATEOGORIA TIENE UN NOMBRE, UNA IMAGEN REPRESENTATIVA Y SU CORRESPONDIENTE LISTA DE PRODUCTOS
        CADA PRODUCTO TIENE NOMBRE, INFORMACION DE SU COMPOSICION CULINARIA, OPCION DE MODIFICAR EL PRODUCTO (CANTIDAD DE UNIDADES Y COMPOSICION)

    FUNCIONALIDADES:
        MODIFICAR LA CANTIDAD DE PRODUCTOS: SE PERMITIRA MODIFICAR LA CANTIDAD DE UNA EN UNA O ELIMINAR TODAS LA UNIDADES DE LA COMANDA.
        VISUALIZAR COMANDA MEDIANTE UN MODAL.
        IMPLEMENTAR BUSCADOR DE PRODUCTOS GENERAL (ACCESIBLE DESDE CUALQUIER PUNTO DE LA APLICACION)
        HACER UN BUSCADOR PARA QUITAR O PONER COSAS A LOS PRODUCTOS + TEXTO LIBRE
        AÑADIR SCROLL SI ES DEMASIADO GRANDE (> 70% DE LA PANTALLA)
        CREAR VISUALIZACION DEL PEDIDO
        EN LA ORDEN
            EL ICONO DE MODIFICAR PRODUCTO SE MOSTRARA UNICAMENTE SI EL TOTAL DE ESE PRDUCTO ES 1
            SI ES MAYOR SE MOSTRARA UN ICONO QUE ABRIRA UN MODAL CON EL DESGLOSE DE LA ORDEN COMPLETA DE ESE PRODUCTO

            HABRA UN ICONO DE 'VER ORDEN' PARA VISUALIZAR EL DESGLOSE DE TODA LA ORDEN  

    MEJORAS: 
        CREAR UN COMPONENTE GENERICO Y HACER DISTINTAS LLAMADAS API PARA MOSTRAR TODAS LAS CATEGORIAS EN UN SOLO COMPONENTES
        HACER QUE MANTENGA EL ULTIMO TAB SELECCIONADO AL RECARGAR LA PAGINA
        CREAR NOMBRE DE USUARIOS
        CREAR PANTALLA DE MESAS
        CREAR UNA BASE DE DATOS Y HACES LLAMAS API A ESA BASE DE DATOS (FICHEROS)
 -->

<script>
import ProductComponent from './Product/ProductComponent';
import * as MenuService from './MenuDemo.service';
import * as ProductService from './Product/Product.service'

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
        detailObj : {}
    }),
    methods: {
        loadData () {
            this.products = ProductService.getAllProductList();
            this.categories = MenuService.getCategories();
        },
        allCategories () {
            this.selectesCategory = ''
            this.showAllCategories = true
        },
        goto (prodKeyWord) {
            console.log(prodKeyWord);
            this.selectesCategory = this.categories.find(x => x.id === prodKeyWord).id;
            this.showAllCategories = false
        },
        onRemove (item) {
            this.selectedProductList = this.selectedProductList.filter(x => x !== item.name)
        },
        addToBill (prod) {
            let index = this.order.map(x => x.name).indexOf(prod.name)
            if(index >= 0){
                prod.count !== 0 ? this.order[index].count = prod.count : this.order.splice(index, 1)
            } else {
                this.order.push(prod)
            }
        },
        formatObjForDetailModal (prod) {
            let p = {...prod}
            let tmpObj = { name : '', amountOfProd : 0, prodList : [] }
            if(prod.count > 0){
                if(this.ordeObjList.length > 0 ){
                    if(this.ordeObjList.some(x => x.name !== p.name) ){
                        tmpObj.name = p.name;
                        p.count = 1
                        tmpObj.prodList.push(p);
                        tmpObj.amountOfProd = tmpObj.prodList.length
                        this.ordeObjList.push(tmpObj);
                    } else {
                        this.ordeObjList.forEach(x => {
                            if(x.name === p.name){
                                p.count = 1
                                x.prodList.push(p)
                                x.amountOfProd = x.prodList.length
                            }
                        })
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
            this.formatObjForDetailModal(prod)
            this.detailObj = this.ordeObjList.find(x => x.name === prod.name).prodList
            this.showDetailModal = true
        },
        deleteObjFromList (list, obj) {
            let index = list.map(x => x.name).indexOf(obj.name)
            if(index >= 0) list.splice(index, 1)
            
            return list
        }
    },
    beforeMount() {
        this.loadData()
    },
}
</script>