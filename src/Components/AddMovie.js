

import { Modal,Button, } from 'react-bootstrap';
import React, {useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const  AddMovie= ({handleAddNewMovie})=> {
  
        const[NewMovie, setNewMovie]=useState({
              id:uuidv4(),
              title: " ",
              description:" ",
              posterURL: " ",
              rating: 1 ,
             })
        
             
          const handleChange = (e) => {
            setNewMovie ({
              ...NewMovie,[e.target.name]:e.target.value})
          };
       
       
          
          
     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const handleClose = () => setShow(false);

       return (
         <div>


      <Button  variant="success" onClick={handleShow} className="btn" >
       Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="Modaltitle">Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
                <div ClassName="input">
                  <label className="input">Title:     </label>
                  <input type="text" name="title"  onChange={handleChange} ></input>
                </div>
                <div>
                  <label className="input">Description:</label>
                  <input type="text" name="description" onChange={handleChange} ></input>
                </div>
                <div>
                  <label className="input">PosterURL: </label>
                  <input type="text" name="posterURL" onChange={handleChange}></input>
                </div>
                <div>
                  <label className="input">Rating:    </label>
                   <input type="text" name="rating" onChange={handleChange}></input> 
                </div>
              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success"  onClick={()=>handleAddNewMovie(NewMovie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    

</div>)
       
       }    
     
 
export default AddMovie







