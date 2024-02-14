function Card({ image, cardTopSideColor, textPartTitle, textPartParagraph}) {
    return(
        <div className='cardWrapper'>
            <section className='cardTopSide' style={{background: cardTopSideColor}}></section>
            <section className='cardBottomSide'>
                <div className='textPart'>
                    <h3>{textPartTitle}</h3>
                    <p>{textPartParagraph}</p>
                </div>
                <img src={image.src} alt={image.name} />
            </section>
        </div>
    )
}
export default Card