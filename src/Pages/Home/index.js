import React, { useEffect } from 'react';
import Menu from '../../components/TopMenu/MenuSuperior'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Footer from '../../components/Footer/Footer';


library.add(fas, fab);
const Index = () => {
  useEffect(() => {
    lightGallery(document.getElementById("lightgalery"), {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      thumbnail: true,
    });
  }, []);

  const swiperRef = React.useRef(null);

  const swiperGoNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const swiperGoPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div class="page-wrapper">
      <Menu />
      <div class="position-relative pt-5">
        <div
          class="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
          style={{ "background-image": "url(/img/about/hero-bg.svg)" }}
        >
          <div class="d-lg-none" style={{ height: "960px" }}></div>
          <div class="d-none d-lg-block" style={{ height: "768px" }}></div>
        </div>
        <div class="container position-relative zindex-5 pt-5">
          <div class="row">
            <div class="col-lg-6">
              <nav
                class="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"
                aria-label="breadcrumb"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">
                      <FontAwesomeIcon icon="fa-solid fa-house" />
                    </a>
                  </li>
                </ol>
              </nav>
              <h1 class="pb-2 pb-md-3">About Old Barom</h1>
              <p
                class="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
                style={{ "max-width": "526px" }}
              >
                We are a dedicated team of passionate product managers, full
                stack developers, UX/UI designers, QA engineers and marketing
                experts helping businesses of every size — from new startups to
                public companies — launch their projects using our software.
              </p>
              <img
                src="/img/about/clutch-dark.png"
                class=" d-dark-mode-none"
                width="175"
                alt="Clutch"
              />
              <img
                src="/img/about/clutch-light.png"
                class="d-none d-dark-mode-block"
                width="175"
                alt="Clutch"
              />
              <div class="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                <div class="col">
                  <h3 class="h2 mb-2">2,480</h3>
                  <p class="mb-0">
                    <strong>Remote</strong> Sales Experts
                  </p>
                </div>
                <div class="col">
                  <h3 class="h2 mb-2">760</h3>
                  <p class="mb-0">
                    <strong>New Clients</strong> per Month
                  </p>
                </div>
                <div class="col">
                  <h3 class="h2 mb-2">1,200</h3>
                  <p class="mb-0">
                    <strong>Requests</strong> per Week
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
              <div class="row row-cols-2 gx-3 gx-lg-4">
                <div class="col pt-lg-5 mt-lg-1">
                  <img
                    src=" /img/about/hero/01.jpg"
                    class="d-block rounded-3 mb-3 mb-lg-4"
                    alt="Image"
                  />
                  <img
                    src=" /img/about/hero/02.jpg"
                    class="d-block rounded-3"
                    alt="Image"
                  />
                </div>
                <div class="col">
                  <img
                    src=" /img/about/hero/03.jpg"
                    class="d-block rounded-3 mb-3 mb-lg-4"
                    alt="Image"
                  />
                  <img
                    src=" /img/about/hero/04.jpg"
                    class="d-block rounded-3"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container mt-3 mb-5 pt-lg-5"
        spaceBetween={50}
        slidesPerView={1}
      >
        <div class="swiper pt-3">
          <Swiper
            class="swiper-wrapper pt-4"
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide class="swiper-slide border-end-lg px-2">
              <div class="text-center">
                <img
                  src=" /img/landing/digital-agency/icons/idea.svg"
                  width="48"
                  alt="Bulb icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Creative Solutions</h4>
                <p class="mx-auto" style={{ "max-width": "336px" }}>
                  Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide border-end-lg px-2">
              <div class="text-center">
                <img
                  src=" /img/landing/digital-agency/icons/award.svg"
                  width="48"
                  alt="Award icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Award Winning</h4>
                <p class="mx-auto" style={{ "max-width": "336px" }}>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide px-2">
              <div class="text-center">
                <img
                  src=" /img/landing/digital-agency/icons/team.svg"
                  width="48"
                  alt="Team icon"
                  class="d-block mb-4 mx-auto"
                />
                <h4 class="mb-2 pb-1">Team of Professionals</h4>
                <p class="mx-auto" style={{ "max-width": "336px" }}>
                  Nam venenatis urna aenean quis feugiat et senectus turpis.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
        </div>
      </div>
      <section class="container text-center pb-5 mt-n2 mt-md-0 mb-md-2 mb-lg-4">
        <div class="position-relative rounded-3 overflow-hidden">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
            <a
              href="https://www.youtube.com/watch?v=zPo5ZaH6sW8"
              class="btn btn-video btn-icon btn-xl stretched-link bg-white"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <FontAwesomeIcon icon="fa-solid fa-play" />
            </a>
          </div>
          <span class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-35"></span>
          <img
            src=" /img/landing/digital-agency/cover.jpg"
            class="d-block w-100"
            alt="Cover image"
          />
        </div>
      </section>
      <section class="container mb-5 pb-3 pb-md-4 pb-lg-5">
        <div class="row gy-4 py-xl-2">
          <div class="col-md-4">
            <h2 class="mb-0 text-md-start text-center">
              Award-winning designs featured by
            </h2>
          </div>
          <div class="col-lg-7 offset-lg-1 col-md-8">
            <div class="row row-cols-sm-4 row-cols-2 gy-4">
              <div class="col">
                <div class="position-relative text-center">
                  <img
                    src=" /img/landing/digital-agency/awards/webby.svg"
                    width="100"
                    alt="Webby"
                    class="d-block mx-auto mb-3"
                  />
                  <a
                    href="#"
                    class="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                  >
                    4x mobile of the day
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="position-relative text-center">
                  <img
                    src=" /img/landing/digital-agency/awards/cssda.svg"
                    width="100"
                    alt="CSSDA"
                    class="d-block mx-auto mb-3"
                  />
                  <a
                    href="#"
                    class="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                  >
                    1x Kudos
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="position-relative text-center">
                  <img
                    src=" /img/landing/digital-agency/awards/awwwards.svg"
                    width="100"
                    alt="Awwwards"
                    class="d-block mx-auto mb-3"
                  />
                  <a
                    href="#"
                    class="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                  >
                    3x website of the day
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="position-relative text-center">
                  <img
                    src=" /img/landing/digital-agency/awards/fwa.svg"
                    width="100"
                    alt="FWA"
                    class="d-block mx-auto mb-3"
                  />
                  <a
                    href="#"
                    class="text-body justify-content-center fs-sm stretched-link text-decoration-none"
                  >
                    2x best website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="card h-100 border-0 overflow-hidden px-md-4">
              <span class="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"></span>
              <div class="card-body d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4">
                <h2 class="h1 text-center text-md-start p-lg-4">
                  What Our Clients Say About Silicon Studio
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="card border-0 shadow-sm p-4 p-xxl-5">
              <div class="d-flex justify-content-between pb-4 mb-2">
                <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                  <FontAwesomeIcon icon="fa-solid fa-quote-left" />
                </span>
                <div class="d-flex">
                  <button
                    type="button"
                    id="testimonials-prev"
                    onClick={swiperGoPrev}
                    class="btn btn-prev btn-icon btn-sm me-2"
                    aria-label="Previous"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                  </button>
                  <button
                    type="button"
                    id="testimonials-next"
                    onClick={swiperGoNext}
                    class="btn btn-next btn-icon btn-sm ms-2"
                    aria-label="Next"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </div>
              <div class="swiper mx-0 mb-md-n2 mb-xxl-n3">
                <Swiper
                  class="swiper-wrapper"
                  spaceBetween={50}
                  slidesPerView={1}
                  ref={swiperRef}
                >
                  <SwiperSlide class="swiper-slide h-auto">
                    <figure class="card h-100 position-relative border-0 bg-transparent">
                      <blockquote class="card-body p-0 mb-0">
                        <p class="fs-lg mb-0">
                          Mi semper risus ultricies orci pulvinar in at enim
                          orci. Quis facilisis nunc pellentesque in ullamcorper
                          sit. Lorem blandit arcu sapien, senectus libero, amet
                          dapibus cursus quam. Eget pellentesque eu purus
                          volutpat adipiscing malesuada. Purus nisi, tortor vel
                          lacus.
                        </p>
                      </blockquote>
                      <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                        <img
                          src=" /img/avatar/14.jpg"
                          width="60"
                          class="rounded-circle"
                          alt="Annette Black"
                        />
                        <div class="ps-3">
                          <h6 class="fw-semibold lh-base mb-0">
                            Annette Black
                          </h6>
                          <span class="fs-sm text-muted">
                            Strategic Advisor at Company LLC
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide h-auto">
                    <figure class="card h-100 position-relative border-0 bg-transparent">
                      <blockquote class="card-body p-0 mb-0">
                        <p class="fs-lg mb-0">
                          Vestibulum nunc lectus auctor quis. Natoque lectus
                          tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac
                          morbi. Vitae, donec facilisis sed nunc netus.
                          Venenatis posuere faucibus enim est. Vel dignissim
                          morbi blandit morbi tellus. Arcu ullamcorper quis
                          enim.
                        </p>
                      </blockquote>
                      <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                        <img
                          src=" /img/avatar/13.jpg"
                          width="60"
                          class="rounded-circle"
                          alt="Ralph Edwards"
                        />
                        <div class="ps-3">
                          <h6 class="fw-semibold lh-base mb-0">
                            Ralph Edwards
                          </h6>
                          <span class="fs-sm text-muted">
                            Head of Marketing at Lorem Ltd.{" "}
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide h-auto">
                    <figure class="card h-100 position-relative border-0 bg-transparent">
                      <blockquote class="card-body p-0 mb-0">
                        <p class="fs-lg mb-0">
                          Ac at sed sit senectus massa. Massa ante amet ultrices
                          magna porta tempor. Aliquet diam in et magna ultricies
                          mi at. Lectus enim, vel enim egestas nam pellentesque
                          et leo. Elit mi faucibus laoreet aliquam pellentesque
                          sed aliquet integer massa. Orci leo tortor ornare.
                        </p>
                      </blockquote>
                      <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                        <img
                          src=" /img/avatar/11.jpg"
                          width="60"
                          class="rounded-circle"
                          alt="Darrell Steward"
                        />
                        <div class="ps-3">
                          <h6 class="fw-semibold lh-base mb-0">
                            Darrell Steward
                          </h6>
                          <span class="fs-sm text-muted">
                            Project Manager at Ipsum Ltd.
                          </span>
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                </Swiper>
                <div class="swiper-pagination position-relative mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container py-5 my-md-3 my-lg-5">
        <h2 class="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">Our Leadership</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/01.jpg"
                  class="rounded-3"
                  alt="Jenny Wilson"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Jenny Wilson</h3>
                <p class="fs-sm mb-0">Co-Founder &amp; CEO</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/02.jpg"
                  class="rounded-3"
                  alt="Ralph Edwards"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Ralph Edwards</h3>
                <p class="fs-sm mb-0">Co-Founder</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/03.jpg"
                  class="rounded-3"
                  alt="Cameron Williamson"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white me-2"
                      aria-label="Dribbble"
                    >
                      <FontAwesomeIcon icon={["fab", "dribbble"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Cameron Williamson</h3>
                <p class="fs-sm mb-0">Creative Director</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/04.jpg"
                  class="rounded-3"
                  alt="Jerome Bell"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white me-2"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Jerome Bell</h3>
                <p class="fs-sm mb-0">Marketing Director</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/05.jpg"
                  class="rounded-3"
                  alt="Marvin McKinney"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-behance btn-sm bg-white me-2"
                      aria-label="Behance"
                    >
                      <FontAwesomeIcon icon={["fab", "behance"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white"
                      aria-label="Dribbble"
                    >
                      <FontAwesomeIcon icon={["fab", "dribbble"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Marvin McKinney</h3>
                <p class="fs-sm mb-0">Lead Designer</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/06.jpg"
                  class="rounded-3"
                  alt="Esther Howard"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-dribbble btn-sm bg-white me-2"
                      aria-label="Dribbble"
                    >
                      <FontAwesomeIcon icon={["fab", "dribbble"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-behance btn-sm bg-white"
                      aria-label="Behance"
                    >
                      <FontAwesomeIcon icon={["fab", "behance"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Esther Howard</h3>
                <p class="fs-sm mb-0">Motion Designer</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/07.jpg"
                  class="rounded-3"
                  alt="Darrell Steward"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-stack-overflow btn-sm bg-white me-2"
                      aria-label="Stack Overflow"
                    >
                      <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-github btn-sm bg-white"
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Darrell Steward</h3>
                <p class="fs-sm mb-0">Lead Developer</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 bg-transparent">
              <div class="position-relative">
                <img
                  src=" /img/team/08.jpg"
                  class="rounded-3"
                  alt="Jane Cooper"
                />
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div class="position-relative d-flex zindex-2">
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      aria-label="Twitter"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center p-3">
                <h3 class="fs-lg fw-semibold pt-1 mb-2">Jane Cooper</h3>
                <p class="fs-sm mb-0">Senior Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container mt-n2">
        <div class="card border-0 bg-gradient-primary">
          <div
            class="card-body p-md-5 p-4 bg-size-cover"
            style={{
              "background-image":
                "url(/img/landing/digital-agency/contact-bg.png)",
            }}
          >
            <div class="py-md-5 py-4 text-center">
              <h3 class="h4 fw-normal text-light opacity-75">
                Want to work with us? Let’s talk
              </h3>
              <a href="mailto:email@example.com" class="display-6 text-light">
                email@example.com
              </a>
              <div class="pt-md-5 pt-4 pb-md-2">
                <a href="contacts-v1.html" class="btn btn-lg btn-light">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container text-center py-5 my-2 my-md-4 my-lg-5">
        <h2 class="h1 mb-4">We Have Social Networks</h2>
        <p class="fs-lg text-muted pb-2 mb-5">
          Follow us and keep up to date with the freshest news!
        </p>
        <div
          class="swiper"
          data-swiper-options='{
          "slidesPerView": 2,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3
            },
            "650": {
              "slidesPerView": 4
            },
            "900": {
              "slidesPerView": 5
            },
            "1100": {
              "slidesPerView": 6
            }
          }
        }'
        >
          <Swiper
            className="swiper-wrapper"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
          >
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">Facebook</h6>
                  <p class="fs-sm text-muted mb-0">OldBarom</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-instagram btn-lg stretched-link"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">Instagram</h6>
                  <p class="fs-sm text-muted mb-0">@oldbarom</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-twitter btn-lg stretched-link"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">Twitter</h6>
                  <p class="fs-sm text-muted mb-0">@oldbarom</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-linkedin btn-lg stretched-link"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">LinkedIn</h6>
                  <p class="fs-sm text-muted mb-0">OldBarom Inc.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">YouTube</h6>
                  <p class="fs-sm text-muted mb-0">OldBarom</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="position-relative text-center border-end mx-n1">
                <a
                  href="#"
                  class="btn btn-icon btn-secondary btn-dribbble btn-lg stretched-link"
                  aria-label="Dribbble"
                >
                  <FontAwesomeIcon icon="fa-brands fa-dribbble" />
                </a>
                <div class="pt-4">
                  <h6 class="mb-1">Dribbble</h6>
                  <p class="fs-sm text-muted mb-0">OldBarom</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-pagination position-relative bottom-0 pt-3 mt-4 swiper-pagination"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Index;