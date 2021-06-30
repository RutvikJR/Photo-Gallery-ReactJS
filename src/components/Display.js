function Display(props) {

var imgNo = parseInt(props.displayimgno);
var title = props.displaytitle;
// var imgsrc =  '"../img/'+imgNo+'.jpg"';


  return (
    <div id="display">
      <div id="prev" onClick={props.Prev}>
        <button> &#8249;</button>
      </div>
      <div id="displayimgtitle">
        <img id="displayimg" src={require("../img/"+imgNo+".jpg").default} alt={title} />
        <p id="displaytitle"> {title} </p>{" "}
      </div>
      <div id="next" onClick={props.Next}>
        <button> &#8250;</button>
      </div>
      <div id="close" onClick={props.closeDisplay}>
        <button> &#10006;</button>
      </div>
    </div>
  );
}

export default Display;
