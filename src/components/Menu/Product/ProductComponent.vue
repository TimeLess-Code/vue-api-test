<template>
    <div id="productListContinare">
        <v-list dense nav class="prod-list">
            <v-list-item link v-for="item in productList" :key="item.name" >
                <div class="product">
                    <v-list-item-icon class="icon">
                        <v-icon>  {{item.icon}} </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action class="action">
                        <v-btn @click="substractFromBill(item)" :disabled="item.count === 0" icon>
                            <v-icon color="black">mdi-minus</v-icon>
                        </v-btn>
                        <span class="product-amount"> {{item.count}} </span>
                        <v-btn @click="addToBill(item)" icon>
                            <v-icon color="black">mdi-plus</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </div>
            </v-list-item>
        </v-list>
    </div>
</template>

<!-- 
    CACHEAR EN EL SERIVICIO LA INFORMACION EN UN ARRAY DE OBJETOS
        CON LA ORDEN (PRODUCTOS Y CANTIDADES)
        EN UN FUTURO
            CADA ORDEN LLEVARA EL NUMERO DE MESA QUE LE CORRESPONDE
 -->


<script>
import * as ProductService from './Product.service'
import './product.scss'

export default {
    name : 'ProductComponent',
    data : () => ({
        search : '',
        productList : [],
    }),
    props : {
        itemId : String,
        order : Array
    },
    methods: {
        loadData () {
            this.productList = ProductService.getProductList(this.itemId);
            
            this.order.forEach(x => {
                let index = this.productList.findIndex(z => z.name === x.name)
                if(index !== -1){
                    this.productList[index].count = x.count
                }
            })
        },
        addToBill (prod)  {
            prod.count++
            this.$parent.addToBill(prod)
        },
        substractFromBill (prod) {
            if(prod.count > 0) prod.count--;
            this.$parent.addToBill(prod)
        },
        onBlur(prod) {
            if(prod.count < 0) prod.count = 0;
        }
    },
    beforeMount() {
        this.loadData()
    }
}
</script>