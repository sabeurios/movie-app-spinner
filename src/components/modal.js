import React from "./node_modules/react";
import Modal from "./node_modules/react-modal";
import "../App.css";
class MyModal extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      title: "",
      rate: "",
      imageUrl: "",
      year: "",
      description: "",
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleChange = (e) => {
    const { title, value } = e.target;
    this.setState({
      [title]: value,
    });
  };

  add = (e) => {
    e.preventDefault()
    const {title, rate, imageUrl, year, production } = this.state;
    const newMovie = {
      title, rate, imageUrl, year, production 
    }
    console.log(newMovie)
   this.props.add(newMovie);
   this.setState({
     showModal:false
   })
  };
  render() {
    return (
      <div className="">
        <div className="add-card" onClick={this.showModal} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdxwVdH7y2TMTF4hZxwGQC9TgJ6zx8wtF-s_MgxXL_8w3MR1IE&usqp=CAU" alt="add-on"/>
        </div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          className="modall"
          contentLabel="Example Modal"
        >
        
            
            <label for="fname">Movie Name</label>
            <input
              type="text"
              id="fname"
              name="title"
              placeholder="Enter movie name"
              onChange={this.handleChange}
            />

            <label for="lname">Movie rating</label>
            <input
              type="text"
              id="lname"
              name="rate"
              placeholder="Enter movie rating"
              onChange={this.handleChange}
            />
            <label for="lname">Production year</label>
            <input
              type="text"
              id="lname"
              name="year"
              placeholder="Enter movie year poduction.."
              onChange={this.handleChange}
            />
            <label for="lname">Movie Description</label>
            <input
              type="text"
              id="lname"
              name="description"
              placeholder="Enter movie description"
              onChange={this.handleChange}
            />
            <label for="lname">Image Url</label>
            <input
              type="text"
              id="lname"
              name="imageUrl"
              placeholder="Enter image url"
              onChange={this.handleChange}
            />

         <button className="btn btn-primary float-right" onClick={(e)=>this.add(e)}>Add Movie</button>
 
        </Modal>
      </div>
    );
  }
}
export default MyModal;
