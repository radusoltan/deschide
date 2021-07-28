import React, {Component} from 'react'
$.DataTable = require('datatables.net')


class Index extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    const users = this.props.users
    console.log(users)
    // $(this.refs.main).DataTable({
    //   dom: '<"data-table-wrapper"t>',
    //
    // })
  }

  render() {

    return <div>
      <table ref="main" />
      </div>
  }
}

export default Index;
