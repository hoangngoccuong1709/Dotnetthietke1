const ProductDetails = ({ removeProduct, product }) => {
    const { productId } = URLSearchParams();
    const { image, title, price, category, description } = product;
    // const dispatch = useDispatch();
    // const fetchProductDetail = async (id) => {
    //   dispatch(selectedProduct(response.data));
    // };
    return (
      <div>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>
            <img alt={productId} src={image} />
  
            <div>
              <h1>{title}</h1>
              <h2>
                <p>${price}</p>
              </h2>
              <h3>{category}</h3>
              <p>{description}</p>
              <button>Add to Cart</button>
              <button onClick={() => removeProduct(productId)}>Usuń</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  const mapStateToProps = (state) => {
    return {
      products: state.allProducts.products,
      product: state.product,
    };
  };
  
  // const mapDispatchToProps = {
  //   removeProduct,
  //   selectedProduct,
  // };
  // export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);