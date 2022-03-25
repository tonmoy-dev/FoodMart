import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import useTranslation from 'next-translate/useTranslation';

const Faq = () => {
const { t } = useTranslation('faqpage');

  return (
    <div>
      <div className="container pt-5 mx-auto">
        <div className="bg-white dark:bg-gray-900 w-100">
          <div className="px-4 md:px-0 py-10 mx-auto">
            <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white"> 
              <span className="text-gray-600">{t('title')}</span>
            </h1>

            <hr className="my-6 border-gray-400 dark:border-gray-700" />

            <div className="flex flex-col md:flex-row space-x-4">
              <div className="md:w-1/2 w-full">
                <Image
                  className=""
                  src="https://i.ibb.co/CPMfDrx/FAQs.gif"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="md:w-1/2 w-full">
                <Accordion preExpanded={["a"]} allowZeroExpanded>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibold primary-color">
                          {t("question1")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl  text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                        {t("answer1")}
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol primary-color">
                        {t("question2")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8 ">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl  text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                        {t("answer2")}
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol primary-color">
                        {t("question3")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                        {t("answer3")}
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="text-xl font-semibol primary-color">
                          {" "}
                          {t("question4")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-green-500"></span>

                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-400 bg-green-100 p-10">
                        {t("answer4")}
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
