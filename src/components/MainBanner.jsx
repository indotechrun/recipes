import React from 'react'

function MainBanner() {
    return (
        <div>
            <section className="banner" id="banner" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + 'img/bg.jpg'})`
            }}>
                <div className="content">
                    <h2>Always Choose Good</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat non risus sollicitudin maximus vel in metus. Maecenas tempor ante vitae risus vulputate tincidunt. Donec id nunc urna. Pellentesque porta vulputate ipsum nec varius. Vestibulum pulvinar eu mi id pellentesque. In dictum erat eros.</p>
                    <a href="#" className="btn">Our Menu</a>

                </div>
            </section>
        </div>
    )
}

export default MainBanner
