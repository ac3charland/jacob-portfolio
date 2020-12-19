import React from 'react'
import './bio.scss'

const cb = 'bio'

const Bio = () => (
    <div id='backstop-bio' className={cb}>
        <div className={`${cb}__flex`}>
            <div className={`${cb}__album-column`}>
                <div className={`${cb}__album-wrapper`}>
                </div>
                <p className={`${cb}__album-caption`}>Album caption</p>
            </div>
            <div className={`${cb}__bio-column`}>
                <p><span className={`${cb}__bio-heading`}>Jacob Bicknase</span> is a Chicago-based musician, educator, and composer. Experienced in multiple instruments and genres, he brings his unique approach to every project, performance, and rehearsal.</p>
                <p>A recent transplant to the Chicago community, Jacob spent most of his life in Madison and small-town Wisconsin.  After growing up with a background in piano, Jacob found percussion as his next passion, continuing through his college degree at the University of Wisconsin Madison.  His travels have taken him across the US, Canada, Europe, Asia, Australia, and Latin America, gaining experience in many styles of music along the way.</p>
                <p>Jacob feels at home in the classical community, graduating with a percussion performance degree, but is not afraid to genre-bend into Afro-Cuban, Afro-Brazilian, Jazz, Rock, and R&B.  He has been fortunate enough to share the stage with acts such as:</p>
                <p><span className={`${cb}__artists`}>Juan de Marcos Gonzalez, Richard Davis, Freddy Cole, Charles Bradley, Lucas Nelson, Clyde Stubblefield, Derek Trucks and Susan Tedeschi</span></p>
                <p>Jacob has also been teaching percussion and piano for the better part of 10 years, instilling a passion for music making with a personal and creative approach that drives students to push beyond their potential.</p>
            </div>
        </div>
    </div>
)

export default Bio
