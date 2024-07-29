import React from 'react';
import TopMenu from '../../components/TopMenu/MenuSuperior';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
function Home() {
  return (
    <>
      <Loading />
      <TopMenu />
      <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 pt-5">
          <li className="breadcrumb-item active">
            <a href="index.html">
              <FontAwesomeIcon icon={["fas", "home"]} /> Home
            </a>
          </li>
        </ol>
      </nav>

      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        {/* Softwares mais acessados */}
        <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
          <div className="col-lg-5 col-md-4">
            <h1 className="mb-2 mb-md-0">Favoritos</h1>
          </div>
          <div className="col-lg-7 col-md-8">
            <form className="row gy-2">
              <div className="col-lg-5 col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="nav flex-nowrap me-sm-4 me-3">
                    <a href="blog-list-no-sidebar.html" className="nav-link me-2 p-0" aria-label="List view">
                      <FontAwesomeIcon icon={["fas", "th-list"]} />
                    </a>
                    <a href="blog-grid-no-sidebar.html" className="nav-link p-0 active" aria-label="Grid view">
                      <FontAwesomeIcon icon={["fas", "th"]} />
                    </a>
                  </div>
                  <select className="form-select">
                    <option>All categories</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-7 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control pe-5 rounded" placeholder="Search the blog..."/>
                  <FontAwesomeIcon icon={["fas", "search"]} className=" position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"/>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/01.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Social</a>
                  <span className="fs-sm text-muted"><i>Last access:</i> May 19, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Dev.Space</a>
                </h3>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/02.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Saude</a>
                  <span className="fs-sm text-muted"><i>Last Access: </i>Sep 28, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Umbra</a>
                </h3>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/03.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Forum</a>
                  <span className="fs-sm text-muted"><i>Last Access: </i>Sep 16, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Systempunk</a>
                </h3>
              </div>
            </article>
          </div>
        </div>

        {/* Todos os softwares */}
        <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
          <div className="col-lg-5 col-md-4">
            <h1 className="mb-2 mb-md-0">All</h1>
          </div>
          <div className="col-lg-7 col-md-8">
            <form className="row gy-2">
              <div className="col-lg-5 col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="nav flex-nowrap me-sm-4 me-3">
                    <a href="blog-list-no-sidebar.html" className="nav-link me-2 p-0" aria-label="List view">
                      <FontAwesomeIcon icon={["fas", "th-list"]} />
                    </a>
                    <a href="blog-grid-no-sidebar.html" className="nav-link p-0 active" aria-label="Grid view">
                      <FontAwesomeIcon icon={["fas", "th"]} />
                    </a>
                  </div>
                  <select className="form-select">
                    <option>All categories</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-7 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control pe-5 rounded" placeholder="Search the blog..."/>
                  <FontAwesomeIcon icon={["fas", "search"]} className=" position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/01.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Social</a>
                  <span className="fs-sm text-muted"><i>Last access:</i> May 19, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Dev.Space</a>
                </h3>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/02.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Saude</a>
                  <span className="fs-sm text-muted"><i>Last Access: </i>Sep 28, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Umbra</a>
                </h3>
              </div>
            </article>
          </div>

          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </a>
                <img src="/img/blog/03.jpg" className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Forum</a>
                  <span className="fs-sm text-muted"><i>Last Access: </i>Sep 16, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                  <a href="blog-single.html">Systempunk</a>
                </h3>
              </div>
            </article>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center pt-md-4 pt-2">
            <li className="page-item">
              <a href="#" className="page-link" aria-label="Previous page">
                <i className="bx bx-chevron-left mx-n1"></i>
              </a>
            </li>
            <li className="page-item disabled d-sm-none">
              <span className="page-link text-body">2 / 4</span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item active d-none d-sm-block" aria-current="page">
              <span className="page-link">
                2
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">3</a>
            </li>
            <li className="page-item d-none d-sm-block">
              <a href="#" className="page-link">4</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link" aria-label="Next page">
                <i className="bx bx-chevron-right mx-n1"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>


     
      <Footer />
    </>
  );
}

export default Home;