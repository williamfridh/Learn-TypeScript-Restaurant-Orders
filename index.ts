import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";



/**
 * Get price from price bracket.
 * 
 * @param bracket - Target price bracket.
 * @returns - Maximum price range as a number.
 */
function getMaxPrice(bracket: PriceBracket): number {
	switch (bracket) {
		case PriceBracket.Low:
			return 10.0;

		case PriceBracket.Medium:
			return 20.0;

		case PriceBracket.High:
			return 30.0;

		default:
			return 9999.0;
	}
}



/**
 * Find orders by price range.
 * 
 * @param price - Target price range.
 * @param orders - Orders to search trough for target price range.
 * @returns - Filtered orders.
 */
function getOrders(price: PriceBracket, orders: Order[][]) {
	let filteredOrders:Order[][] = [];
	orders[0].filter((order: Order) => order.price <= getMaxPrice(price));

	orders.forEach((restaurant: Order[]) => {
		const res = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));
		filteredOrders.push(res);
	});

	return filteredOrders;
}



/**
 * Print restaurants and orders based on provided data.
 * 
 * @param restaurants - A collection of restaurants to look trough.
 * @param orders - Orders to pait with restaurants.
 */
function printOrders (restaurants: Restaurant[], orders: Order[][]) {
	restaurants.forEach((restaurant: Restaurant, index: number) => {
		if (orders[index].length) {
			console.log(restaurant.name);
			orders[index].forEach((order: Order) => {
				console.log(`- ${order.name}: ${order.price}`);
			});
		}
	});
}



/**
 * Extecute code.
 */
const elligibleOrders = getOrders(PriceBracket.Low, orders);
//console.log(elligibleOrders); // Used for testing.
printOrders(restaurants, elligibleOrders);

