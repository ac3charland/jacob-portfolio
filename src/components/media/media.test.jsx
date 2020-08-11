import Media from './media'

const cb = 'media'

describe('Media', () => {
    let render

    beforeEach(() => {
        render = (changedProps = {}) => mount(<Media {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('has correct featured album data', () => {
        const component = render()
        const album = component.find(`.${cb}__album-large`)
        expect(album.text()).toEqual('The Straight-Ahead F Blues by Left Field Quartet')
        expect(album.find(`.${cb}__album-iframe`).prop('title')).toEqual('The Straight-Ahead F Blues by Left Field Quartet')
        expect(album.find(`.${cb}__album-iframe`).prop('src')).toEqual('https://bandcamp.com/EmbeddedPlayer/album=1643969434/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/tracklist=false/track=3043990361/transparent=true/')
        expect(album.find(`.${cb}__album-iframe a`).prop('href')).toEqual('http://leftfieldquartet.bandcamp.com/album/please-take-us-seriously')
    })

    ;[
        {
            desc: 'Fond Regards',
            text: 'Fond Regards by Thompson Springs',
            src: 'https://bandcamp.com/EmbeddedPlayer/album=2620952132/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1590165644/transparent=true/',
            href: 'http://thompsonsprings.bandcamp.com/album/fond-regards',
        },
        {
            desc: 'Older Than I Am',
            text: 'Bloom Lagoon by Kainalu',
            src: 'https://bandcamp.com/EmbeddedPlayer/album=2438207138/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3519104266/transparent=true/',
            href: 'http://kainalu.bandcamp.com/album/bloom-lagoon',
        },
        {
            desc: 'Morning Light',
            text: 'Morning Light by Sleepy Gaucho',
            src: 'https://bandcamp.com/EmbeddedPlayer/album=3096727319/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2224092449/transparent=true/',
            href: 'http://sleepygaucho.bandcamp.com/album/morning-light',
        },
        {
            desc: 'Gold Key to the City',
            text: 'Gold Key to the City by The Sharrows',
            src: 'https://bandcamp.com/EmbeddedPlayer/album=796601865/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=4074155033/transparent=true/',
            href: 'http://thesharrows.bandcamp.com/album/gold-key-to-the-city',
        },
    ].forEach((test, idx) => {
        it(`has correct data for ${test.desc} album`, () => {
            const component = render()
            const album = component.find(`.${cb}__album`).at(idx)
            expect(album.text()).toEqual(test.text)
            expect(album.find(`.${cb}__album-iframe`).prop('title')).toEqual(test.text)
            expect(album.find(`.${cb}__album-iframe`).prop('src')).toEqual(test.src)
            expect(album.find(`.${cb}__album-iframe a`).prop('href')).toEqual(test.href)
        })
    })

    ;[
        {
            desc: 'Generally Spoken it is Nothing But Rhythm', 
            src: 'https://www.youtube.com/embed/eN_qReDGJRk',
        },
        {
            desc: 'Deadly Stare',
            src: 'https://www.youtube.com/embed/xAeiohVbOdQ?start=15',
        },
        {
            desc: 'Situ',
            src: 'https://www.youtube.com/embed/O9IqIl-fGbU',
        },
        {
            desc: 'Freight Train',
            src: 'https://www.youtube.com/embed/zCrY9wMm414',
        },
    ].forEach((test, idx) => {
        it(`has correct data for ${test.desc} video`, () => {
            const component = render()
            const video = component.find(`.${cb}__video-iframe`).at(idx)
            expect(video.prop('src')).toEqual(test.src)
            expect(video.prop('title')).toEqual(test.src)
        })
    })
})