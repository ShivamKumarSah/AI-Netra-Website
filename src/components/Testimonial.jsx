import React from 'react'

export default function Testimonial({ data }) {
    return (
        <>
            <section id="testimonial" class="testimonial-area pt-110 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center pb-45">
                                <h3 class="title">{data ? data.title : "loading"}</h3>
                                <p class="text">{data ? data.desc : "loading"}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <div class="testimonial-wrapper">
                                <div class="testimonial-content">
                                    <div class="single-testimonial-content text-center">
                                        <div class="testimonial-quote">
                                            <img class="svg" src="assets/images/icon-quote.svg" alt="quote" />
                                        </div>
                                        <div class="testimonial-text">
                                            <p class="text">
                                                Hello there, I am working as a Backend Developer and Content Writer on this project, I have done research, and worked on Slide, and Documentation.<br />I believe in finding new ideas and creating new things.
                                            </p>
                                            <h4 class="holder-name">Shubham Kumar Sah</h4>
                                            <span class="sub-title">Regn No. : 1131911600402
                                            </span>
                                        </div>
                                    </div>
                                    <div class="single-testimonial-content text-center">
                                        <div class="testimonial-quote">
                                            <img class="svg" src="assets/images/icon-quote.svg" alt="quote" />
                                        </div>
                                        <div class="testimonial-text">
                                            <p class="text">
                                                Hi there, I am on this project as a front-end, and backend developer, who made this beautiful and functional mobile application and  websites.<br /> I am a self-taught developer, and I am always looking for new ways to improve my skills.
                                            </p>
                                            <h4 class="holder-name">Shivam Kumar Sah</h4>
                                            <span class="sub-title">Regn No. : 1131911600401
                                            </span>
                                        </div>
                                    </div>
                                    <div class="single-testimonial-content text-center">
                                        <div class="testimonial-quote">
                                            <img class="svg" src="assets/images/icon-quote.svg" alt="quote" />
                                        </div>
                                        <div class="testimonial-text">
                                            <p class="text">
                                                Hi, I am on this project as a graphic designer, I worked on documentation and also helped my collegeues to make this website and mobile application.<br />I love to work with team and i am alway ready to help them.
                                            </p>
                                            <h4 class="holder-name">Sonali Singh</h4>
                                            <span class="sub-title">Regn No. : 1131921401416
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="testimonial-author">
                                    <div class="single-testimonial-author">
                                        <img src="assets/images/author-1.jpg" alt="author" />
                                    </div>
                                    <div class="single-testimonial-author">
                                        <img src="assets/images/author-2.jpg" alt="author" />
                                    </div>
                                    <div class="single-testimonial-author">
                                        <img src="assets/images/author-3.jpg" alt="author" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>               </div>
            </section>
        </>
    )
}
