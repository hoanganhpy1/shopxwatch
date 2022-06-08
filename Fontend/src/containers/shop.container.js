import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
import * as productActions from '../actions/product.action'
import Loading from '../components/loading/loading'
import Shop from '../components/shop/Shop'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentWillMount() {
        this.props.homeActions.getProduct()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.props.page) {
            this.props.homeActions.getProduct()
        }
    }
    render() {
        const { product } = this.props
        if ( product !== null) {
            return (
                <div>
                    <Shop
                        islogin={this.props.islogin}
                        logout={() => this.props.actions.logout()}
                        product={this.props.product}
                        addToCart={(product) => this.props.productActions.addToCart(product)}
                    />
                </div>


            )
        }
        else {
            return (
                <Loading />
            )
        }
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    product: state.homeReducers.product.data,
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch),
        productActions: bindActionCreators(productActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)