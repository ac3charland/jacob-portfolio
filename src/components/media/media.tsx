import React from 'react'
import './media.scss'
import { Album } from '../../utils/types'
import { straightAheadFBlues, maybeWeBeDreamin, olderThanIAm, morningLight, goldKeyToTheCity } from '../../utils/constants'

const cb = 'media'

const Media = () => (
    <div className={cb}>
        <h2 className={`${cb}__heading`}>Media</h2>
        <div className={`${cb}__album-section`}>
            <div className={`${cb}__featured-album-wrapper`}>
                <AlbumWrapper {...straightAheadFBlues} />
            </div>
            <div className={`${cb}__secondary-albums-wrapper`}>
                <div className={`${cb}__secondary-album-row`}>
                    <div className={`${cb}__secondary-album-wrapper`}>
                        <AlbumWrapper {...maybeWeBeDreamin} />
                    </div>
                    <div className={`${cb}__secondary-album-wrapper`}>
                        <AlbumWrapper {...olderThanIAm} />
                    </div>
                </div>
                <div className={`${cb}__secondary-album-row`}>
                    <div className={`${cb}__secondary-album-wrapper`}>
                        <AlbumWrapper {...morningLight} />
                    </div>
                    <div className={`${cb}__secondary-album-wrapper`}>
                        <AlbumWrapper {...goldKeyToTheCity} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)



const AlbumWrapper = ({ isLarge, src, href, text }: Album) => (
    <div className={isLarge ? `${cb}__album-large` : `${cb}__album`}>
        <iframe className={`${cb}__album-iframe`} title={text} src={src} seamless><a href={href}></a></iframe>
    </div>
)

export default Media