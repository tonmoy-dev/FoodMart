import Image from "next/image";
import React from 'react';
import reviewStyle from "/styles/Review.module.css";
const Reviews = () => {
    return (
        <>
            <div className={reviewStyle.reviewSection}>
                <h1 className={reviewStyle.rerr}>Reviews</h1>
            </div>

            <section className={reviewStyle.testimonialcont}>
                <div className={reviewStyle.heading}><h2><b>Our</b> Testimonials</h2></div>
                <div className={reviewStyle.wrapper}>
                    <div className={reviewStyle.containers}>
                        <div className={reviewStyle.profile}>
                            <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/w77SX8J/ijsi5fzb1nbkbhxa2gc1.png"
                            alt="" height={100} width={100}/>
                            </div>
                            <h2>Person 1</h2>
                        </div>
                        <div>
                        <p> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>
                        {/* <div className={reviewStyle.social}>
                           <a href="" className="ss"><FontAwesomeIcon className="ddd" icon={faInstagram}></FontAwesomeIcon></a>
                            <a href=""><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                        </div> */}
                    </div>
                </div>
                    <div className={reviewStyle.containers}>
                        <div className={reviewStyle.profile}>
                            <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/0F7zH74/images-q-tbn-ANd9-Gc-Sk-FD7r-VDIsj77-R6-CBhfwmiido-HUQY76-Ze4-Sh-ORlo-VE-ECfb-Yn-DCVri9odp-In-T7e-HX.jpg"
                            alt="" height={100} width={100}/>
                            </div>
                            <h2>Person 1</h2>
                        </div>
                        <div>
                        <p> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>
                        {/* <div className={reviewStyle.social}>
                            <h2>j</h2>
                            <h2>j</h2>
                            <h2>j</h2>
                        </div> */}
                    </div>
                </div>
                    <div className={reviewStyle.containers}>
                        <div className={reviewStyle.profile}>
                            <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/4V0Jrk4/avatar-1606914-340.png"
                            alt="" height={100} width={100}/>
                            </div>
                            <h2>Person 1</h2>
                        </div>
                        <div>
                        <p> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>
                        {/* <div className={reviewStyle.social}>
                            <h2>j</h2>
                            <h2>j</h2>
                            <h2>j</h2>
                        </div> */}
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Reviews ;