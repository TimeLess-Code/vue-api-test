export {
    getCategories
}

function getCategories(){
    return  [{
            id: 'Toro',
            name : 'Hamburguesas',
            icon : 'fas fa-hamburger',
            selected : false
        },
        {
            id : 'Piel',
            name : 'Sandwiches',
            icon : 'fas fa-hotdog',
            selected : false
        },
        {
            id : 'Ensalada',
            name : 'Ensaladas',
            icon : 'fas fa-leaf',
            selected : false
        },
        {
            id : 'Bocadillo',
            name : 'Bocadillos',
            icon : 'fa-thin fa-hotdog',
            selected : false
        },
        {
            id : 'Plato',
            name : 'Platos combinados',
            icon : 'fas fa-utensils',
            selected : false
        },
        {
            id : 'Racion',
            name : 'Raciones',            
            icon : 'fas fa-bacon',
            selected : false
        },
        {
            id : 'Postres',
            name : 'Postres',
            icon : 'fas fa-ice-cream',
            selected : false
        }]
}