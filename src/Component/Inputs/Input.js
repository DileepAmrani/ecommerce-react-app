import React, { Fragment } from "react";

const InputPage = (props) => {
  return (
    <Fragment >
      <div className="form-group" style={{display: 'inline', margin: 'auto'}}>
        <label htmlFor="example2">{props.name}</label>
        <input type={props.type} id="example2" className="form-control form-control-md" value={props.value} onChange={props.onchange} style={{ margin: 'auto'}} />
      </div>
    </Fragment>

  );
}

export  { InputPage };