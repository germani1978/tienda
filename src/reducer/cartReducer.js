export const initialCartState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CAR = {
    ADD: "ADD_TO_CAR",
    ERASE_SOME: "ERASE_SOME_OF_CAR",
    CLEAR: "CLEAR_CAR",

}

const save = state => window.localStorage.setItem('cart', JSON.stringify(state)); 

export function reducerCart(state = [], action) {       //state = [ ... { productWithquantity }   ...]

    const { type, product } = action;
    let newState = [];

    switch (type) {

        case CAR.ERASE_SOME:
            state.forEach( productCar => {

                if (productCar.id !== product.id) {
                    newState.push(productCar);
                }
                else {
                    if (productCar.quantity > 1) {
                        newState.push({
                            ...productCar,
                            quantity: productCar.quantity - 1
                        });
                    }
                }
            });
            break;

        case CAR.ADD: {

            const index = state.findIndex(productCar => productCar.id === product.id);

            if (index >= 0) {
                newState = state.map(productCar => {
                    if (productCar.id === product.id) {
                        return (
                            {
                                ...product,
                                quantity: productCar.quantity + 1
                            })

                    }
                    return productCar
                })
            } else {

                newState = [
                    ...state,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }


        }
            break;

        case CAR.CLEAR:
            newState = [];
    }

    save( newState );
    return newState;

}


// const [ state, dispatch] = useReducer(reducerCart, []);