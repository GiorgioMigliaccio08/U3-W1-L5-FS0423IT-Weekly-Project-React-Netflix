import { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";

const FilmsDisney = (props) => {
  const [film, SetFilm] = useState([]);
  const [error, SetError] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);

  const fetchFilm = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=2ce93e93&s=disney"
      );

      if (response.ok) {
        const data = await response.json();
        SetFilm(data.Search);
        SetIsLoading(false);
      } else {
        SetError(true);
        SetIsLoading(false);
      }
    } catch (error) {
      SetError(true);
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  return (
    <>
      <h3 className="fw-bold fs-4 text-white ms-3 mt-3 mb-3">Film Disney</h3>
      <Container fluid>
        {isLoading && !error && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Wait..</span>
          </Spinner>
        )}
        {error && !isLoading && (
          <Alert variant="danger">
            {error ? error : "Errore nel trovare i film"}
          </Alert>
        )}
        <div className="row">
          {film.map((movie) => (
            <div
              className=" col-sm-12 col-md-6 col-lg-1 me-12"
              key={movie.imdbID}
            >
              <Card className="netflix-card w-200 h-200">
                <Card.Img src={movie.Poster} className="h-100" />
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default FilmsDisney;
