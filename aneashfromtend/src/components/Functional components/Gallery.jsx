const Gallery = (props) =>{
    return(
        <div>
            <h2>{props.page} Page</h2>
            <img src="./src/assets/logo.png" alt="Sece logo"/>
            <h2>The image is {props.image}</h2>
        </div>
    )
}
export default Gallery;