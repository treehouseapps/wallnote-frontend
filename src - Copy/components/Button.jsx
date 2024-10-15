const Button = (props) => {
    return (
        <button type="submit" className={props.class}>{props.value}</button>
    );
}

export default Button;