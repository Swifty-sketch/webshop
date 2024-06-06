import React from "react";
import { useLocation } from "react-router-dom";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  // Function to format card number
}

function formatExpires(value) {
  // Function to format card expiration date
}

export default function CheckoutForm() {
  const location = useLocation();
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem("cartStorage")) || [];

  return (
    <div className="flex">
      <div className="w-1/2">
        {/* Display cart items */}
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center p-4 border-t border-b">
            <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>Price: {item.price} $</p>
              <p>Size: {item.size}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="border border-gray-300 text-sm font-semibold w-12 ml-2"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <Card className="w-full max-w-[24rem]">
          <CardHeader
            color="gray"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 py-8 text-center"
          >
            <div className="mb-4 h-20 p-6 text-white">
              {type === "card" ? (
                <CreditCardIcon className="h-10 w-10 text-white" />
              ) : (
                <img
                  alt="paypal "
                  className="w-14 "
                  src="https://docs.material-tailwind.com/icons/paypall.png"
                />
              )}
            </div>
            <Typography variant="h5" color="white">
              Checkout
            </Typography>
          </CardHeader>
          <CardBody>
            <Tabs value={type} className="overflow-visible">
              <TabsHeader className="relative z-0 ">
                <Tab value="card" onClick={() => setType("card")}>
                  Pay with Card
                </Tab>
                <Tab value="paypal" onClick={() => setType("paypal")}>
                  Pay with PayPal
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-visible"
                animate={{
                  initial: {
                    x: type === "card" ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === "card" ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="card" className="p-0">
                  <form className="mt-12 flex flex-col gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Your Email
                      </Typography>
                      <Input
                        type="email"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>

                    <div className="my-3">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium "
                      >
                        Card Details
                      </Typography>

                      <Input
                        maxLength={19}
                        value={formatCardNumber(cardNumber)}
                        onChange={(event) => setCardNumber(event.target.value)}
                        icon={
                          <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                        }
                        placeholder="0000 0000 0000 0000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <div className="my-4 flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            Expires
                          </Typography>
                          <Input
                            maxLength={5}
                            value={formatExpires(cardExpires)}
                            onChange={(event) =>
                              setCardExpires(event.target.value)
                            }
                            containerProps={{ className: "min-w-[72px]" }}
                            placeholder="00/00"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-medium"
                          >
                            CVC
                          </Typography>
                          <Input
                            maxLength={4}
                            containerProps={{ className: "min-w-[72px]" }}
                            placeholder="000"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                      </div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Holder Name
                      </Typography>
                      <Input
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Button size="lg">Pay Now</Button>
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center justify-center gap-2 font-medium opacity"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </TabPanel>
                <TabPanel value="paypal" className="p-0">
                  <form className="mt-12 flex flex-col gap-4">
                    <div>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="mb-4 font-medium"
                      >
                        Personal Details
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Your Email
                      </Typography>
                      <Input
                        type="email"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>

                    <div className="my-6">
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="mb-4 font-medium"
                      >
                        Billing Address
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Country
                      </Typography>
                      <Select
                        placeholder="USA"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        menuProps={{ className: "h-48" }}
                      >
                        {countries.map(({ name, flags }) => (
                          <Option key={name} value={name}>
                            <div className="flex items-center gap-x-2">
                              <img
                                src={flags.svg}
                                alt={name}
                                className="h-4 w-4 rounded-full object-cover"
                              />
                              {name}
                            </div>
                          </Option>
                        ))}
                      </Select>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mt-4 -mb-2 font-medium"
                      >
                        Postal Code
                      </Typography>
                      <Input
                        placeholder="0000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{ className: "mt-4" }}
                      />
                    </div>
                    <Button size="lg">pay with paypal</Button>
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center justify-center gap-2 font-medium opacity-60"
                    >
                      <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments
                      are secure and encrypted
                    </Typography>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}