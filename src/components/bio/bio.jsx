import React from 'react'
import './bio.scss'

const cb = 'bio'

const Bio = () => (
    <div className={cb}>
        <div className={`${cb}__flex`}>
            <div className={`${cb}__album-column`}>
                <div className={`${cb}__album-wrapper`}>

                </div>
                <p className={`${cb}__album-caption`}>Album caption</p>
            </div>
            <div className={`${cb}__bio-column`}>
                <h2 className={`${cb}__bio-heading`}>Bio</h2>
                <p>Jacob is a Chicago-based musician/educator/composer whose career has taken him all over the world. As an experienced musician in multiple instruments and genres, he brings his unique approach to every project, performance, and rehearsal.</p>
                <p>A recent transplant to the Chicago community, Jacob spent most of his life in Madison and small-town Wisconsin.  After growing up with a background in piano, Jacob found percussion as his next passion, continuing through his college degree at University of Madison Wisconsin.  His travels have taken him across the US, Canada, Europe, Asia, Australia, and Latin America, gaining experience in many styles of music along the way.</p>
                <p>Jacob feels at home in the classical community, graduating with a percussion performance degree, but is not afraid to genre-bend into Afro-Cuban, Afro-Brazilian, Jazz, Rock, and R&B.  He has been fortunate enough to share the stage with acts such as: Juan de Marcos Gonzalez, Richard Davis, Freddy Cole, Charles Bradley, Lucas Nelson, Clyde Stubblefield, and Derek Trucks and Susan Tedeschi.</p>
                <p>Jacob has also been teaching percussion and piano for the better part of 10 years, instilling a passion for music making with a personal and creative approach that drives students to push beyond their potential.</p>
            </div>
        </div>
    </div>
)

export default Bio