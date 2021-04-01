import React from "react";

class AddContact extends React.Component {

    state= {
        name:"",
        email:"",
    };

     add = (e)=>
    {
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="")
        {
            alert("alanları doldurunuz");
            return;
            
        }

this.props.addContactHandler(this.state);
this.setState({name:"", email:""});
        }
     

render()
{

    return(

        <div className="ui main">
            <h2>Add a Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className= "field">
                    <label>Enter name</label>
                    <input type="text" name="name" placeholder="name..." value={this.state.name} onChange= {(e)=>this.setState({name: e.target.value}) }>
                    </input>

                    <div className= "field">
                    <label>Enter e-mail</label>
                    <input type="text" name="email" placeholder="e-mail..." value={this.state.email} onChange= {(e)=>this.setState({email: e.target.value})}>
                    </input>
                </div>
                </div>

                <button className="ui button green">Add a Contact</button>
            </form>
        </div>


    );
}
}

export default AddContact;
