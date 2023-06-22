import lamb from '../assets/images/lamb.png';
import turkey from '../assets/images/turkey.png';
import duck from '../assets/images/duck.png';
import goose from '../assets/images/goose.png';

export const initialState = [
    {
    id: 1,
    url: 'ColdSnacks',
    title: 'Холодные закуски',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 2,
    url: 'HotSnacks',
    title: 'Горячие закуски',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 3,
    url: 'MeatDishes',
    title: 'Мясные блюда',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 4,
    url: 'Soup',
    title: 'Супы',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 5,
    url: 'FishDishes',
    title: 'Рыбные блюда',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 6,
    url: 'Grilmenu',
    title: 'Гриль меню',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 7,
    url: 'Specialties',
    title: 'Фирменные блюда',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
{
    id: 8,
    url: 'Drinks',
    title: 'Напитки',
    products: [
        {
            id: 1,
            title: 'Ягненок',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 620,
            cartPrice: 620,
            cartCount: 0,
            image: {
                src: lamb,
                alt: 'lamb'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 2,
            title: 'Индейка',
            description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
            weight: 225,
            price: 450,
            cartPrice: 450,
            cartCount: 0,
            image: {
                src: turkey,
                alt: 'turkey'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 3,
            title: 'Гусь',
            description: 'Фаршированный яблоками',
            weight: 225,
            price: 7900,
            cartPrice: 7900,
            cartCount: 0,
            image: {
                src: goose,
                alt: 'goose'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        },
        {
            id: 4,
            title: 'Утка',
            description: 'Фаршированная рисом, курагой и айвой',
            weight: 225,
            price: 3230,
            cartPrice: 3230,
            cartCount: 0,
            image: {
                src: duck,
                alt: 'duck'
            },
            proteins: 17.23,
            fats: 7.63,
            carbohydrates: 22.35,
            kilocalories: 234,
        }
    ]
},
]