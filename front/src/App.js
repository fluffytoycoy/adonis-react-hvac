import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/ProductsPage/Products';
//import SingleProduct from './components/SingleProductPage/SingleProduct';

import ProductHOC from './components/SingleProductPage/ProductHOC';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/Utils/Scroll/Scroll';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: undefined,
      productsQuery:{
        pageInfo:{
          pageNum: 1,
          productsPerPage: 8
        },
      }
    };
     this.productSelected = this.productSelected.bind(this);
     this.setPageInfo = this.setPageInfo.bind(this);
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

  setPageInfo(pageInfo){
    this.setState(prevState=> ({
      productsQuery: {
        ...prevState.productsQuery,
        pageInfo: pageInfo
      }
    }))
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
              path="/Products/"
              render={(props) =>
                <Products
                {...props}
                productSelected={this.productSelected}
                />}
            />
            <Route
              exact
              path="/Products/:category/:subType"
              render={(props) => <Products
                {...props}
                productSelected={this.productSelected}
                />}
            />
            <Route
              exact
              path="/Products/:category/:subType/Page/:pageNum/"
              render={(props) => <Products
                {...props}
                productSelected={this.productSelected}
                />}
            />
            <Route
              exact
              path="/Products/:category/:subType/Page/:pageNum/:productsPerPage"
              render={(props) => <Products
                {...props}
                productSelected={this.productSelected}
                />}
              />
            <Route
              exact
              path="/product/gallery"
              render={(props) => <Gallery {...props}/>}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props}/>} />
            />
            <Route
              exact
              path="/product/:type/:item"
              render={(props) => <ProductHOC {...props}
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
