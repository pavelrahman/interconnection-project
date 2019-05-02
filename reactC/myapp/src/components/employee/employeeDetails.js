import React, {Component} from 'react';

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            person:{},
        }
    }


    componentDidMount(){
        var self = this;
        const queryParams = new URLSearchParams(this.props.location.search);
        var id = queryParams.get('id');
        fetch('http://127.0.0.1:8000/api/v1/employees/all/'+id)
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            self.setState({
                person:data,
            })
        })
    }

    render(){
        return <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <h1>Details of {this.state.person.first_name}</h1>
            <img class="card-img-top" src={this.state.person.image_thumb} alt="Card image cap"/>
            <h2>Name: {this.state.person.first_name+' '+this.state.person.sur_name}</h2>
            <h2>Age: {this.state.person.age}</h2>
            <h2>Sex: {this.state.person.gender==='M'?'Male':'Female'}</h2>
            <h2>Country: {this.state.person.country}</h2>
            <h2>City: {this.state.person.city}</h2>
                </div>
            </div>
        </div>
    }
}

export default EmployeeDetails;