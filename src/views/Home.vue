<template>
	<div class="home">
		<vue-plyr ref="plyr">
			<video poster="poster.png" src="video.mp4">
				<source src="video-720p.mp4" type="video/mp4" size="720" />
				<source src="video-1080p.mp4" type="video/mp4" size="1080" />
				<track
					kind="captions"
					label="English"
					srclang="en"
					src="captions-en.vtt"
					default
				/>
			</video>
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
			video: 'audio'
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
