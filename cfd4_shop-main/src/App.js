import { Route, Switch } from "react-router-dom";
import './assets/custom.scss'
import { Footer, Header, ModelCart, ModelSearch } from "./components";
import AppProvider from "./core/AppProvider";
import Account from "./page/Account";
import Home from "./page/Home";
import ShippingAndReturns from "./page/ShippingAndReturns";
import Auth from "./page/Auth";
import Checkout from "./page/Checkout";
import FAQ from "./page/FAQ";
import Page404 from "./page/Page404";
import ShoppingCart from "./page/ShoppingCart";
import ProductDetail from "./page/ProductDetail";
import ContactUs from "./page/ContactUs";
import About from "./page/About";
import Catalog from "./page/Catalog";
import StoreLocator from "./page/StoreLocator";
import reducers from './redux/reducers'
import PrivateRouter from "./core/PrivateRouter";
import ComingSoon from "./page/ComingSoon";


function App() {
  return (
    <AppProvider reducers={reducers}>
      <Header />
      <Switch>
        <PrivateRouter path="/account" component={Account} />
        <Route path="/shipping-and-returns" component={ShippingAndReturns} />
        <Route path="/about" component={About} />
        <Route path="/store-locator" component={StoreLocator} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/faq" component={FAQ} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:slug" component={ProductDetail} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/coming-soon" exact component={ComingSoon} />
        <Route path="/" exact component={Home} />
        <Route path="/" component={Page404} />
      </Switch>
      <Footer />
      <ModelCart />
      <ModelSearch />
    </AppProvider>
  );
}

export default App;
