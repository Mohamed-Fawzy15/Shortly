import headerImg from "../assets/images/illustration-working.svg";
import brandImg from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

import "../style/HomeStyle.css";
import NavBar from "../component/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <header className="hero min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 col-md-6 text-start">
              <h1>More Than Just shorter links</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quo amet quos nisi praesentium corrupti.
              </p>

              <button className="btn-shorten text-capitalize">
                get started
              </button>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={headerImg}
                alt="an illustration for working"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="addLink">
          <div className="container">
            <div className="form-inner rounded">
              <form className="row justify-content-center align-items-center">
                <div className="col-12 col-md-10 ">
                  <input
                    type="text"
                    placeholder="Shorten a link here..."
                    className="form-control "
                  />
                </div>

                <div className="col-12 col-md-2 ">
                  <button className="btn-shorten rounded w-100">
                    Shorten it!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="statistics">
          <header className="text-center py-5">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </header>

          <div className="container">
            <div className="row">
              <div className="brand-card col-12 col-md-6 col-lg-4">
                <div className="inner">
                  <div className="card-icon">
                    <img src={brandImg} alt="Brand Recognition icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold">Brand Recognition</h3>
                    <p className="text-body-secondary fw-bold">
                      Boost your brand recognition with each click. Generic
                      links don&apos;t mean a thing. Branded links help instil
                      confidence in your content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="detailed-card col-12 col-md-6 col-lg-4">
                <div className="inner">
                  <div className="card-icon">
                    <img src={detailed} alt="Brand Recognition icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold">Detailed Records</h3>
                    <p className="text-body-secondary fw-bold">
                      Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fully-card col-12 col-md-6 col-lg-4">
                <div className="inner">
                  <div className="card-icon">
                    <img src={fully} alt="Brand Recognition icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="fw-bold">Fully Customizable</h3>
                    <p className="text-body-secondary fw-bold">
                      Improve brand awareness and content discoverability
                      through customizable links, supercharging audience
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bost d-flex justify-content-center align-items-center flex-column py-5">
        <h3 className="text-white">Bost Your link today</h3>
        <button className="btn-shorten">Get Started</button>
      </section>
    </>
  );
};

export default HomePage;