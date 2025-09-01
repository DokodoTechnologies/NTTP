"use client";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const imagesPerPage = 7;

  // Fetch from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("https://be.nttpinstitute.org.np/gallery");
        if (res.data.status && Array.isArray(res.data.data)) {
          // Map API data into gallery format
          setAllImages(
            res.data.data.map((item) => ({
              id: item.id,
              src: `https://be.nttpinstitute.org.np${item.imageUrl}`,
              alt: `Gallery Image ${item.id}`,
            })),
          );
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchImages();
  }, []);

  // Pagination
  const totalPages = Math.ceil(allImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + imagesPerPage);

  // Grid pattern
  const getGridClass = (index) => {
    const patterns = [
      "col-xl-7 col-lg-6 col-md-6", // 1 - large
      "col-xl-5 col-lg-6 col-md-6", // 2 - medium
      "col-xl-5 col-lg-6 col-md-6", // 3 - medium
      "col-xl-7 col-lg-6 col-md-6", // 4 - large
      "col-xl-4 col-lg-6 col-md-6", // 5 - small
      "col-xl-4 col-lg-6 col-md-6", // 6 - small
      "col-xl-4 col-lg-6 col-md-6", // 7 - small
    ];
    return patterns[index % patterns.length];
  };

  const openPopup = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle='Gallery'>
        <section className='projects-page'>
          <div className='container'>
            <div className='row'>
              {currentImages.map((image, index) => (
                <div key={image.id} className={getGridClass(index)}>
                  <div className='projects-page__single'>
                    <div className='projects-page__img'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className='projects-page__icon'>
                        <button
                          className='img-popup'
                          onClick={() => openPopup(image)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <span className='fas fa-plus'></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className='row'>
              <div className='col-12'>
                <div className='pagination-wrapper text-center mt-5'>
                  <nav aria-label='Gallery pagination'>
                    <ul className='pagination justify-content-center'>
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className='page-link'
                          onClick={prevPage}
                          disabled={currentPage === 1}
                        >
                          <i className='fas fa-chevron-left'></i>
                        </button>
                      </li>

                      {Array.from({ length: totalPages }, (_, index) => (
                        <li
                          key={index + 1}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className='page-link'
                            onClick={() => goToPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}

                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className='page-link'
                          onClick={nextPage}
                          disabled={currentPage === totalPages}
                        >
                          <i className='fas fa-chevron-right'></i>
                        </button>
                      </li>
                    </ul>
                  </nav>

                  <div className='pagination-info mt-3'>
                    <p className='text-muted'>
                      Showing {startIndex + 1}-
                      {Math.min(startIndex + imagesPerPage, allImages.length)}{" "}
                      of {allImages.length} images
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popup */}
        {selectedImage && (
          <div
            className='image-popup-overlay'
            onClick={closePopup}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          >
            <div
              className='popup-content'
              style={{
                position: "relative",
                maxWidth: "90%",
                maxHeight: "90%",
              }}
            >
              <button
                onClick={closePopup}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  zIndex: 10000,
                }}
                className='popup-close-btn'
              >
                <i className='fas fa-times'></i>
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Image {selectedImage.id} of {allImages.length}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
