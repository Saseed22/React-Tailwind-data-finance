import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
      <div>
        <h1 className="w-full text-3xl font-bold px-4 text-green-400">
          REACT.
        </h1>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          facilis cumque vel nulla similique inventore quibusdam placeat
          molestiae odio. Laborum possimus laboriosam nemo itaque ducimus
          corrupti illo totam reprehenderit commodi.
              </p>
              <div  className="flex justify-between md:w-[75%] my-6">
                  <a href="/"><FaDribbbleSquare size={30} /></a>
                  <a href="/"><FaFacebookSquare size={30} /></a>
                  <a href="/"><FaGithubSquare size={30} /></a>
                  <a href="/"><FaInstagramSquare size={30} /></a>
                  <a href="/"><FaTwitterSquare size={30} /></a>
              </div>
          </div>
          <div className="lg:col-span-2 flex justify-between mt-6">
              <div>
                  <h6 className="font-medium text-gray-400">Solutions</h6>
                  <ul>
                      <li className="py-2 text-sm">Analytics</li>
                      <li className="py-2 text-sm">Markting</li>
                      <li className="py-2 text-sm">Commerce</li>
                      <li className="py-2 text-sm">Insights</li>
                  </ul>
              </div>
              <div>
                  <h6 className="font-medium text-gray-400">Support</h6>
                  <ul>
                      <li className="py-2 text-sm">Pricing</li>
                      <li className="py-2 text-sm">Documentions</li>
                      <li className="py-2 text-sm">Guides</li>
                      <li className="py-2 text-sm">API Status</li>
                  </ul>
              </div>
              <div>
                  <h6 className="font-medium text-gray-400">Company</h6>
                  <ul>
                      <li className="py-2 text-sm">About</li>
                      <li className="py-2 text-sm">Blog</li>
                      <li className="py-2 text-sm">Jobs</li>
                      <li className="py-2 text-sm">Press</li>
                      <li className="py-2 text-sm">Careers</li>
                  </ul>
              </div>
              <div>
                  <h6 className="font-medium text-gray-400">Legal</h6>
                  <ul>
                      <li className="py-2 text-sm">Claim</li>
                      <li className="py-2 text-sm">Policy</li>
                      <li className="py-2 text-sm">Terms</li>
                  </ul>
              </div>
          </div>
    </div>
  );
};

export default Footer;
