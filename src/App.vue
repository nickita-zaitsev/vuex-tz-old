<template>
	<div>
		<table class="table table-bordered">
		<thead>
			<tr>
			<th>Name</th>
			<th>Vintage</th>
			<th>Producer</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,index) in list" v-if="index < 10">
				<td>{{ item.name }}</td>
				<td>{{ item.vintage}}</td>
				<td>{{ item.producer }}</td>
			</tr>
		</tbody>
		</table>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';
	export default {
		created () {
			this.$store.dispatch('getList');
		},
		computed: {
			...mapGetters([
				'list'
			])
		}
	}
</script>