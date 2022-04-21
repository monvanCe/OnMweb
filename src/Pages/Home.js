import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Nav";
import WebIcon from "../Icons/web.svg";
import MobilIcon from "../Icons/mobilapp.svg";
import DataIcon from "../Icons/data.svg";
import ArrowIcon from "../Icons/arrow.svg";
import ScrollArrowIcon from "../Icons/scrollarrow.svg";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pageScroll, setPageScroll] = useState(false);

  const setPageReset = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const PageScroll = () => {
    if (window.pageYOffset > 300) {
      setPageScroll(true);
    } else {
      setPageScroll(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    window.addEventListener("scroll", PageScroll);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center loadscreen">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="start-container" id="home">
            <div className="start-title-container">
              <div className="col-md-8 d-flex flex-column justify-content-center">
                <div>
                  <span className="start-title">
                    OnM ile sizelere özel <br></br> yazılım hizmeti <br></br>{" "}
                    sunuyoruz.
                  </span>
                </div>
                <div className="mt-5">
                  <span className="start-explanation">
                    Ekibimiz ile yaratıcı ve ileriye dönük<br></br> yazılım
                    sistemlerinizi üretiyoruz.
                  </span>
                </div>
                <div className="mt-4">
                  <a href="/#projects">
                    <button type="button" className=" start-works-button">
                      Projelerimiz
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="what-we-do" id="whatwedo">
            <div className="container d-flex flex-column align-items-center justify-content-center h-100 works">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 style={{ borderBottom: "3px solid black" }}>HİZMETLER</h2>
                <span>
                  Ekibimiz ile yaratıcı ve ileriye dönük sistemler <br></br>{" "}
                  üretip ihtiyaçlarınızı karşılamayı umuyoruz.
                </span>
              </div>
              <div className="what-wedo-container mt-5">
                <div className="ml-5  text-center mt-5">
                  <div>
                    <img src={WebIcon} alt="" />
                  </div>
                  <div className="mt-4">
                    <span className="wwd-titles">Web Tasarım</span>
                  </div>
                  <div style={{ minHeight: "100px" }} className="pt-3">
                    <span>
                      En güncel ve yeni tasarımlar ile fonksiyonel
                      internet sitelerinizi oluşturuyoruz.
                    </span>
                  </div>
                  <div className="mt-3">
                    <button className="arrow-button p-2 mt-2">
                      <img src={ArrowIcon} alt="" />
                    </button>
                  </div>
                </div>
                <div className="ml-5  text-center mt-5">
                  <div>
                    <img src={DataIcon} alt="" />
                  </div>
                  <div className="mt-4">
                    <span className="wwd-titles">Sunucu</span>
                  </div>
                  <div style={{ minHeight: "100px" }} className="pt-3">
                    <span>
                      Verilerinizi güvenlikli sistemlerle güvence altına
                      alıyoruz.
                    </span>
                  </div>
                  <div className="mt-3">
                    <button className="arrow-button p-2 mt-2">
                      <img src={ArrowIcon} alt="" />
                    </button>
                  </div>
                </div>
                <div className="ml-5 text-center mt-5">
                  <div>
                    <img src={MobilIcon} alt="" />
                  </div>
                  <div className="mt-4">
                    <span className="wwd-titles">Mobile uygulama</span>
                  </div>
                  <div style={{ minHeight: "100px" }} className="pt-3">
                    <span>
                      İos ve Android uyumlu hızlı ve yenilikçi
                      tasarımlarla mobil uygulamalarınızı geliştiriyoruz.
                    </span>
                  </div>
                  <div className="mt-3">
                    <button className="arrow-button p-2 ">
                      <img src={ArrowIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-container" id="projects">
            <div className="mt-5">
              <h1>Projects</h1>
            </div>
            <div className="col-md-10 card-container h-100 mt-5">
              <div className="cont1">
                <div className="projects-card w-100 "></div>
                <div className="card-explanation">
                  <h4 className="mt-4">Web</h4>
                  <span>Silfavell Web</span>
                </div>
              </div>
              <div className="cont2">
                <div className="projects-card2 w-100 mt-5"></div>
                <div className="card-explanation">
                  <h4 className="mt-4">Mobile</h4>
                  <span>Silfavell Application</span>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-5">
              <button className="show-more-button pl-5 pr-5 pt-2 pb-2">
                Show More
              </button>
            </div>
          </div>
          {pageScroll ? (
            <div className="float-right fixed-bottom">
              <button className=" scroll-button" onClick={setPageReset}>
                <img src={ScrollArrowIcon} alt='' className='p-3 ' />
              </button>
            </div>
          ) : (
            <div></div>
          )}
          <Footer />
        </div>
      )}
    </div>
  );
}
