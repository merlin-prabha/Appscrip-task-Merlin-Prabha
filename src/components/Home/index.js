import { Component } from "react";
import Header from "../Header"
import Product from "../Product"
import FilterItem from "../FilterItem";
import Footer from "../Footer";
import {Breadcrumbs, Item, Provider, defaultTheme} from '@adobe/react-spectrum'
import { FaAngleDown } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import "./index.css"

const filterItems = [
    {
        id: "category",
        label: "IDEAL FOR",
        value: ["Men", "Women", "Jewelery", "Electronics"],
        isClicked: false
    },
    {
        id: "price",
        label: "PRICE",
        value: ["<1000", "<100", "<50"],
        isClicked: false
    },
    {
        id: "rating",
        label: "RATING",
        value: [">3", ">4", ">4.5"],
        isClicked: false
    },
    {
        id: "count",
        label: "COUNT",
        value: [">500", ">400", ">300", ">200", ">100"],
        isClicked: false
    },
]

class Home extends Component {
    state = {recommendDropDownClicked: false, products: [], isFilterClicked: false, filterList: filterItems}

    componentDidMount = () => {
        this.getProducts()
    }

    getProducts = async () => {
        const apiurl = "https://fakestoreapi.com/products"
        const options = {
            method: "GET"
        }
        await fetch(apiurl, options)
        .then(res=>res.json())
        .then(json=>{
            this.setState({products: json})
            console.log(json)})

    }

    displayProducts = () =>{
        const {products} = this.state 

        return (
            <ul className="products-list">
                {products.map(each => (<Product details={each} key={each.id} />))}
            </ul>
        )
    }

    onClickFilter = () => {
       
        this.setState(prevState => ({isFilterClicked: !prevState.isFilterClicked}))
        
    }

    onClickDown = (id) => {
        const {filterList} = this.state
        const expandFilter = filterItems.find(each => each.id === id)
        this.setState(prevState => ({
            filterList: prevState.filterList.map(each => {
                if (expandFilter.id === each.id) {
                    return {...each, isClicked: !prevState.isClicked}
                }
                return each
            })
        }))
        
        console.log(expandFilter)
        console.log(id)
    }

    displayFilters = () => {
        const {products, filterList} = this.state
        return (
        <div className="filter-container">
            <p className="bold-text">{products.length} ITEMS</p>
            {filterList.map(each => (<FilterItem key={each.id} details={each} onClickDown={this.onClickDown} />))}
        </div>
        )
    }

    onClickRecommendDropdown = () => {
        this.setState(prevState => ({recommendDropDownClicked: !prevState.recommendDropDownClicked}))
    }

    render() {
        const {recommendDropDownClicked, isFilterClicked} = this.state
        console.log(recommendDropDownClicked)
        return (
    
            <div>
                <Header />
                <div className="home-container">
                    <div className="breadcrumbs">
                        <Provider theme={defaultTheme} colorScheme="light" padding="size-700">
                            <Breadcrumbs>
                                <Item key="home">HOME</Item>
                                <Item key="trendy">SHOP</Item>
                            </Breadcrumbs>
                        </Provider>
                    </div>
                    <div className="home-content-container">
                        <h1 className="text">DISCOVER OUR PRODUCTS</h1>
                        <p className="text">An e-commerce website is an online platform where businesses and consumers can buy and sell products or services. It features product listings, shopping carts, secure payment gateways, and order management systems, providing a seamless shopping experience from browsing to checkout.</p>
                    </div>
                    <div className="filter-box">
                        <button className="box-text" onClick={this.onClickFilter}>{isFilterClicked ? "HIDEFILTER" : "SHOWFILTER"}</button>

                        <div className="recommend-tab">
                            <p className="box-text">RECOMMENDED</p>
                            <FaAngleDown className="down-icon" onClick={this.onClickRecommendDropdown} />
                        </div>
                    </div>
                    {recommendDropDownClicked && (
                        <div className="expanded-recomend-column">
                            <p><TiTick /> RECOMMENDED</p>
                            <p>NEWEST FIRST</p>
                            <p>POPULAR</p>
                            <p>PRICE: HIGN TO LOW</p>
                            <p>PRICE: LOW TO HIGH</p>
                        </div>
                    )} 
                    <div className="filter-recommend-container">
                        {isFilterClicked && (<div className="filter">{this.displayFilters()}</div>)}
                        <div className="list">{this.displayProducts()}</div>
                    </div>  
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home 