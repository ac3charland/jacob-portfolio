import React from 'react'
import './bio.scss'

const cb = 'bio'

const Bio = () => (
    <div id='backstop-bio' className={cb}>
        <div className={`${cb}__flex`}>
            {/* <div className={`${cb}__album-column`}>
                <div className={`${cb}__album-wrapper`}>
                </div>
                <p className={`${cb}__album-caption`}>Album caption</p>
            </div> */}
            <div className={`${cb}__bio-column`}>
                <p>I’m a Chicago-based multi-instrumentalist, educator and producer.</p>
                <p>I make music to remind us what life is really about. The beauty, playfulness, stillness and chaos. To dance and to absorb, music is one of the most powerful tools we have.</p>
                <p>As a musician, I have traveled across the US, Canada, Europe, Asia, Australia and Latin America gaining experience in many styles of music along the way.</p>
                <p>I’ve been fortunate enough to share the stage with acts such as Juan de Marcos Gonzalez, Richard Davis, Freddy Cole, Charles Bradley, Lucas Nelson, Clyde Stubblefield and Derek Trucks.</p>
                <p>As a teacher of over 15 years, I have experience working with students of all ages and backgrounds in one-on-one lessons, group lessons and general music. Teaching has been one of the most rewarding parts of music and has brought me more joy than I ever thought possible.</p>
                <p>As a producer, I’ve garnered many experiences with bands and artists over the years looking for help realizing their own ideas in the form of sound. There is nothing more magical than working together to create the best version of what an artist is capable of.</p>
                <p>I also have experience in recording, mixing and mastering through my own home studio, piano tuning, remote recording, and live gig work.</p>
            </div>
        </div>
    </div>
)

export default Bio
