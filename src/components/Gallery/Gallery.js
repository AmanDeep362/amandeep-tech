import React, { useContext } from "react";
import { gallerySection } from "../../portfolio";
import "./gallery.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ImageGallery from "react-image-gallery";

export default function Gallery() {
    const { isDark } = useContext(StyleContext);
    if (!gallerySection.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="achievements">
                <div className="achievement-main-div">
                    <div className="achievement-header">
                        <h1
                            className={
                                isDark
                                    ? "dark-mode heading achievement-heading"
                                    : "heading achievement-heading"
                            }
                        >
                            {gallerySection.title}
                        </h1>
                    </div>
                    <div style={{ width: '100%', marginTop: '50px' }} >
                        <ImageGallery items={gallerySection.images} />
                    </div>
                </div>
            </div>
        </Fade>
    );
}
