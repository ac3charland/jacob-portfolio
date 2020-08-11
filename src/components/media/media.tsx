import React from 'react'
import './media.scss'
import {Album, Video} from '../../utils/types'
import {StraightAheadFBlues, MaybeWeBeDreamin, OlderThanIAm, MorningLight, GoldKeyToTheCity, GenerallySpoken, DeadlyStare, Situ, FreightTrain} from '../../utils/constants'

const cb = 'media'

const Media = () => (
    <div className={cb}>
        <h2 className={`${cb}__heading`}>Media</h2>
        <div className={`${cb}__album-section`}>
            <div className={`${cb}__featured-album-wrapper`}>
                <AlbumWrapper {...StraightAheadFBlues} />
            </div>
            <div className={`${cb}__secondary-albums-wrapper`}>
                <AlbumWrapper {...MaybeWeBeDreamin} />
                <AlbumWrapper {...OlderThanIAm} />
                <AlbumWrapper {...MorningLight} />
                <AlbumWrapper {...GoldKeyToTheCity} />
            </div>
        </div>
        <div className={`${cb}__video-section`}>
            <VideoWrapper {...GenerallySpoken} />
            <VideoWrapper {...DeadlyStare} />
            <VideoWrapper {...Situ} />
            <VideoWrapper {...FreightTrain} />
        </div>
    </div>
)



const AlbumWrapper = ({isLarge, src, href, text}: Album) => (
    <div className={isLarge ? `${cb}__album-large` : `${cb}__album`}>
        <iframe className={`${cb}__album-iframe`} title={text} src={src} seamless><a href={href}>{text}</a></iframe>
    </div>
)

const VideoWrapper = ({src}: Video) => (
    <div className={`${cb}__video`}>
        <iframe className={`${cb}__video-iframe`} title={src} src={src} allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
    </div>
)

export default Media