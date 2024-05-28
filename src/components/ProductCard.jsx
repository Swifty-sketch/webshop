import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ product, handleClick }) => {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  return (
    <Card className="max-w-[300px] mx-auto">
      <CardHeader shadow={false} floated={false} className="h-56 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-half object-cover rounded-t-md"
        />
      </CardHeader>
      <CardBody className="p-4"> {/* Added padding to the CardBody */}
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {truncateString(product.title, 20)}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${product.price.toFixed(2)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {truncateString(product.description, 66)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={{ pathname: '/productpage', state: { product } }}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            onClick={() => handleClick(product)}
          >
            Add to Cart
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
