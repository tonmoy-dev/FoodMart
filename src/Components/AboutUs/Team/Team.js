import Image from "next/image";
import React from "react";
import {
  faFacebook,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Team = ({ t }) => {
  const teamMember = [
    {
      memberId: 1,
      fullname: `${t("tonmoyTitle")}`,
      developer: "",
      profileImage: "https://i.ibb.co/X2BkGkv/tonmoy.jpg",
      facebook: "https://www.facebook.com/ronodip.bd/",
      Linkedin: "https://www.linkedin.com/in/tonmoy-roy-11a395227/",
      github: "https://github.com/Rx-devs",
    },
    {
      memberId: 2,
      fullname: `${t("anikTitle")}`,
      developer: "",
      profileImage: "https://i.ibb.co/xXLknr6/anik.jpg",
      facebook: "https://www.facebook.com/aaroon.fince/",
      Linkedin: "https://www.linkedin.com/in/anik-deb-nath-26aa22190/",
      github: "https://github.com/Anik-nath",
    },
    {
      memberId: 3,
      fullname: `${t("apuTitle")}`,
      developer: "",
      profileImage: "https://i.ibb.co/Hzx6r7Y/apu.png",
      facebook: "https://www.facebook.com/apu.dm.967",
      Linkedin: "https://www.linkedin.com/in/apudevnath/",
      github: "https://github.com/apudebnath",
    },
    {
      memberId: 4,
      fullname: `${t("showravTitle")}`,
      developer: "",
      profileImage: "https://i.ibb.co/jf09QSx/IMG-20210225-184402.jpg",
      facebook: "https://www.facebook.com/showrav.das.39545/",
      Linkedin: "https://www.linkedin.com/in/showrav-das/",
      github: "https://github.com/showravdas11",
    },
    {
      memberId: 5,
      fullname: `${t("anamikaTitle")}`,
      developer: "",
      profileImage:
        "https://i.ibb.co/C5dJkYC/anu.jpg",
      facebook: "https://www.facebook.com/surovi.susmita",
      Linkedin: "https://www.linkedin.com/in/anamika-sharma-34b1b4227/",
      github: "https://github.com/anamikasharma15",
    },
    {
      memberId: 6,
      fullname: `${t("avishekTitle")}`,
      developer: "",
      profileImage: "https://i.ibb.co/n8JNM2t/IMG-20220121-225242.jpg",
      facebook: "https://www.facebook.com/avishek.devnath.14/",
      Linkedin: "https://www.linkedin.com/in/avishek-devnath/",
      github: "https://github.com/Avishekdevnath",
    },
  ];

  return (
    <div className="mt-20 mx-4 md:mx-0 lg:mx-0">
      <section className="bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center primary-color capitalize lg:text-3xl ">
            {t("meetTeamTitle")}
          </h2>
          <p className="max-w-2xl mt-4 mb-6 mx-auto text-center text-gray-500 ">
            {t("meetTeamSubTitle")}
          </p>
          <div className="grid grid-cols-2 md:gap-12 gap-6 py-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMember.map((team) => (
              <div
                key={team.memberId}
                className="flex pt-4 flex-col items-center rounded-tt-full shadow-xl border-t-2 border-gray-100"
              >
                <Image
                  src={team.profileImage}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  priority
                  className="rounded-full"
                />
                <h1 className="mt-4 md:text-2xl text- font-semibold text-gray-700 capitalize">
                  {team.fullname}
                </h1>
                <p className="mt-2 text-gray-500 capitalize ">Developer</p>
                <div className="flex mt-3 primary-bg-color py-2 w-full justify-center">
                  <a
                    href={team.Linkedin}
                    rel="noreferrer"
                    target="_blank"
                    className="mx-2 text-white  hover:text-green-500"
                    aria-label="Reddit"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-2xl w-5 h-5 text-white hover:text-green-500"
                    />
                  </a>

                  <a
                    href={team.facebook}
                    rel="noreferrer"
                    target="_blank"
                    className="mx-2 text-white  hover:text-green-500"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl w-5 h-5 text-white hover:text-green-500"
                    />
                  </a>

                  <a
                    href={team.github}
                    rel="noreferrer"
                    target="_blank"
                    className="mx-2 text-white hover:text-green-500 "
                    aria-label="Github"
                  >
                   <FontAwesomeIcon
                      icon={faGithub}
                      className="text-2xl w-5 h-5 text-white hover:text-green-500"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
