import React from "react"

const Spinner = (props)=> props.show?(<div className="spinner-border text-dark me-2" role="status">
  <span className="visually-hidden">Loading...</span>
</div>):null

export default Spinner
