import * as actionTypes from '../actions/actionTypes'

const initialState = {
    menu: [
        {
            "items": [
                {
                    "desc": "Classic delight with 100% real mozzarella cheese",
                    "id": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122",
                    "name": "Margherita",
                    "price": 10
                },
                {
                    "desc": "Barbecue chicken for that extra zing",
                    "id": 2,
                    "img": "https://www.killerpickles.com/wp-content/uploads/2012/10/DSCN8932.jpg",
                    "name": "Barbecue Chicken",
                    "price": 10
                },
                {
                    "desc": "Delightful combo of grilled mushroom & veggies",
                    "id": 3,
                    "img": "http://4.bp.blogspot.com/-n-jZjyEzncE/Uq8IxN6-giI/AAAAAAAADWk/OL-YhSPEG_4/s1600/Pizza+Food+Hd+Wallpaper.jpg",
                    "name": "Farmhouse",
                    "price": 13
                },
                {
                    "desc": "Supreme combo of 3 types of chicken",
                    "id": 4,
                    "img": "https://pizzaneed.com/wp-content/uploads/2019/05/different-types-of-pizza.jpg",
                    "name": "Non Veg Supreme",
                    "price": 15
                },

                {
                     "desc": "American Veggie with cheese!",
                     "id": 5,
                     "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6",
                     "name": "American Paradise",
                     "price": 10
                                }
            ],
            "name": "Best Sellers"
        },
        {
            "items": [

                {
                     "desc": "Classic American Indian blend with desi Paneer",
                     "id": 1,
                     "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2Fmargherita.webp?alt=media&token=721d918a-1a56-40c4-a882-b168e8220122",
                     "name": "Fusion",
                     "price": 10
                   },

                {
                    "desc": "The awesome foursome with exotic veggies!",
                    "id": 5,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FVeggie_Paradise.webp?alt=media&token=41d36b34-d8ef-4377-9184-393edd9da9e6",
                    "name": "Veggie Paradise",
                    "price": 17
                },

                {
                    "desc": "Flavorful trio: paneer, capsicum, red paprika",
                    "id": 7,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FPeppy_Paneer.webp?alt=media&token=feabb6f1-1121-47ee-9eac-494b7f49e3c3",
                    "name": "Peppy Paneer",
                    "price": 19
                }
            ],
            "name": "Veg Pizzas"
        },
        {
            "items": [
                {
                    "desc": "Barbecue chicken for that extra zing",
                    "id": 2,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FBarbeque_Chicken.webp?alt=media&token=27f22f19-27f9-4017-a0a1-47aa43cfddb7",
                    "name": "Barbecue Chicken",
                    "price": 11
                },

                {
                    "desc": "Beware! You'll be left craving for more",
                    "id": 8,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Dominator.webp?alt=media&token=e8b826db-cdc3-4b37-abf1-dc5d999850c9",
                    "name": "Chicken Dominator",
                    "price": 21
                },
                {
                    "desc": "Spicy, herbed chicken sausage on pizza",
                    "id": 9,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChicken_Sausage.webp?alt=media&token=e6943fcc-b821-46e0-9028-5623fe4db525",
                    "name": "Chicken Sausage",
                    "price": 13
                },
                {
                    "desc": "The wholesome flavour of tandoori masala",
                    "id": 10,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FIndian_Tandoori_Chicken_Tikka.webp?alt=media&token=c5f625a7-041c-4368-9f89-e6d3cd35dc5b",
                    "name": "Indi Chicken Tikka",
                    "price": 21
                },

            ],
            "name": "Non Veg Pizzas"
        },
        {
            "items": [
                {
                    "desc": "KIDDY An all-time fav!",
                    "id": 12,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCheesy.webp?alt=media&token=0a6d2a09-6661-4e15-b2d3-161e32d116ba",
                    "name": "Cheesy Dip",
                    "price": 2
                },
                {
                    "desc": "masala coated kiddi fries",
                    "id": 13,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FCrinkle_Fries.webp?alt=media&token=1b3bad75-67fa-4350-8027-98b2aec8bcbf",
                    "name": "Crinkle Fries",
                    "price": 4
                },
                {
                    "desc": " Kiddy pizza",
                    "id": 14,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FGarlic_bread.webp?alt=media&token=401111b2-370b-4413-b343-553e7bb437c7",
                    "name": "Garlic Breadsticks",
                    "price": 6
                },


            ],
            "name": "Kids Menu"
        },
               {
                    "items": [

                        {
                            "desc": " Kiddy non-veg patty",
                            "id": 15,
                            "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FTaco_Nvg.webp?alt=media&token=afb0085c-cacc-4141-87c9-e6cbf40dc208",
                            "name": "Non Veg Taco",
                            "price": 7
                        },
                        {
                            "desc": " Kiddy veg patty",
                            "id": 16,
                            "img": "https://www.cuisinart.com/globalassets/catalog/appliances/food-processors/complete-chef-cooking-food-processor/tacosamericanos_ss1262600101.jpg",
                            "name": "Veggie Tacos",
                            "price": 5
                        }
                    ],
                    "name": "Tacos"
                },


        {
            "items": [
                {
                    "desc": "Indulgent, gooey molten lava filled cake",
                    "id": 17,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FChoco_Lava.webp?alt=media&token=fa50ccb3-7c4a-47bd-96d1-be67e367f79b",
                    "name": "Choco Lava Cake",
                    "price": 9
                },
                {
                    "desc": "Sweet temptation! Butterscotch mousse",
                    "id": 18,
                    "img": "https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FButterscotch.webp?alt=media&token=f84d2cfc-d17c-4dae-810c-d22af8b5e6ac",
                    "name": "Butterscotch Mousse",
                    "price": 6
                },


                                {
                    "desc": "Milk cream of heaven",
                     "id": 19,
                     "img": "https://www.whiskaffair.com/wp-content/uploads/2013/10/Rasmalai-1.jpg",
                     "name": "Rasmalai",
                     "price": 7
                                },
                {
                    "desc": "Chocolate shower",
                     "id": 19,
                     "img": "http://jujubabies.com/images/2011/02/chocolate-liquid.jpg",
                     "name": "Brownie Fantasy",
                     "price": 7
                                                }
            ],
            "name": "Desserts"
        }
    ],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case actionTypes.GET_MENU:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case actionTypes.GET_MENU_SUCCESS:
            return {
                ...state,
                menu: payload.menu,
                isLoading: false
            }

        case actionTypes.GET_MENU_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            }

        default:
            return state;
    }
}

export default reducer
