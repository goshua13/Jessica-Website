import React from "react"

const Modal = (props) => {
    const close =() => {
        const video = document.getElementById(`${props.id}`)
        if(video.style.display === 'none') {
            return video.style.display = 'block'
          } else {
           return video.style.display = 'none'
          }
    }
  return (
    <div className="modal" id={props.id}  style={{display: 'none;'}}>
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
          <button type="button" className="close" onClick={close}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal
