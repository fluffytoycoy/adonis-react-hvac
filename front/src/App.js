import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/ProductsPage/Products';
import SingleProduct from './components/SingleProductPage/SingleProduct';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/Utils/Scroll/Scroll';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: undefined
    };
     this.productSelected = this.productSelected.bind(this);
  };

  componentWillMount(){
  }

  productSelected(product){
    return new Promise((resolve, reject)=>{
      this.setState({
        selectedProduct: product
      }, ()=>{
        this.state.selectedProduct
        ? resolve(this.state.selectedProduct)
        : reject('selectedProduct state was not set')
      })
    })
  }

  render() {
    return (
      <Router>
      <ScrollToTop>
				<Header/>
					<Switch>
						<Route exact  path="/" component={Home} />
            <Route
              exact
              path="/products/"
              render={(props) => <Products {...props} productSelected={this.productSelected}/>}
            />
            <Route
              exact
              path="/products/:type/"
              render={(props) => <Products {...props} productSelected={this.productSelected}/>}
            />
            <Route
              exact
              path="/products/:type/:pageNum/"
              render={(props) => <Products {...props} productSelected={this.productSelected}/>}
            />
            <Route
              exact
              path="/products/:type/:pageNum/:itemsPerPage"
              render={(props) => <Products {...props} productSelected={this.productSelected} />} />
              />
            <Route
              exact
              path="/product/gallery"
              render={(props) => <Gallery {...props}/>} />
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props}/>} />
            />
            <Route
              exact
              path="/product/:item"
              render={(props) => <SingleProduct {...props}
                productSelected={this.productSelected}
                selectedProduct={this.state.selectedProduct} />}
                />
              />
            <Route component={NotFound}/>
				</Switch>
        <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
