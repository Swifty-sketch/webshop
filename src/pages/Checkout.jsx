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
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col items-center">
        {/* Scrollable container for cart items */}
        <div className="w-full max-h-48 overflow-y-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center p-4 border-t border-b w-full">
              <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
              <div className="flex flex-col items-center">
                <p className="font-semibold">{item.title}</p>
                <p>Price: {item.price} $</p>
                <p>Size: {item.size}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="border border-gray-300 text-sm font-semibold w-12 ml-2 text-center"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Billing Form */}
        <div className="mt-8 w-full flex flex-col items-center">
          <Typography variant="h6" className="mb-4">
            Billing Details
          </Typography>
          <form className="flex flex-col gap-4 w-3/4">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Name
              </Typography>
              <Input
                placeholder="Full Name"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Address
              </Typography>
              <Input
                placeholder="Street Address"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                City
              </Typography>
              <Input
                placeholder="City"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Country
              </Typography>
              <Select
                placeholder="Country"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                Postal Code
              </Typography>
              <Input
                placeholder="Postal Code"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
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
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                            placeholder="123"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="-ml-2.5">
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center gap-2 font-normal"
                      >
                        <LockClosedIcon className="h-4 w-4 text-gray-400" />
                        Payments are secure and encrypted
                      </Typography>
                    </div>

                    <Button className="mt-4" fullWidth>
                      Pay Now
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value="paypal" className="p-0">
                  <div className="mt-12 flex flex-col gap-4">
                    <Button variant="outlined" className="flex items-center justify-center gap-4">
                      <img
                        alt="paypal"
                        src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                        className="w-6"
                      />
                      Continue with PayPal
                    </Button>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
