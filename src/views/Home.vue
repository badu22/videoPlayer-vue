<template>
	<div class="home">
		<div class="buttons">
			<button class="button is-warning" @click="player.togglePlay()">Play / Pause</button>
			<button class="button is-warning" @click="player.stop()">Stop</button>
			<button class="button is-warning" @click="player.restart()">Restart</button>
			<button class="button is-warning" @click="player.rewind()">Rewind</button>
			<button class="button is-warning" @click="player.forward()">Forward</button>
			<button class="button is-warning" @click="player.fullscreen.enter()">Fullscreen</button>
			<button class="button is-warning" @click="player.toggleControls()">ToggleControls</button>
		</div>
		<vue-plyr ref="plyr" :options="plyrOptions">
			<video></video>
		</vue-plyr>
	</div>
</template>
<script>
import { EventHub } from '@/mixins/eventHub'
import sources from '@/videoSources/videoSources'

export default {
	name: 'Home',

	data() {
		return {
			video: 'video',
			plyrOptions: {
				debug: true,
				// title: 'View From A Blue Moon',
				// iconUrl: 'dist/demo.svg',
				// keyboard: {
				// 	global: true,
				// },
				// tooltips: {
				// 	controls: true,
				// },
				// captions: {
				// 	active: true,
				// },
				// adTagUrl:
				// 	'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',
				ads: {
					enabled: true,
					// tagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
					tagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
				},
				// previewThumbnails: {
				// 	enabled: true,
				// 	src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
				// },
				// vimeo: {
				// 	// Prevent Vimeo blocking plyr.io demo site
				// 	referrerPolicy: 'no-referrer',
				// },
			}
		}
	},

	computed: {
		player() {
			return this.$refs.plyr.player
		},

		selectedVideo() {
			return sources[this.video]
		}
	},

	mounted() {
		this.player.source = this.selectedVideo
	},

	beforeDestroy() {
		EventHub.$off('switchVideo')
	},

	created() {
		EventHub.$on('switchVideo', this.switchVideo)
	},

	methods: {
		switchVideo(source) {
			this.video = source
			this.player.source = this.selectedVideo
		}
	}
}
</script>
