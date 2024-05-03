
import "./home.css"


export const Home = () => {
    return (
        <>
        <div className="d-flex justify-content-center" style={{ width: "100%" }}>
            <div className="container">
                <div className="title-container">
                    <h1 className="title-main">
                        <span>Magician Finder</span>
                    </h1>
                </div>  
                
                <div className="block">
                    <div className="block--img block1"></div>
                    <div className="block--text">
                    <div className="text--head">Illusions</div>
                    <div className="text--quote">“Magic is a lie, but magician need not be a liar.”</div>
                    <div className="text--person">Amit Kalantri</div>
                    </div>
                </div>

                <div className="block">
                    <div className="block--img block2"></div>
                    <div className="block--text">
                    <div className="text--head">Presto-Change-o</div>
                    <div className="text--quote">“Sleight of hand is the magic of the mind.”</div>
                    <div className="text--person">Ricky Jay</div>
                    </div>
                </div>

                <div className="block">
                    <div className="block--img block3"></div>
                    <div className="block--text">
                    <div className="text--head">Abra-cadabra</div>
                    <div className="text--quote">“Pondering my Orb!”</div>
                    <div className="text--person">Saruman</div>
                    </div>
                </div>

                <div className="block">
                    <div className="block--img block4"></div>
                    <div className="block--text">
                    <div className="text--head">Abra-cadabra</div>
                    <div className="text--quote">“Pondering my Orb!”</div>
                    <div className="text--person">Saruman</div>
                    </div>
                </div>

                <div className="block">
                    <div className="block--img block5"></div>
                    <div className="block--text">
                    <div className="text--head">Abra-cadabra</div>
                    <div className="text--quote">“Pondering my Orb!”</div>
                    <div className="text--person">Saruman</div>
                    </div>
                </div>
           
            </div>
        </div>
        </>
    )
}