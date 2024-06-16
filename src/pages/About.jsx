import React from "react";

const About = () => {
  return (
    <div className="p-20">
      <h1 className="text-6xl font-bold mb-8">
        This is Shoes & Stitches group.
      </h1>
      <p className="text-2xl font-bold mb-4" style={{ width: "800px" }}>
        Shoes & Stitches is a leader in fashion in Scandinavia. Since 1989, we
        have brought well-priced outerwear and shoes of the best quality to
        millions of customers.
      </p>
      <img
        src="/CustomerService.png"
        alt="About Us"
        className="mt-12 w-full max-w-2xl"
        style={{ maxWidth: "1000px" }}
      />
      <p className="text-3xl font-bold mb-4 mt-8" style={{ width: "800px" }}>
        Responsible fashion for all ages
      </p>
      <p className="text-lg mb-4" style={{ width: "800px" }}>
        We are a Swedish-based fashion company that designs and sells fashion
        for women, men and children. Our purpose is to create a responsible
        world of fashion, something that has been important to us ever since
        Shoes & Stitches was founded in the 80s. We are convinced that it is
        possible to work sustainably and want to be a role model and inspiration
        for the entire industry.
      </p>
      <p className="text-3xl font-bold mb-4 mt-8" style={{ width: "800px" }}>
        More than 50 stores and a strong online presence
      </p>
      <p className="text-lg mb-4" style={{ width: "800px" }}>
        We have more than 50 stores in Sweden, Norway, Finland, Poland and Great
        Britain. We are online in over 20 countries in Europe and in Asia. Our
        approximately 1,000 colleagues are located in eight countries and the
        head office is located in Mölndal, Sweden. Since 2019, the Kappahl group
        is wholly owned by Mellby Gård . Mellby Gård is a family-owned,
        long-term investor that strives to preserve the entrepreneurial spirit
        in its companies.
      </p>
      {/* First set of squares side by side */}
      <div className="flex justify-between mt-12">
        <div
          className="w-1/2 flex items-center justify-center"
          style={{ height: "500px" }}
        >
          <img
            src="/customerService.jpg"
            alt="Customer Service"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-1/2 flex items-center p-8"
          style={{ height: "500px", backgroundColor: "#f5f5dc" }}
        >
          <p className="text-xl">
            Our customer service team is dedicated to providing you with the
            best possible experience. Whether you have questions about our
            products or need assistance with your order, we are here to help.
          </p>
        </div>
      </div>
      {/* Second set of squares side by side, opposite arrangement */}
      <div className="flex justify-between">
        <div
          className="w-1/2 flex items-center p-8"
          style={{ height: "500px", backgroundColor: "#f5f5dc" }}
        >
          <p className="text-xl">
            At Shoes & Stitches, we believe in the power of family and
            tradition. Our designs are inspired by timeless styles that are
            perfect for every generation. From father to son, our quality
            craftsmanship ensures that our pieces stand the test of time.
          </p>
        </div>
        <div
          className="w-1/2 flex items-center justify-center"
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
  );
};

export default About;
