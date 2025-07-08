import React, { useState } from "react";
import shoppingIcon from "./assets/shopping.png";
import productData from "./productData";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(productData[0].mainImage);
  const [selectedColor, setSelectedColor] = useState(
    productData[0].selectedColor
  );
  const [cartvalue, setCartvalue] = useState(0);
  const [selectedWishlist, setWishlist] = useState(false);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light p-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={shoppingIcon}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top "
            />{" "}
            Chamat
          </a>
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue <i className="fas fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="#" tabIndex="-1">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Socials <i className="fas fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex align-items-center searchform">
              <div className="input-group rounded-pill overflow-hidden d-none d-lg-flex border">
                <span className="input-group-text bg-white border-0">
                  <i className="fas fa-search search"></i>
                </span>
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="Search our chair"
                  aria-label="Search"
                />
              </div>
            </form>
            <div className="d-flex align-items-center   justify-content-around rounded-pill border   ms-2 w-5 cartbox">
              <i className="fas fa-shopping-cart me-2"></i>
              <span className="me-1 cart">My Cart</span>
              <span className="rounded-pill me-2">({cartvalue})</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="d-flex align-items-center   justify-content-around rounded-pill border   ms-2 w-5 userbox">
              <i className="fas fa-user me-2 bg-transparent"></i>
              <span className="me-1 login">Login</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex second-nav  align-items-center p-3">
        
        <div className="d-flex flex-wrap center-section justify-content-start">
        <div className="d-flex align-items-center backbox">
          <i className="fas fa-arrow-left me-2 bg-transparent backicon"></i>
          <span className="me-1 back">Back</span>
        </div>
          <div className="d-flex align-items-center justify-content-around ms-2 backbox">
            <span className="text-muted me-2 forwardtext">Catalogue</span>
            <i className="fas fa-angle-double-right ms-1 bg-transparent forwardicon"></i>
          </div>
          <div className="d-flex align-items-center justify-content-around backbox">
            <span className="text-muted me-2 forwardtext">Bar chair</span>
            <i className="fas fa-angle-double-right ms-1 bg-transparent forwardicon"></i>
          </div>

          <div className="d-flex align-items-center justify-content-around backbox">
            <span className="me-1 forwardtext">Zenith Zen Chair</span>
          </div>
        </div>

        {/* Right-most Report button */}
        <div className="d-flex align-items-center last">
          <i className="fas fa-triangle-exclamation me-1"></i>
          <span className="report">Report This Product</span>
        </div>
      </div>

      {/* main content */}
      {productData.map((product, index) => (
        <div className="container-fluid main-content" key={index}>
          <div className="row align-items-start">
            <div className="col first-column">
              <div className="mainimage">
                <img src={selectedImage} className="card-img-top" alt="..." />
              </div>
              <div className="card-footer d-flex align-items-center border-0">
                {product.galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`card-img ${
                      selectedImage === img ? "card-img-active" : ""
                    }`}
                    alt={`Thumbnail ${i}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            <div className="col second-column">
              <div className="chair-name">{product.chairName}</div>
              <div className="sub-name">{product.subName}</div>
              <div
                className="wishlist"
                onClick={() => setWishlist(!selectedWishlist)}
              >
                <i
                  className={
                    selectedWishlist
                      ? "fas fa-heart text-danger"
                      : "far fa-heart"
                  }
                ></i>
                {selectedWishlist ? "Product Wishlisted" : " Add to Wishlist"}
              </div>

              <div className="rating">
                <i className="fas fa-star"></i>{" "}
                <span className="rate">{product.rating}</span>{" "}
                <span className="views">20K+ Reviews</span>
              </div>
              <div className="description">{product.description}</div>
              <div className="price">
                <div className="offer">{product.offer}</div>
                <div className="original">{product.original}</div>
                <div className="discount">{product.discount}</div>
                <div
                  className="addcart"
                  onClick={(e) => {
                    setCartvalue(cartvalue + 1);
                  }}
                >
                  Add to Cart
                </div>
              </div>
              <div className="underline"></div>

              <div className="choose-color">
                <div className="color-details">
                  <div className="color-label">Colors</div>
                  <div className="selected-color">{selectedColor}</div>
                </div>

                <div className="color-options">
                  {product.colorOptions.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Color ${i}`}
                      className={`color-swatch ${
                        selectedImage === img ? "active-color" : ""
                      }`}
                      onClick={() => {
                        setSelectedColor(`Color ${i + 1}`); // You can name colors based on index or real names
                        setSelectedImage(img);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="product-info">
                <div className="left-items">
                  <button
                    className={`prod-details ${
                      activeTab === "details" ? "active-detail" : ""
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    Product Details
                  </button>
                  <button
                    className={`package ${
                      activeTab === "packaging" ? "active-package" : ""
                    }`}
                    onClick={() => setActiveTab("packaging")}
                  >
                    Packaging
                  </button>
                </div>
                <button
                  className={`ship ${activeTab === "shipping" ? "active-ship" : ""}`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Shipping Information
                </button>
              </div>

              <div className="description2">
                {activeTab === "details" && (
                  <p>{product.productInfo.details}</p>
                )}
                {activeTab === "packaging" && (
                  <p>{product.productInfo.packaging}</p>
                )}
                {activeTab === "shipping" && (
                  <p>{product.productInfo.shipping}</p>
                )}
              </div>

              <div className="measure">
                <div className="measure-item">
                  <div className="title">
                    <i className="fas fa-ruler"></i> <span>Size</span>
                  </div>
                  {Object.entries(product.measurements.size).map(
                    ([label, value]) => (
                      <div className="details" key={label}>
                        <div className="text1">{label}</div>
                        <div>{value}</div>
                      </div>
                    )
                  )}
                </div>
                <div className="measure-item">
                  <div className="title">
                    <i className="fas fa-tools"></i> <span>Material</span>
                  </div>
                  {Object.entries(product.measurements.material).map(
                    ([label, value]) => (
                      <div className="details" key={label}>
                        <div className="text1">{label}</div>
                        <div>{value}</div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="reviewrating">
                <div className="reviewleft">Reviews & Rating</div>
                <div className="end">
                  View All Reviews <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="review-container">
                {product.reviews.map((review, index) => (
                  <div className="single-review" key={index}>
                    <div className="reviewer-information">
                      <div className="reviewer-img">
                        <img src={review.avatar} alt="Reviewer Avatar" />
                      </div>
                      <div className="name-date-group">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="reviewer-rating">
                        <i className="fas fa-star"></i>{" "}
                        <span className="rate">{review.rating}</span>
                      </div>
                    </div>
                    <div className="review-full-content">
                      <p>{review.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
