import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {get} from "../../../../../../store/actions/adminArticleActions"
import Spinner from "../../../../partials/Spinner";

class ArticleEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      lead: '',
      content: '',
      // is_breaking: false,
      // is_alert: false,
      // is_flash: false,
      status: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleSaveAndClose = this.handleSaveAndClose.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    this.props.get(this.props.match.params.article)
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(e.target.elements.title.value)
    // console.log(e.target.elements.is_breaking.value)



  }

  handleChange(e){
    this.setState({ [e.target.name]:e.target.value })
  }

  handleSave(e){
    e.preventDefault()
  }
  handleSaveAndClose(e){
    e.preventDefault()
  }
  handleClose(e){
    e.preventDefault()
  }

  render(){
    const {id,title,lead,content,created_at,updated_at,status, is_breaking,is_alert,is_flash} = this.props.article
    // this.setState({
    //   title: title,
    //   lead: lead,
    //   content: content,
    //   status: status,
    //   is_breaking: is_breaking,
    //   is_alert: is_alert,
    //   is_flash: is_flash
    // })
    return <Fragment>
      <h1>Article Edit | {title}</h1>
      <Spinner show={this.props.loading} />
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="col-9">
              <div className="mb-3">
                <label className="form-label">Title:</label>
                <input type="text" name="title" value={title} className="form-control" onChange={this.handleChange}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Lead:</label>
                <textarea name="lead" id="lead" cols="30" rows="5" className="form-control" onChange={this.handleChange} value={lead} />
              </div>
              <div className="mb-3">
                <label className="form-label">Content</label>
                <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={this.handleChange} value={content} />
              </div>
            </div>
            <div className="col-3">
              <div className="btn-group btn-group-sm mb-3 text-center" role="group" aria-label="Small button group">
                <button type="button" className="btn btn-secondary me-1 rounded"
                        onClick={this.handleSave}>Save</button>
                <button type="button" className="btn btn-secondary me-1 rounded"
                        onClick={this.handleSaveAndClose}>Save&Close</button>
                <button type="button" className="btn btn-secondary me-1 rounded"
                        onClick={this.handleClose}>Close</button>
              </div>
              <div className="mb-3">
                <label className="form-label">Status:</label>
                <select className="form-control" name="status" value={status} onChange={this.handleChange}>
                  <option>Open this select menu</option>
                  <option value="N">New</option>
                  <option value="S">Submitted</option>
                  <option value="Y">Published</option>
                </select>
              </div>
              <div className="mb-3">
                <div className="form-check form-switch">
                  <input name="is_breaking" className="form-check-input" type="checkbox" onChange={this.handleChange} />
                  <label className="form-check-label">BREAKING</label>
                </div>
                <div className="form-check form-switch">
                  <input name="is_alert" className="form-check-input" type="checkbox" onChange={this.handleChange}/>
                  <label className="form-check-label">NEWS ALERT</label>
                </div>
                <div className="form-check form-switch">
                  <input name="is_flash" className="form-check-input" type="checkbox" onChange={this.handleChange}/>
                  <label className="form-check-label">FLASH</label>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-success" type="submit">Save</button>
        </form>
        </div>
      </div>
    </Fragment>
  }
}

const mapStateToProps = state => {
  return {
    article: state.adminArticle.article,
    loading: state.adminArticle.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get: article=>dispatch(get(article))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit)
