import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div>
      <div className="container pt-5">
        <div className="bg-white dark:bg-gray-900 w-100">
          <div className="px-10 py-10 mx-auto">
            <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white">
              Frequently{" "}
              <span className="text-green-600">asked questions..</span>
            </h1>

            <hr className="my-6 border-gray-400 dark:border-gray-700" />

            <div className="flex flex-col md:flex-row space-x-4">
              <div className="px-2 w-2/4">
                <Image
                  className=""
                  src="https://i.ibb.co/CPMfDrx/FAQs.gif"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="px-2 w-2/4">
                <Accordion preExpanded={["a"]} allowZeroExpanded>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibold text-green-500">
                          What is FoodMart Services?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl  text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                          You can use your physical Starbucks Card or your
                          Starbucks India mobile app to purchase any item at all
                          participating Starbucks stores in India. For example-
                          food, beverage, retail coffees, Ready to Drink, Ready
                          to Eat merchandise etc. The value in your Starbucks
                          Card cannot be exchanged for cash.
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol text-green-500">
                          How to buy products at a time ?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8 ">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl  text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                          Physical Starbucks Cards are available in at all
                          Starbucks stores in India or download Starbucks India
                          mobile app and add a Starbucks e-card onto your
                          registered Starbucks India account.
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol text-green-500">
                          Refund policy for customar ?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                          Starbucks Cards are available in at all Starbucks
                          stores in India or download Starbucks India mobile app
                          and add a Starbucks e-card onto your registered
                          Starbucks India account.
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol text-green-500">
                          {" "}
                          Exchange policy for a customar?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                          Starbucks Cards are available in at all Starbucks
                          stores in India or download Starbucks India mobile app
                          and add a Starbucks e-card onto your registered
                          Starbucks India account.
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
