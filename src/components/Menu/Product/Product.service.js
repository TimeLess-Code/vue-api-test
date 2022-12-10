export {
    getProductList,
    getProdCustomList
}

function getProductList(prodId){
    return prodId !== undefined && prodId !== null ? prodList.filter(x => x.id === prodId) : prodList
}

function getProdCustomList(){
    return prodCutomList
}

const prodCutomList = [
    'Queso cheddar',
    'Queso roquefort',
    'Carne',
    'Pechuga',
    'Huevo',
    'Jalapeños',
    'Cebolla',
    'Tomate',
    'Huevo',
    'Bacon',
    'Lechuga',
    'Patatas',
    'Pimientos rojos',
    'Pimientos verdes'
]

const CATEGORY_ID = {
    TORO : 'Toro',
    PIEL : 'Piel',
    ENSALADA : 'Ensalada',
    BOCADILLO : 'Bocadillo',
    PLATO_COMBINADO : 'Plato',
    RACIONES : 'Racion',
    POSTRES : 'Postres'
}

const prodList = [
    // AÑADIR CATEGORY ID
    { id: CATEGORY_ID.TORO, name : 'Toro sentado', price : '5.90€', description : 'Hamburguesa con queso cheddar', info : 'Description adicional', icon : 'mdi-hamburger', count : 0, customModel : []},
    { id: CATEGORY_ID.TORO, name : 'Toro loco', price : '6.90€', description : 'Hamburguesa, queso cheddar, lechuga, tomate, cebolla a la plancha y alioli', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 , customModel : []},
    { id: CATEGORY_ID.TORO, name : 'Toro enfadado', price : '6.90€', description : 'Hamburguesa, queso cheddar, bacon, lechuga, tomate, cebolla a la plancha y salsa barbacoa', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 , customModel : []},
    { id: CATEGORY_ID.TORO, name : 'Toro pintado', price : '6.90€', description : 'Hamburguesa de espinacas, lechuga, tomate y cebola a la plancha', info : 'Description adicional', icon : 'mdi-hamburger', count : 0 , customModel : []},
    { id: CATEGORY_ID.TORO, name : 'Toro Cheyennes', price : '8.90€', description : 'Hamburguesa, queso cheddar, bacon, lechuga, tomate, cebola a la plancha, huevo frito, mayonesa, y salsa barbacoa', info : 'Description adicional', icon : 'mdi-hamburger' , count : 0, customModel : []},

    { id: CATEGORY_ID.PIEL, name : 'Piel blanca', price : '4.90€', description : 'Jamon york a la plancha con queso cheddar', info : 'Description adicional', icon : 'fas fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.PIEL, name : 'Piel amarilla', price : '5.90€', description : 'Jamon york a la plancha, queso cheddar y huevo frito', info : '', icon : 'fas fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.PIEL, name : 'Piel roja', price : '6.90€', description : 'Jamon york, queso cheddar, lechuga, tomate, cebolla roja, huevo cocido y mayonesa', info : '', icon : 'fas fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.PIEL, name : 'Piel cheyennes', price : '8.90€', description : 'Piel de pollo a la plancha, queso cheddar, bacon, lechuga, tomate, cebolla roja, huevo frito, alioli y salsa picante', info : '', icon : 'fas fa-hotdog', count : 0, customModel : []},

    { id: CATEGORY_ID.ENSALADA, name : 'Buffalo bill', price : '7.90€', description : 'Tiras de pollo rebozadas, bacon, queso cheddar, lechuga, tomate, cebolla', info : 'Description adicional', icon : 'fas fa-leaf', count : 0, customModel : []},
    { id: CATEGORY_ID.ENSALADA, name : 'Jesse james', price : '7.90€', description : 'Pasta, queso cheddar, jamon york, lechuga, tomate, maiz, chatka y salsa rosa', info : 'Description adicional', icon : 'fas fa-leaf', count : 0, customModel : []},
    { id: CATEGORY_ID.ENSALADA, name : 'Billy hitchcock', price : '7.90€', description : 'Aton, queso cheddar, lechuga, tomate, cebolla, huevo cocido', info : 'Description adicional', icon : 'fas fa-leaf', count : 0, customModel : []},
    { id: CATEGORY_ID.ENSALADA, name : 'Cheyenes', price : '8.90€', description : 'Gambas, bonito, chatka, lechuga, tomate, cebolla roja, zanahoria, huevo cocido, aceitunas', info : 'Description adicional', icon : 'fas fa-leaf', count : 0, customModel : []},

    { id: CATEGORY_ID.BOCADILLO, name : 'Sioux', price : '5.90€', description : 'Tortillas variadas', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Apache', price : '5.90€', description : 'Jamon york a la plancha, queso cheddar', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Mohicano', price : '5.90€', description : 'Bacon, queso cheddar', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Huron', price : '6.90€', description : 'Lomo, queso cheddar, pimientos rojos', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Pawnee', price : '6.90€', description : 'Pechuga de pollo, tomate, cebolla, huevo cocido, mayonesa', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Comanche', price : '6.90€', description : 'Atun, lechuga, tomate, cebolla roja, huevo cocido, mayonesa', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Mohawk', price : '6.90€', description : 'Pechuga de pollo, salsa de queso, rockefort, pimineto verde a la plancha', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Navajo', price : '6.90€', description : 'Calamares rebozados con alioli', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},
    { id: CATEGORY_ID.BOCADILLO, name : 'Cheyennes', price : '7.90€', description : 'Albondigas caseras, tomate frito, salsa picante, patatas fritas', info : 'Description adicional', icon : 'fa-thin fa-hotdog', count : 0, customModel : []},

    { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Caballo loco', price : '9.80€', description : 'Pechugas de pollo empenadas, sala de queso rockefort, 2 croquetas de jamon, patatas fritas', info : 'Description adicional', icon : 'fas fa-utensils', count : 0, customModel : []},
    { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Geronimo', price : '8.80€', description : 'Lomo, piminetos rojos, 2 huevos fritos, patatas fritas', info : 'Description adicional', icon : 'fas fa-utensils', count : 0, customModel : []},
    { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Halcon negro', price : '8.80€', description : 'Torta de maiz, filetes de pollo a la plancha, queso cheddar, lechuga, tomate, cebolla, jalapeños, salsa picante y patatas fritas', info : 'Description adicional', icon : 'fas fa-utensils', count : 0, customModel : []},
    { id: CATEGORY_ID.PLATO_COMBINADO, name : 'Cheyennes', price : '9.80€', description : 'Albondigas, tomate frito, 2 croquetas de jamon, 2 huevos fritos, patatas fritas, salsa picante', info : 'Description adicional', icon : 'fas fa-utensils', count : 0, customModel : []},

    { id: CATEGORY_ID.RACIONES, name : 'Patatas cheyennes', price : '4.90€', description : 'Patatas rancheras, salsa picante, mayonesa', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Patatas alioli', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Patatas roquefort', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Patatas 3 salsa', price : '4.90€', description : 'patatas, alioli, roquefort, picante', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Calamares', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Aros de cebolla', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Alitas de pollo', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Nachos', price : '6.90€', description : 'Triangulos de maiz, queso cheddar, tomate, jalapeños', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Croquetas', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},
    { id: CATEGORY_ID.RACIONES, name : 'Albondigas', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-bacon', count : 0, customModel : []},

    { id: CATEGORY_ID.POSTRES, name : 'Tarta de queso', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Tarta de chocolate', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Flan huevo', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Flan cafe', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Mousse de limon', price : '4.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Tarta helada', price : '4.50€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Volcan de chocolate', price : '4.50€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Cafe escoces', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 },
    { id: CATEGORY_ID.POSTRES, name : 'Cafe irlandes', price : '6.90€', description : '', info : 'Description adicional', icon : 'fas fa-ice-cream', count : 0 }
]