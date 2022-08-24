
const Select = (props) => {

    const setHandleClick = () => {
        props.tag(props.item);
    }

    return(
        <div key={props.idx} onClick={setHandleClick}>{props.item}</div>
    );
}

export default Select;