import React from 'react'

function Menu() {
    return (
        <div>
            <section className="menu" id="menu">
                <div className="title">
                    <h2 className="titleText">Our <span>M</span>enu</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="content">
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu1.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Salads</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu2.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Soup</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu3.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Pasta</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu4.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Pasta</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu5.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Soup</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBx">
                            <img src="img/menu6.jpg" />
                        </div>
                        <div className="text">
                            <h3>Special Macroni</h3>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <a href="#" className="btn">View All</a>
                </div>
            </section>
        </div>
    )
}

export default Menu
