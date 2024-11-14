import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Example from '../OrderModal/OrderModal';


function CardOne({ id, image, title, price, categories, count }) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  //   function ShowModal() {
  //       setModalIsOpen(true);
  //   }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {price} руб
        </Card.Text>
        {count > 0 ? (
          <button onClick={() => console.log('Заказать')}>В корзину</button>
        ) : (
          <Example />
        )}
        <Link to={`${id}`} >Подробнее</Link>

      </Card.Body>
    </Card>
  );
}

export default CardOne;