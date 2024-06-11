import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
  };

  return (
    <Link
      to={{ pathname: '/productpage', state: { product } }}
      className="w-[300px] h-[350px] mx-auto flex flex-col"
    >
      <Card
        className="h-full w-full flex flex-col"
        onClick={handleCardClick}
      >
        <CardHeader shadow={false} floated={false} className="h-1/2 flex justify-center items-center">
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
        <CardFooter className="pt-0">
          <div className="mt-auto">
            {/* You can remove the button */}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
