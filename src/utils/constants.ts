import {Album, Video} from './types'

export const LESSON_PAGE_URL = '/lessons'

// External URLs
export const ALEX_PORTFOLIO_URL = 'https://www.alexcharland.com'

// Redux Actions
export const MARK_HOME_PAGE_AS_VISITED = 'MARK_HOME_PAGE_AS_VISITED'


// Albums
export const StraightAheadFBlues: Album = {
    isLarge: true,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1643969434/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/tracklist=false/track=3043990361/transparent=true/',
    href: 'http://leftfieldquartet.bandcamp.com/album/please-take-us-seriously',
    text: 'The Straight-Ahead F Blues by Left Field Quartet',
}

export const MaybeWeBeDreamin: Album = {
    isLarge: false,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2620952132/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1590165644/transparent=true/',
    href: 'http://thompsonsprings.bandcamp.com/album/fond-regards',
    text: 'Fond Regards by Thompson Springs',
}

export const OlderThanIAm: Album = {
    isLarge: false,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2438207138/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3519104266/transparent=true/',
    href: 'http://kainalu.bandcamp.com/album/bloom-lagoon',
    text: 'Bloom Lagoon by Kainalu',
}

export const MorningLight: Album = {
    isLarge: false,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=3096727319/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2224092449/transparent=true/',
    href: 'http://sleepygaucho.bandcamp.com/album/morning-light',
    text: 'Morning Light by Sleepy Gaucho',
}

export const GoldKeyToTheCity: Album = {
    isLarge: false,
    src: 'https://bandcamp.com/EmbeddedPlayer/album=796601865/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=4074155033/transparent=true/',
    href: 'http://thesharrows.bandcamp.com/album/gold-key-to-the-city',
    text: 'Gold Key to the City by The Sharrows',
}

// Videos

export const GenerallySpoken: Video = {
    src: 'https://www.youtube.com/embed/eN_qReDGJRk',
}

export const DeadlyStare: Video = {
    src: 'https://www.youtube.com/embed/xAeiohVbOdQ?start=15',
}

export const Situ: Video = {
    src: 'https://www.youtube.com/embed/O9IqIl-fGbU',
}

export const FreightTrain: Video = {
    src: 'https://www.youtube.com/embed/zCrY9wMm414',
}
