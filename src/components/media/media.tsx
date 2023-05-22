import React from 'react'
import './media.scss'
import {Video} from '../../utils/types'
import {
  DeadlyStare,
  FreightTrain,
  Situ,
  MEDIA_ID,
  Etude1,
  BOUQUET,
  HOMEFIELD,
  MAY_DAY,
  MORNING_LIGHT,
} from '../../utils/constants'

const cb = 'media'

const Media = (): JSX.Element => (
  <div id='backstop-media' className={cb}>
    <div className={`${cb}__content-wrapper`}>
      <h2 id={MEDIA_ID} tabIndex={-1} className={`${cb}__heading`}>
        <span className={`${cb}__heading-background`}>Media</span>
      </h2>
      <div className={`${cb}__album-section`}>
        <div className={`${cb}__featured-album-wrapper`}>
          <SpotifyWrapper src={BOUQUET} />
          <SpotifyWrapper src={HOMEFIELD} />
        </div>
        <div className={`${cb}__secondary-albums-wrapper`}>
          <SpotifyWrapper src={MAY_DAY} />
          <SpotifyWrapper src={MORNING_LIGHT} />
        </div>
      </div>
      <div className={`${cb}__video-section`}>
        <VideoWrapper {...Etude1} />
        <VideoWrapper {...DeadlyStare} />
        <VideoWrapper {...Situ} />
        <VideoWrapper {...FreightTrain} />
      </div>
    </div>
  </div>
)

const SpotifyWrapper = ({src}: Video): JSX.Element => (
  <iframe
    title={src}
    style={{borderRadius: 12}}
    src={src}
    width='100%'
    height='152'
    frameBorder='0'
    allowFullScreen
    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    loading='lazy'
  ></iframe>
)

const VideoWrapper = ({src}: Video): JSX.Element => (
  <div className={`${cb}__video`}>
    <iframe
      className={`${cb}__video-iframe bs-ignore`}
      title={src}
      src={src}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  </div>
)

export default Media
