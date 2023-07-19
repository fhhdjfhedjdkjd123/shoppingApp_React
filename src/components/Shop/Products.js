import ProductItem from './ProductItem';
import classes from './Products.module.css';



const DUMMY_PRODUCTS=[
  {
    id:"p1",
    price:300,
    title:"The wings of fire",
    description:"Biography of abdul kalam"
  },
  {
    id:"p2",
    price:189,
    title:"Rich dad poor dad",
    description:"The best book everyone need to read"
  }

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products)=>(
            <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
