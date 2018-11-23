<template>
		<div>
			<button @click="getPets">获取宠物列表</button>
		</div>
</template>

<script>
import { findPets } from '@/api/pet';

export default {
	data(){
		return {

		}
	},
	methods:{
		/**
		 * 获取宠物列表
		 */
		getPets(){
			let that=this;
			findPets().then(function (response) {
        that.pets=response.data.pets;
        alert(JSON.stringify(response.data)) // {id: "<token>", ttl: 1209600, created: "2017-01-01T00:00:00.000Z", userId: 1}
      })
		}	
	}
}
</script>

<style>

</style>

