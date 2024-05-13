import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function AddMovieForm(props) {
  const [movie, setMovie] = useState({
    title: '',
    stars: [], 
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMovie(movie);
    setMovie({
      title: '',
      stars: [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label>Titel</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Titel"
          value={movie.title}
            onChange={handleChange}
            required // Fältet måste vara ifyllt/obliagtoriskt
        />
            <div className="valid-feedback"> Det ser bra ut</div> 
            <div className="invalid-feedback"> Var god fyll i titel</div>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupStars">
        <Form.Label>Betyg</Form.Label>
        <Form.Control
          as="select"
          name="rating"
          value={movie.rating}
            onChange={handleChange}
            required // Fältet är obligatoriskt obligatoriskt
        >
          <option value="">Välj betyg</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
              </Form.Control>
              <div className="valid-feedback"> Det ser bra ut </div>
              <div className="invalid-feedback"> Var god fyll i ett betyg</div>
      </Form.Group>
          <button type="submit">lägg till film</button>
          // töm formulär
    </Form>
  );
};

export default AddMovieForm;
