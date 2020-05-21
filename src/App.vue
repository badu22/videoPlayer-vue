<template>
	<div id="app" class="bd-example is-fullwidth">
		<nav class="navbar">
			<div class="container">
				<div id="navMenu" class="navbar-menu">
					<div class="navbar-start">
						<router-link to="/" class="navbar-item">Home</router-link>
						<router-link to="/about" class="navbar-item">About</router-link>
					</div>
					<div class="navbar-end">
						<div class="navbar-item">
							<div v-if="$route.name === 'Home'" class="buttons" :class="selectedVideo">
								<a class="button video" @click="switchVideo('video')">html5</a>
								<a class="button youtube" @click="switchVideo('youtube')">YouTube</a>
								<a class="button vimeo" @click="switchVideo('vimeo')">Vimeo</a>
								<a class="button audio" @click="switchVideo('audio')">Audio</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>

		<section class="hero is-link is-fullheight-with-navbar">
			<div class="hero-body">
				<div class="container">
					<router-view />
				</div>
			</div>
		</section>
	</div>
</template>

<script>

import { EventHub      }    from '@/mixins/eventHub';
export default {
	name: 'App',

	data () {
		return {
			selectedVideo: 'video'
		}
	},

	methods: {
		switchVideo (video) {
			EventHub.$emit('switchVideo', video);
			this.selectedVideo = video;
		}
	}
}
</script>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #3273dc;
$primary-invert: findColorInvert($primary);

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

.hero.is-link {
	background-color: $primary;
}
.video .video,
.youtube .youtube,
.vimeo .vimeo,
.audio .audio {
	@extend .is-active;
}
</style>
