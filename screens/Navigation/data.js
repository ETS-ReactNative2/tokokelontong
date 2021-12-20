import { ICONS } from "../../constants";
import { Cart } from "../Cart";
import { Home } from "../Dashboard";
import { Orders } from "../Orders";
import { Recipe } from "../Recipe";
import { User } from "../User";

const tabScreen = [
  {
    name: 'Home',
    component: Home,
    iconActive: ICONS.home,
    iconUnactive: ICONS.homeOutline,
    position: 'first',
  },
  {
    name: 'Recipe',
    component: Recipe,
    iconActive: ICONS.book,
    iconUnactive: ICONS.bookOutline,
    position: 'second',
  },
  {
    name: 'Cart',
    component: Cart,
    iconActive: ICONS.cart,
    iconUnactive: ICONS.cartOutline,
    position: 'third',
  },
  {
    name: 'Orders',
    component: Orders,
    iconActive: ICONS.shopping,
    iconUnactive: ICONS.shoppingOutline,
    position: 'fourth',
  },
  {
    name: 'User',
    component: User,
    iconActive: ICONS.account,
    iconUnactive: ICONS.accountOutline,
    position: 'fifth',
  },
];

export default tabScreen;
