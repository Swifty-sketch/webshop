import React from "react";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="p-8 md:p-16 lg:p-20" style={{ maxWidth: "1200px" }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 text-left">
            This is Shoes & Stitches group.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 lg:mb-8 text-left">
            Shoes & Stitches is a leader in fashion in Scandinavia. Since 1989,
            we have brought well-priced outerwear and shoes of the best quality
            to millions of customers.
          </p>
          <img
            src="/CustomerService.png"
            alt="About Us"
            className="mt-12 mb-8 md:mb-12"
          />
          <p className="text-xl md:text-2xl font-bold mb-4 mt-8 text-left">
            Responsible fashion for all ages
          </p>
          <p className="text-base md:text-lg mb-4 text-left">
            We are a Swedish-based fashion company that designs and sells
            fashion for women, men and children. Our purpose is to create a
            responsible world of fashion, something that has been important to
            us ever since Shoes & Stitches was founded in the 80s. We are
            convinced that it is possible to work sustainably and want to be a
            role model and inspiration for the entire industry.
          </p>
          <p className="text-xl md:text-2xl font-bold mb-4 mt-8 text-left">
            More than 50 stores and a strong online presence
          </p>
          <p className="text-base md:text-lg mb-4 text-left">
            We have more than 50 stores in Sweden, Norway, Finland, Poland and
            Great Britain. We are online in over 20 countries in Europe and in
            Asia. Our approximately 1,000 colleagues are located in eight
            countries and the head office is located in Mölndal, Sweden. Since
            2019, the Kappahl group is wholly owned by Mellby Gård . Mellby Gård
            is a family-owned, long-term investor that strives to preserve the
            entrepreneurial spirit in its companies.
          </p>
          {/* First set of squares side by side */}
          <div className="flex flex-col lg:flex-row justify-between mt-8 lg:mt-12">
            <div
              className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0"
              style={{ height: "500px" }}
            >
              <img
                src="/customerService.jpg"
                alt="Customer Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-full lg:w-1/2 flex items-center p-4 lg:p-8"
              style={{ height: "500px", backgroundColor: "#f5f5dc" }}
            >
              <p className="text-lg md:text-xl">
                Our customer service team is dedicated to providing you with the
                best possible experience. Whether you have questions about our
                products or need assistance with your order, we are here to
                help.
              </p>
            </div>
          </div>
          {/* Second set of squares side by side, opposite arrangement */}
          <div className="flex flex-col lg:flex-row justify-between mt-8 lg:mt-0">
            <div
              className="w-full lg:w-1/2 flex items-center p-4 lg:p-8 order-2 lg:order-1"
              style={{ height: "500px", backgroundColor: "#f5f5dc" }}
            >
              <p className="text-lg md:text-xl">
                At Shoes & Stitches, we believe in the power of family and
                tradition. Our designs are inspired by timeless styles that are
                perfect for every generation. From father to son, our quality
                craftsmanship ensures that our pieces stand the test of time.
              </p>
            </div>
            <div
              className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 order-1 lg:order-2"
              style={{ height: "500px" }}
            >
              <img
                src="/FatherSon.jpg"
                alt="Father and Son"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
