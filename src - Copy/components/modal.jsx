const Modal = (props) => {
    return (
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            {props.text}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Modal;