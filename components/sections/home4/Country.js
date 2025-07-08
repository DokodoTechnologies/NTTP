"use client";
import Link from "next/link";

// import Cta from "next/link";
export default function Country() {
  
  return (
    <>
    
      {/*Country Four Start */}
      <section className='contact-four'>
        <div
          className="contact-four__bg"
          style={{ backgroundImage: 'url(assets/images/shapes/pattern-1.jpg)' }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="section-title text-center sec-title-animation animation-style1">
              <h2 className="section-title__title title-animation">
                Drop a Line, Stay in Touch
              </h2>
            </div>
          </div>

          <div className="contact-info-one">
            <div className="row">
              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-pin-two"></span>
                  </div>
                  <h4>Address</h4>
                  <p>Ram Mandir Marga, Battishputali</p>
                  <p>Kathmandu Metropolitan City, Ward No. 09</p>
                </div>
              </div>

              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-call"></span>
                  </div>
                  <h4>Phone</h4>
                  <p>
                    <Link href="tel:01-4595683">01-4595683</Link>
                    <br />
                    <Link href="tel:01-4598908">01-4598908</Link>
                  </p>
                </div>
              </div>

              <div className="info-column col-lg-4">
                <div className="inner-box">
                  <div className="icon">
                    <span className="icon-envelope"></span>
                  </div>
                  <h4>Email</h4>
                  <p>
                    <Link href="mailto:contact@nttpinstitute.org.np">
                      contact@nttpinstitute.org.np
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="contact-info-one__form">
                  <form
                    id="contact-info-one-form"
                    name="contact-info-one_form"
                    className="default-form2"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_name"
                              placeholder="Name...."
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="email"
                              name="form_email"
                              placeholder="Email...."
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="text"
                              name="form_phone"
                              placeholder="Phone...."
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="input-box">
                            <textarea
                              name="form_message"
                              placeholder="Write here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-group--1 text-center">
                        <button type="submit" className="thm-btn">
                          Send Message
                          <span>
                            <i className="icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Custom CSS for placeholder colors and hover effects */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .close-btn:hover {
          background-color: #e0e0e0 !important;
          transform: scale(1.1);
        }
        
        .close-modal-btn:hover {
          background-color: #4a90c2 !important;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: #bdc3c7 !important;
          opacity: 1;
        }
        
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #f39c12 !important;
          box-shadow: 0 0 0 2px rgba(243, 156, 18, 0.2);
        }
        
        .thm-btn:hover {
          background-color: #e67e22 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .info-column .inner-box:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .team-one__single:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
        }
        
        .team-one__name button:hover {
          color: #5ba4d4 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </>
  );
<<<<<<< HEAD
}




=======
}
>>>>>>> 63e6c581cc910b2d2c5e9e7501b520120e43ee31
