import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux'

class Add extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
  }
  handleInput(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return <Fragment>
      <h1 className="h3 mb-3">Roles | Add</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Role name</label>
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInput}/>
                </div>
                <button className="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  }
}

const mapSateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapSateToProps,mapDispatchToProps)(Add)
