import React from 'react'
import p1 from '../../../assets/img/s1.webp';
import p2 from '../../../assets/img/s2.webp';
import p3 from '../../../assets/img/s3.webp';
import p4 from '../../../assets/img/s4.webp';
import p5 from '../../../assets/img/s5.webp';
import p6 from '../../../assets/img/s6.jpg';
import p7 from '../../../assets/img/s7.jpeg';
import e1 from '../../../assets/img/e1.jpg';
import h1 from '../../../assets/img/h1.jpg';
import b1 from '../../../assets/img/b1.png';

const Blog = () => {
  const books = [
    {
      id: 1,
      image: p3,
      title: 'Sunscreen',
      description: 'Lorem ipsum, dolor sit amet.',
      price: '$6.00',
      stars: 2,
    },
    {
      id: 2,
      image: p4,
      title: 'Mineral',
      description: 'Lorem ipsum, dolor sit amet.',
      price: '$10.00',
      stars: 5,
    },
    {
      id: 3,
      image: p5,
      title: 'Serums',
      description: 'Lorem ipsum, dolor sit amet.',
      price: '$7.00',
      stars: 2,
    },
    {
      id: 4,
      image: p6,
      title: 'Cleansers',
      description: 'Lorem ipsum, dolor sit amet.',
      price: '$7.00',
      stars: 3,
    }
  ];
  return (
    <div id='blog'>
      <h6>Shop By categories</h6>
      <table className='tb-shop'>
        <tr>
          <td><img src={p1} alt="Cleansers" /></td>
          <td><img src={p3} alt="Moisturizers" /></td>
          <td><img src={p4} alt="Serums" /></td>
          <td><img src={p5} alt="Sunscreens" /></td>
          <td><img src={p2} alt="Exfoliants" /></td>
          <td><img src={p6} alt="Mineral" /></td>
        </tr>
        <tr className='blog-name'>
          <td>Cleansers</td>
          <td>Moisturizers</td>
          <td>Serums</td>
          <td>Sunscreens</td>
          <td>Exfoliants</td>
          <td>Mineral</td>
        </tr>
      </table>
      <div className='blog-introduct'>
        <div className='blog-intro-left'><img src={p7} alt="Welcome to Skincare Store" /></div>
        <div className='blog-intro-right'>
          <span>WELCOME TO SKINCARE STORE</span>
          <h3>Our Commitment To Sustainability</h3>
          <p> Sed id ipsum et purus consectetur ultricies sed vel ligula. Sed vitae urna at nunc scelerisque faucibus.</p>
          <button>Read More</button>
        </div>
      </div>
      <div className='blog-card'>
      <div className="row">
      {books.map((book) => (
        <div className="col-3 py-md-0" key={book.id}>
          <div className="card">
            <div className="card-header">
              <button type="button" className="btn btn-primary">
                <i><img src={e1}  alt="View" /></i>
              </button>
              <button type="button" className="btn btn-primary">
                <i><img src={h1}  alt="Favorite" /></i>
              </button>
              <button type="button" className="btn btn-primary">
                <i><img src={b1}  alt="Add to Cart" /></i>
              </button>
            </div>
            <img src={book.image} width="100%" height="200px" alt={book.title} />
            <div className="card-body">
              <h4>{book.title}</h4>
              <p>{book.description}</p>
              <h6>
                <b>{book.price}</b> <span><button>Send</button></span>
              </h6>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default Blog