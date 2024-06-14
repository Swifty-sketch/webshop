import React from "react";
//import customerService from "../assets/customerService.png";

const About = () => {
  return (
    <div className="p-20">
      <h1 className="text-6xl font-bold mb-8">
        This is Shoes & Stiches group.
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
        Shoes & Stiches was founded in the 80s. We are convinced that it is
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
    </div>
  );
};

export default About;
