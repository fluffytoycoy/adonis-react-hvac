import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/ProductsPage/Products';
import SingleProduct from './components/SingleProductPage/SingleProduct';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: undefined
    };
     this.productSelected = this.productSelected.bind(this);
  };

  componentWillMount(){
    console.log(`${process.env.GOOGLE_API}`)
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
				<Header/>
        <div className="body">
					<Switch>
						<Route exact  path="/" component={Home} />
            <Route
              exact
              path="/products"
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
              path="/product/:item"
              render={(props) => <SingleProduct {...props}
                productSelected={this.productSelected}
                selectedProduct={this.state.selectedProduct} />}
                />
              />
            <Route component={NotFound}/>
				</Switch>
        </div>
        <section style={{background: 'orange', width: '100%', height: '100px', position: 'relative', bottom: '0'}}>

        </section>
      </Router>
    );
  }
}

export default App;
