import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppLink from 'applink';

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {}

        this.openAppleStore = this.openAppleStore.bind(this);
    }

    openAppleStore(){
        var twitter = new AppLink()
 
        twitter.open({
            error: function () {
                window.open(encodeURI("https://twitter.com/intent/tweet?text=Look at this awesome thing"), "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + Math.round((screen.height - 450)/2) + ",left=" + Math.round((screen.width - 550)/2))
            },
            success: function () {},
            nativeURL: encodeURI("twitter://post?message=Look at this awesome thing")
        })
    }

    render(){
        return(
            <div>
    
                <button onClick={this.openAppleStore} value="Apple store">
                    Apple Store
                </button>

            </div>
        );
    }
}   

function mapStateToProps(){
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(UserList);
