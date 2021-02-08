import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import { useHistory, useParams } from 'react-router-dom';
import Product from './Product';
import './styles.scss';
import FormSelect from './../forms/FormSelect';
import LoadMore from './../LoadMore';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/buscar/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No se encontro el resultado.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Mostrar todos',
      value: ''
    }, {
      name: 'Hombres',
      value: 'hombres'
    }, {
      name: 'Mujeres',
      value: 'mujeres'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">

      <h1>
        Buscar producto
      </h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice
          };

          return (
            <Product {...configProduct} />
          );
        })}
      </div>

      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}

    </div>
  );
};

export default ProductResults;
