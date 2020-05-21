<template>
	<div class="home">
		<vue-plyr ref="plyr">
			<video>
				
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
			video: 'video'
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
