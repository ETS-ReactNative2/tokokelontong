import { Cart } from "../Cart";
import { Home } from "../Dashboard";
import { Orders } from "../Orders";
import { Recipe } from "../Recipe";
import { User } from "../User";

const tabScreen = [
  {
    name: 'Home',
    component: Home,
    iconActive: 'home-variant',
    iconUnactive: 'home-variant-outline',
    position: 'first',
  },
  {
    name: 'Recipe',
    component: Recipe,
    iconActive: 'book',
    iconUnactive: 'book-outline',
    position: 'second',
  },
  {
    name: 'Cart',
    component: Cart,
    iconActive: 'cart',
    iconUnactive: 'cart-outline',
    position: 'third',
  },
  {
    name: 'Orders',
    component: Orders,
    iconActive: 'shopping',
    iconUnactive: 'shopping-outline',
    position: 'fourth',
  },
  {
    name: 'User',
    component: User,
    iconActive: 'account',
    iconUnactive: 'account-outline',
    position: 'fifth',
  },
];

export default tabScreen;
