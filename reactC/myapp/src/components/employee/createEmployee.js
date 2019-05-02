import React, {Component} from 'react';
import Select from 'react-select';



class CreateEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            surName:'',
            userName:'',
            age:'',
            country:'',
            city:'',
            gender:'',
            image:'',
            countryList:[
                { value: 'Bangladesh', label: 'Bangladesh' },
                { value: 'Pakistan', label: 'Pakistan' },
                { value: 'India', label: 'India' }
            ],
            cityList:[],
            editMode:false,
            employee:{},
            id:undefined,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onSubmit(){
        var {firstName, surName, userName, age, country, city, gender} = this.state;
        var object = {
            'first_name': firstName,
            'sur_name': surName,
            'user_name': userName,
            'age': parseInt(age),
            'country':country.value,
            'city':city.value,
            'gender':gender.value,
        }


        fetch("http://127.0.0.1:8000/api/v1/employees/all/", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(object), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));

}
    

onUpdate(){
    var {firstName, surName, userName, age, country, city, gender, id} = this.state;
    console.log(gender.value);
        var object = {
            'id':id,
            'first_name': firstName,
            'sur_name': surName,
            'user_name': userName,
            'age': parseInt(age),
            'country':country.value,
            'city':city.value,
            'gender':gender.value,
        }

        console.log(object);
        

        fetch("http://127.0.0.1:8000/api/v1/employees/all/"+id+'/', {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(object), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));

          this.props.history.push({
            pathname: '/',
        });
}

componentDidMount(){
    var self = this;
    const queryParams = new URLSearchParams(this.props.location.search);
    var id = queryParams.get('id');
    if(id){
        console.log('has id');
        fetch('http://127.0.0.1:8000/api/v1/employees/all/'+id+'/')
        .then(function (res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            self.setState({
            firstName: data.first_name,
            surName: data.sur_name,
            userName: data.user_name,
            age: parseInt(data.age),
            country:data.country,
            city:data.city,
            gender:data.gender,
            editMode:true,
            id:id,
            })
        });

    }else{

    }
}

    onChange(type, e){
        const self = this;
        switch(type) {
            case 'firstName':{
                self.setState({
                    firstName: e.target.value
                });
                break;
            }
            case 'surName':{
                self.setState({
                    surName: e.target.value
                });
                break;
            }
            case 'userName':{
                self.setState({
                    userName: e.target.value
                });
                break;
            }
            case 'age':{
                self.setState({
                    age: e.target.value
                });
                break;
            }
            case 'country':{
                var cityList = [];
                if (e.value === 'Bangladesh'){
                    cityList = [{ value: 'Dhaka', label: 'Dhaka' },
                    { value: 'Chittagong', label: 'Chittagong' },
                    { value: 'Sylhet', label: 'Sylhet' }]
                }
                self.setState({
                    country: e,
                    cityList:cityList,
                });
                break;
            }
            case 'city':{
                self.setState({
                    city: e
                });
                break;
            }
            case 'gender':{
                self.setState({
                    gender: e
                });
                break;
            }
            case 'image':{
                self.setState({
                    image: e.target
                });
                break;
            }
            default:
              break;
          }
    }



    render(){

        const gender = [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' }
        ];

        return <div className='container'>
                    <h4>Create Employee</h4><br/>
                    <div className='row'>
                        <div className='col-md-3'>
          
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter First Name" value={this.state.firstName} onChange={this.onChange.bind(this,'firstName')}/>
                                </div>
                                
                                
                                <div className="form-group">
                                    <label >User Name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter User Name" value={this.state.userName} onChange={this.onChange.bind(this, 'userName')}/>
                                </div>
                                
                                <div className="form-group">
                                    <label >Country</label>
                                    <Select options={this.state.countryList} value={this.state.country} onChange={this.onChange.bind(this, 'country')}/>
                                </div>

                                <div className="form-group">
                                    <label >Gender</label>
                                    <Select options={gender} value={this.state.gender} onChange={this.onChange.bind(this, 'gender')}/>
                                </div>
                                
                                {this.state.editMode===true?<button onClick={this.onUpdate.bind(this)}>Update</button>:<button onClick={this.onSubmit.bind(this)}>Save</button>}
                        </div>
                        <div className='col-md-3'>
                            <div className="form-group">
                                <label >Sur Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Sur Name" value={this.state.surName} onChange={this.onChange.bind(this, 'surName')}/>
                            </div>

                            <div className="form-group">
                                    <label >Age</label>
                                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Age" value={this.state.age} onChange={this.onChange.bind(this, 'age')}/>
                            </div>

                            <div className="form-group">
                                <label >City</label>
                                <Select options={this.state.cityList} value={this.state.city} onChange={this.onChange.bind(this, 'city')}/>
                            </div>

                            <div className="form-group">
                                <label >Add Image</label>
                                <input type="file"  accept="image/*" id="id_image_thumb" alt='no image'></input>
                            </div>
                        </div>
                        
                    </div>
                </div>
    }
}

export default CreateEmployee;