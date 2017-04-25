import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import Modal from 'react-modal';
import AppLink from 'applink';

//import {fetchUsers, getUserById} from '../actions';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            // openModal: false
        }

        // this._handleCloseModal = this._handleCloseModal.bind(this);
        // this._handleClickDetalhes = this._handleClickDetalhes.bind(this);
        this.openAppleStore = this.openAppleStore.bind(this);
    }

    // componentWillMount(){
    //     //this.props.fetchUsers();
    // }

    // componentWillUpdate(nextProps){
    //     //console.log("nextProp: ", nextProps.Pessoas)

    // }

    //_handleClickDetalhes(id){
        // this.setState({openModal: true});
        // this.props.getUserById(id);
    //}

    //_handleCloseModal() {
        // this.setState({openModal: false});
    //}

    //renderUser(user){
        //console.log("user: ", user);
       //TODO
       //open a modal with all user information
       //const click = this._handleClickDetalhes.bind(this, user.id);
        /*return(            
            <div id={user.id} className='card card-block' key={user.id}>
                <h4 className='card-title'>{user.name}</h4>
                <p className='card-text'>Empresa: {user.company.name}</p>
                <p className='card-text'>Tel: {user.phone}</p>
                <a className='btn btn-primary' onClick= { () => {this._handleClickDetalhes(user.id) }}> Detalhes </a>
                <a className='btn btn-danger'> Excluir </a>
            </div>
        );*/
    //}

    openAppleStore(){
        var twitter = new AppLink()
 
        twitter.open({
            error: function () {
                window.open(encodeURI("https://twitter.com/intent/tweet?text=Look at this awesome thing"), "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + Math.round((screen.height - 450)/2) + ",left=" + Math.round((screen.width - 550)/2))
            },
            success: function () {},
            nativeURL: encodeURI("twitter://post?message=Look at this awesome thing")
        })
        //console.log("entrei");
    }

    render(){
        return(
            <div>
    
                <button onClick={this.openAppleStore} value="Apple store">
                    Apple Store
                </button>

                {/*<Modal
                    isOpen={this.state.openModal}
                    onRequestClose={this._handleCloseModal}
                    style={customStyles}
                    contentLabel="Modal">
                    
                    <p>Rua: {this.props.info.users.address}</p>
                    <p>Numero: {this.props.details.address.suite}</p>
                    <p>Cidade: {this.props.details.address.city}</p>
                    <p>CEP: {this.props.details.address.zipcode}</p>
                   
                </Modal>*/}

                {/*<div className='user-list'>
                    {this.props.Pessoas.map(this.renderUser, this)}
                </div>*/}
            </div>
        );
    }
}   

function mapStateToProps(){
    //  console.log("mapStateToProps - info: ", Pessoas['usersInfo'])
    // return{
    //      Pessoas
    // }
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({},dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(UserList);
