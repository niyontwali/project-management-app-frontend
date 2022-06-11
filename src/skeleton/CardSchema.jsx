const CardSchema = () => {
  return (
    <div className="col-md-4 pt-3 schema-container">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <span className="schema-title skeleton"></span>
            <div className="schema-view skeleton" to="/"></div>
          </div>
          <p className="schema-status skeleton"></p>
        </div>
      </div>
    </div>
  )
}

export default CardSchema