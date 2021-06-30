
function Image(props){
    return(
        <div className={props.imgclass} onClick={props.display}>
            <p className='imagetitle'>{props.imgtitle}</p>
        </div>
    );
}

export default Image;