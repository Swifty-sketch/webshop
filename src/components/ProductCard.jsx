import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ product, handleClick }) => {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  const handleCardClick = () => {
    handleClick(product);
    scrollToTop(); // Call scrollToTop function to scroll up when clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link
      to={{ pathname: '/productpage', state: { product } }}
      className="flex flex-col"
    >
      <Card
        className="w-full flex flex-col"
        onClick={handleCardClick}
      >
        <CardHeader shadow={false} floated={false} className="flex justify-center items-center h-48">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover rounded-t-md"
          />
        </CardHeader>
        <CardBody className="p-2 flex-grow">
          <div className="mb-2">
            <Typography color="blue-gray" className="text-sm font-medium mb-1">
              {truncateString(product.title, 20)}
            </Typography>
            <Typography color="blue-gray" className="text-sm font-medium">
              Från {product.price.toFixed(2)} SEK
            </Typography>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
