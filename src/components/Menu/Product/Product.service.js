export {
    getProductList,
    getAllProductList
}

const CATEGORY_ID = {
    TORO : 'Toro',
    PIEL : 'Piel',
    ENSALADA : 'Ensalada',
    BOCADILLO : 'Bocadillo',
    PLATO_COMBINADO : 'Plato',
    RACIONES : 'Racion',
    POSTRES : 'Postres'
}

function getAllProductList(){
    return [
        /* AÑADIR CATEGORY ID */
        { id: CATEGORY_ID.TORO, name : 'Toro sentado', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0},
        { id: CATEGORY_ID.TORO, name : 'Toro loco', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
        { id: CATEGORY_ID.TORO, name : 'Toro enfadado', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
        { id: CATEGORY_ID.TORO, name : 'Toro pintado', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
        { id: CATEGORY_ID.TORO, name : 'Toro Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger' , count : 0},

        { id: CATEGORY_ID.PIEL, name : 'Piel blanca', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
        { id: CATEGORY_ID.PIEL, name : 'Piel amarilla', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
        { id: CATEGORY_ID.PIEL, name : 'Piel roja', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
        { id: CATEGORY_ID.PIEL, name : 'Piel cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },

        { id: CATEGORY_ID.ENSALADA, name : 'Buffalo bill', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
        { id: CATEGORY_ID.ENSALADA, name : 'Jesse james', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
        { id: CATEGORY_ID.ENSALADA, name : 'Billy hitchcock', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
        { id: CATEGORY_ID.ENSALADA, name : 'Cheyenes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },

        { id: CATEGORY_ID.BOCADILLO, name : 'Sioux', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Apache', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Mohicano', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Huron', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Pawnee', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Comanche', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Mohawk', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Navajo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
        { id: CATEGORY_ID.BOCADILLO, name : 'Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },

        { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Caballo loco', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
        { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Geronimo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
        { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Halcon negro', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
        { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },

        { id: CATEGORY_ID.RACIONES, name : 'Patatas cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Patatas alioli', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Patatas roquefort', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Patatas 3 salsa', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Calamares', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Aros de cebolla', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Alitas de pollo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Nachos', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Croquetas', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
        { id: CATEGORY_ID.RACIONES, name : 'Albondigas', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },

        { id: CATEGORY_ID.POSTRES, name : 'Tarta de queso', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Tarta de chocolate', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Flan huevo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Flan cafe', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Mousse de limon', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Tarta helada', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Volcan de chocolate', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Cafe escoces', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
        { id: CATEGORY_ID.POSTRES, name : 'Cafe irlandes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 }
    ]
}

function getProductList(prodID){
    let productList = [];
    if(prodID === CATEGORY_ID.TORO){
        productList = [
            { id: CATEGORY_ID.TORO, name : 'Toro sentado', price : '10.00€', description : 'Hamburguesa con queso chedar', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
            { id: CATEGORY_ID.TORO, name : 'Toro loco', price : '10.00€', description : 'Haburguesa, queso chedar, lechuga, tomate, cebolla a la plancha y ali oli', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
            { id: CATEGORY_ID.TORO, name : 'Toro enfadado', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
            { id: CATEGORY_ID.TORO, name : 'Toro pintado', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 },
            { id: CATEGORY_ID.TORO, name : 'Toro Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'mdi-hamburger', count : 0}
        ] 
    } else if (prodID === CATEGORY_ID.PIEL){
        productList = [
            { id: CATEGORY_ID.PIEL, name : 'Piel blanca', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
            { id: CATEGORY_ID.PIEL, name : 'Piel amarilla', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
            { id: CATEGORY_ID.PIEL, name : 'Piel roja', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 },
            { id: CATEGORY_ID.PIEL, name : 'Piel cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0 }
        ]
    } else if (prodID === CATEGORY_ID.ENSALADA){
        productList = [
            { id: CATEGORY_ID.ENSALADA, name : 'Buffalo bill', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
            { id: CATEGORY_ID.ENSALADA, name : 'Jesse james ', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
            { id: CATEGORY_ID.ENSALADA, name : 'Billy hitchcock', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 },
            { id: CATEGORY_ID.ENSALADA, name : 'Cheyenes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-leaf', count : 0 }
        ]
    } else if (prodID === CATEGORY_ID.BOCADILLO){
        productList = [
            { id: CATEGORY_ID.BOCADILLO, name : 'Sioux', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
            { id: CATEGORY_ID.BOCADILLO, name : 'Apache', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog' , count : 0},
            { id: CATEGORY_ID.BOCADILLO, name : 'Mohicano', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
            { id: CATEGORY_ID.BOCADILLO, name : 'Huron', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0 },
            { id: CATEGORY_ID.BOCADILLO, name : 'Pawnee', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0},
            { id: CATEGORY_ID.BOCADILLO, name : 'Comanche', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0},
            { id: CATEGORY_ID.BOCADILLO, name : 'Mohawk', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0},
            { id: CATEGORY_ID.BOCADILLO, name : 'Navajo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0},
            { id: CATEGORY_ID.BOCADILLO, name : 'Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0}
        ]
    } else if (prodID === CATEGORY_ID.PLATO_COMBINADO){
        productList = [
            { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Caballo loco', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
            { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Geronimo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
            { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Halcon negro', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0 },
            { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-utensils', count : 0}
        ]
    } else if (prodID === CATEGORY_ID.RACIONES){
        productList = [
            { id: CATEGORY_ID.RACIONES, name : 'Patatas cheyennes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Patatas alioli', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Patatas roquefort', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Patatas 3 salsa', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Calamares', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Aros de cebolla', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Alitas de pollo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Nachos', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0 },
            { id: CATEGORY_ID.RACIONES, name : 'Croquetas', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0},
            { id: CATEGORY_ID.RACIONES, name : 'Albondigas', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-bacon', count : 0}
        ]
    } else if (prodID === CATEGORY_ID.POSTRES){
        productList = [
            { id: CATEGORY_ID.POSTRES, name : 'Tarta de queso', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Tarta de chocolate', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Flan huevo', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Flan cafe', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Mousse de limon', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Tarta helada', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Volcan de chocolate', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Cafe escoces', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
            { id: CATEGORY_ID.POSTRES, name : 'Cafe irlandes', price : '10.00€', description : 'Descripcion del producto', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0}
        ]
    } 
    return productList
}