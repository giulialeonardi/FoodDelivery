/* The underlying APIs simulate the existence of a database by returning hardcoded values. 
In the presence of a real database, they will query it and return the values to the client.*/

var express = require('express');
var router = express.Router();


router.get('/:id/', function (req, res, next) {
    switch (req.params.id) {
        case '1':
            res.send(
                {
                    id: 1,
                    name: "Pizzeus",
                    img: '../img/logo',
                    cost: '€€',
                    currency: '€',
                    avgDeliveryTime: '20',
                    categories: ['Pizza', 'Panini', 'Italiano'],
                    feedback: '4.2',
                    address: 'Viale Coni Zugna 33, Milano, 20144',
                    menu_sections: [{ id: 0, name: 'Pizze' }, { id: 1, name: 'Panini' }, { id: 2, name: 'Primi piatti' }, { id: 3, name: 'Contorni' }, { id: 4, name: 'Dolci' }]
                });
            break;
    }
});

router.get('/:idRestaurant/menu/:idMenu/', function (req, res, next) {
    switch (req.params.idMenu) {
        case '0':
            res.send(
                {
                    id: 0,
                    name: 'Pizze',
                    items: [
                        {
                            id: 0,
                            name: 'Margherita',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            price: 5.50
                        },
                        {
                            id: 1,
                            name: 'Capricciosa',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            price: 6.50
                        },
                        {
                            id: 2,
                            name: 'Montanara',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            price: 6.00
                        },
                        {
                            id: 3,
                            name: 'Focaccia',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            price: 4.50
                        },
                        {
                            id: 4,
                            name: '4 Formaggi',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            price: 6.50
                        }
                    ]
                })
            break;
        case '1':
            res.send({
                id: 1,
                name: 'Panini',
                items: [
                    {
                        id: 0,
                        name: 'Caprese',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 5.50
                    },
                    {
                        id: 1,
                        name: 'Hamburger',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    },
                    {
                        id: 2,
                        name: 'Cotoletta',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.00
                    },
                    {
                        id: 3,
                        name: 'Bolognese',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 4.50
                    },
                    {
                        id: 4,
                        name: 'Speck e Brie',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    }
                ]
            })
            break;
        case '2':
            res.send({
                id: 2,
                name: 'Primi piatti',
                items: [
                    {
                        id: 0,
                        name: 'Pasta al pesto',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 5.50
                    },
                    {
                        id: 1,
                        name: 'Carbonara',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    },
                    {
                        id: 2,
                        name: 'Arrabbiata',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.00
                    },
                    {
                        id: 3,
                        name: 'PPF',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 4.50
                    },
                    {
                        id: 4,
                        name: 'Risotto',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    }
                ]
            })
            break;
        case '3':
            res.send({
                id: 3,
                name: 'Contorni',
                items: [
                    {
                        id: 0,
                        name: 'Patate fritte',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 5.50
                    },
                    {
                        id: 1,
                        name: 'Patate al forno',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    },
                    {
                        id: 2,
                        name: 'Erbe',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.00
                    },
                    {
                        id: 3,
                        name: 'Insalata',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 4.50
                    },
                    {
                        id: 4,
                        name: 'Verdure gratinate',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    }
                ]
            })
            break;
        case '4':
            res.send({
                id: 4,
                name: 'Dolci',
                items: [
                    {
                        id: 0,
                        name: 'Tiramisù',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 5.50
                    },
                    {
                        id: 1,
                        name: 'Torta della nonna',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    },
                    {
                        id: 2,
                        name: 'Panna cotta',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.00
                    },
                    {
                        id: 3,
                        name: 'Creme caramel',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 4.50
                    },
                    {
                        id: 4,
                        name: 'Gelato alla vaniglia',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        price: 6.50
                    }
                ]
            })
    }

});






    module.exports = router;