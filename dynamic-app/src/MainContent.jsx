import React, {Component} from "react";

export default class MainContent extends 
Component{
    
    state = {pageTitle: "Customers",
        customersCount:5,
        customers: [
            {id: 1,name: "Scott", phone: "123-456",
            address: {city: "New Delhi"} },
           
            {id: 2,name: "Jones", phone: "982-014",address: {city: "New Berlin"} },
            {id: 3,name: "Allen", phone: "889-921", address: {city: "New Jersy"} },
            {id: 4,name: "James", phone: "552-901",address: {city: "New London"} },
            {id: 5,name: "John", phone: "781-778",address: {city: "New New york"} }
        ]
        };

    render() {
        return <div><h4 className="border-bottom m-1p-1">{this.state.pageTitle}
        <span className="badge badge-secondary m-2">{this.state.customersCount}</span> 
        <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>       
        </h4>

        <table className="table">
            <thead>

                <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>city</th>
                </tr>

            </thead>
            <tbody>
            {
                this.state.customers.map((cust) => {
                    return (
                        <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>{cust.name}</td>
                        <td>{cust.phone}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                    );
                })
            }

            </tbody>
        </table>
        
        </div>
        
    }

    onRefreshClick =() =>{
        this.setState({customersCount:7,});
    }
}