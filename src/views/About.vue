<template>
	<div class="about">
		<vue-simple-markdown :source="source"></vue-simple-markdown>
	</div>
</template>

<script>
export default {
	name: 'Home',

	data() {
		return {
			source: '## fff'
		}
	},

	created() {
		this.axios.get('/plyr-doc.html').then(response => {
			this.source = response.data
		})
	}
}
</script>
