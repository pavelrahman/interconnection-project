import React, {Component} from 'react';

class EmployeeCard extends Component {
    constructor(props){
        super(props);
        this.onDetailClick = this.onDetailClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    
    onDetailClick(){
        console.log(this.props);
        this.props.history.push({
            pathname: '/employee-details',
            search: '?id=' + this.props.employee.id,
            // state: {
            //     employee: this.props.employee,
            // }
        });
        
    }

    onDeleteClick(){
        console.log(this.props.employee.id);
        var self = this;
        fetch('http://127.0.0.1:8000/api/v1/employees/all/'+this.props.employee.id+'/', { 
        method: 'DELETE',
        });

        window.location.reload();
    }

    onEditClick(){
        console.log(this.props);
        this.props.history.push({
            pathname: '/create-employee',
            search: '?id=' + this.props.employee.id,
        });
        
    }

    render(){
        const divStyle = {
            "width": "18rem",
            "margin":"10px"
          };
          return <div class="card col-md-3" style={divStyle}>
                    <img class="card-img-top" src={this.props.employee.image_thumb} alt="Card image cap"/>
                    <div class="card-body">
                        <h6>{this.props.index}</h6>
                        <h5 class="card-title">{this.props.employee.first_name+' '+this.props.employee.sur_name}</h5>
                        <p class="card-text">Gender : {this.props.employee.gender =="M" ? 'Male':'Female'}</p>
                        <p class="card-text">City : {this.props.employee.city}</p>
                        <p class="card-text">Country : {this.props.employee.country}</p>
                        <button class="btn btn-primary" onClick={this.onDetailClick.bind(this)}>Details</button>
                        <button class="btn btn-primary" style={{ "margin":"10px"}} onClick={this.onEditClick.bind(this)}>Edit</button>
                        <button class="btn btn-primary" style={{ "margin":"10px"}} onClick={this.onDeleteClick.bind(this)}>Del</button>
                    </div>
               </div>;
    }
}

export default EmployeeCard;