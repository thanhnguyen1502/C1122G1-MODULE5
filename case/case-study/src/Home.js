import React from 'react';

function Home() {
    return (
        <div>
            <>
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide sticky"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img
                                src="https://images.pexels.com/photos/15595766/pexels-photo-15595766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img
                                src="https://images.pexels.com/photos/11690878/pexels-photo-11690878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://images.pexels.com/photos/11690879/pexels-photo-11690879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                            <iframe
                                width="100%"
                                height={315}
                                src="https://www.youtube.com/embed/Pa8tN0u0Rr0"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""
                            />
                        </div>
                        <div className="col-lg-7">
                            <h5
                                className="text-warning"
                                style={{ fontFamily: '"Times New Roman"' }}
                            >
                                THIS WORLD CLASS RESORT, FURAMA DANANG, REPUTABLE FOR BEING A CULINARY
                                RESORT IN VIETNAM
                            </h5>
                            <p>
                                Overlooking the long stretch of wide white sand on Danang Beach,
                                Furama Resort Danang is a gateway to three World Heritage Sites of Hoi
                                An (20 minutes), My Son (90 minutes) and Hue (2 hours). The 198 rooms
                                and suites plus 70 two to four bedroom pool villas feature tasteful
                                décor, designed with traditional Vietnamese style and a touch of
                                French colonial architecture and guarantee the Vietnam’s the most
                                prestigious resort -counting royalty, presidents, movie stars and
                                international business leaders among its celebrity guests.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center bg-light">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1
                                        style={{ fontFamily: '"Times New Roman"' }}
                                        className="text-warning"
                                    >
                                        ROOMS &amp; SUITES
                                    </h1>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4" />
                                <div className="col-4">
                                    <p className="fw-light">
                                        All 198 rooms &amp; suites have polished timber floors, natural
                                        fabrics, comfortable cane furniture, plantation style shutters and
                                        ceiling fans. Each room also has its own balcony or spacious
                                        terrace providing complete privacy and with a superb view of the
                                        ocean, the tropical garden or the freshwater swimming lagoon pool.
                                    </p>
                                    <a href="#" className="fw-bold text-decoration-none text-success">
                                        VIEW ALL ROOMS
                                    </a>
                                </div>
                                <div className="col-4" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-start mt-3">
                        <div className="col">
                            <div className="card">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">
                                        The villa has 4 bedrooms, two on each floor, all own a broad view
                                        of the ocean. Large private swimming pool by the grass garden on
                                        the beach where you can gather with friends and family members for
                                        a cocktail reception or a BBQ.
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Houes</h5>
                                    <p className="card-text">
                                        You will like this deluxe and spacious room! The sitting area with
                                        an elegant sofa, coffee table, and comfortable armchair will help
                                        you relax. The large bathroom decorated with honey-colored marble
                                        offers a separate shower and bathtub.
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Rooms</h5>
                                    <p className="card-text">
                                        This charming room overlooks our beautiful tropical garden and the
                                        landscaped lagoon pool. Enjoy the view over palm trees, plants,
                                        and flowers in all kinds of shapes and colors. At night, the pool
                                        and garden are romantically illuminated.
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 text-center mt-5">
                            <h2
                                className="text-warning"
                                style={{ fontFamily: '"Times New Roman"' }}
                            >
                                JOINING OUR CULINARY &amp; RECREATIONAL EXPERIENCE
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-12 text-center">
                            <p>
                                The Furama Resort aims to make your stay in Vietnam a unique and
                                unforgettable experience. Whether you prefer to be active or just to
                                relax, we offer a wide range of activities and services to suit your
                                needs.
                            </p>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img
                                width="600px"
                                src="https://furamavietnam.com/wp-content/uploads/2018/07/CULIRARY.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h3
                                        className="card-title text-warning"
                                        style={{ fontFamily: '"Times New Roman"' }}
                                    >
                                        CULINARY
                                    </h3>
                                    <p className="card-text mt-5">
                                        The resort’s culinary experience features a mixture of the
                                        authentic and locally inspired Vietnamese, Asian, Italian and
                                        other European cuisines plus the best imported steaks. The resort
                                        presents guests with varied gastronomic venues – the hip and
                                        breezy bar overlooking the beach, the exclusive Lagoon pool
                                        surrounded by a tropical garden, the true Italian flare offered at
                                        the Don Cipriani’s, the refined Asian touch at Café Indochine or
                                        the authentic central Vietnam cuisine at the Danaksara.
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h3
                                        className="card-title text-warning"
                                        style={{ fontFamily: '"Times New Roman"' }}
                                    >
                                        MEETING &amp; EVENT
                                    </h3>
                                    <p className="card-text mt-5">
                                        A well-appointed International Convention Palace with ballrooms
                                        can accommodate up to 1,000 people in style, with another ten
                                        function rooms for 50 to 300 people each. A variety of
                                        cultural-themed parties on the beach or around the lagoon, in the
                                        ballrooms or outside the resort, with the surprising arrivals of
                                        VIPs from Helicopter landing on the resort’s own Helipad…
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                width="600px"
                                src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img
                                width="600px"
                                src="https://furamavietnam.com/wp-content/uploads/2018/07/RECREATION.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h3
                                        className="card-title text-warning"
                                        style={{ fontFamily: '"Times New Roman"' }}
                                    >
                                        RECREATION
                                    </h3>
                                    <p className="card-text mt-5">
                                        A full range of Water Sports will keep you busy. Stop by the Water
                                        Sport House where our experienced staff are waiting to assist or
                                        train you in the use of any of our equipment.
                                    </p>
                                    <a href="#" className="btn btn-success">
                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
}

export default Home;