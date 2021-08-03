import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {addUser} from '../../../../../store/actions/adminUserActions'
import {getRoles} from '../../../../../store/actions/adminRoleActions'


class Add extends Component{

	constructor(props){
		super(props)

		this.state = {
		  name:'',
			email: '',
			password: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

	componentDidMount() {
	  this.props.getRoles(1)
  }

  handleSubmit(e){
		e.preventDefault()

    this.props.addUser({
      name:this.state.name,
      email:this.state.email,
      password: this.state.password
    })

	}
	handleInput(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render(){

		return <Fragment>
			<h1 className="h3 mb-3">Users</h1>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-body">
							<form onSubmit={this.handleSubmit} role="form" method="post">
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" name="name" placeholder="User name" onChange={this.handleInput}/>
                </div>
								<div className="row">
									<div className="mb-3 col-6">
										<label className="form-label">Email</label>
										<input type="email" className="form-control invalid" name="email" placeholder="User Email" onChange={this.handleInput} value={this.state.email}/>
									</div>
									<div className="mb-3 col-md-6">
										<label className="form-label">Password</label>
										<input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
									</div>
                  <div className="mb-3">
                    {
                      console.log(this.props.roles)
                    }
                  </div>
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
	</Fragment>
	}
}

const mapStateToProps = state => {
  return {
    errors: state.adminUser.error,
    roles: state.adminRole.roles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: data=>dispatch(addUser(data)),
    getRoles: (page)=>dispatch(getRoles(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
