const lists = [
    {
        heading: 'soc',
        links: [
            {
                title: 'vk',
                url: 'https://vk.com/',
            },
            {
                title: 'instagram',
                url: 'https://www.instagram.com/',
            },
            {
                title: 'tumblr',
                url: 'https://www.tumblr.com/',
            },
        ],
    },
    {
        heading: 'dm',
        links: [
            {
                title: 'gmail',
                url: 'https://www.gmail.com/',
            },
            {
                title: 'ymail',
                url: 'https://mail.yandex.ru/#inbox/',
            },
        ],
    },
    {
        heading: 'etc',
        links: [
            {
                title: 'soundcloud',
                url: 'https://www.soundcloud.com/',
            },
            {
                title: 'twitch',
                url: 'https://twitch.tv/',
            },
            {
                title: 'da',
                url: 'https://www.deviantart.com/',
            },
        ],
    },
    {
        heading: 'media',
        links: [
            {
                title: 'anime',
                url: 'https://animego.org/',
            },
            {
                title: 'manga',
                url: 'https://mangalib.me/',
            },
            {
                title: 'youtube',
                url: 'https://www.youtube.com/',
            },
        ],
    },
    
]

function renderLists() {
    const linksWrapper = document.querySelector('#links')

    lists.forEach(list => {
        const linksTemplate = list.links.map(link => {
            return `
				<li class="links__item">
					<a class="links__link" href="${link.url}">${link.title}</a>
				</li>
			`
        })

        const template = `
			<ul class="links">
				<li class="links__item">
					<span class="links__heading">${list.heading}</span>
				</li>
				${linksTemplate.join('')}
			</ul>
		`

        linksWrapper.insertAdjacentHTML('beforeend', template)
    })
}

renderLists()
