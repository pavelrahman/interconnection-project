import React, {Component} from 'react';
import EmployeeCard from './employeeCard'

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            employeeList:[]
        }
        // console.log('this is ')
        // console.log(this.props);
    }


    componentDidMount(){
        var self = this;
        fetch('http://127.0.0.1:8000/api/v1/employees/all/')
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            self.setState({
                employeeList:data
            })
        })
    }

    render(){


        let show = this.state.employeeList.map((em, index)=>{
            return <EmployeeCard history={this.props.history} employee={em} index={index}/>
        })

        return <div className="row">{show}</div>
    }
}

export default EmployeeContainer;