<template>
	<div id="app" data-theme="default">
		<NavigationMenu :content="navigation">
			<template v-slot:left>
				<p class="logo-text">{{ logoText }}</p>
			</template>
		</NavigationMenu>

		<router-view />

		<Section pad wrap class="footer center-text">
			<p class="companyDetails">{{ companyDetails }}</p>
		</Section>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			companyDetails:
				"A Chimney Sweep Ltd. Registered Office: 14 Sycamore Road, Stone, Staffordshire ST15 8NJ. Registered in England and Wales No. 10100630. ©2019 A Chimney Sweep. All Rights Reserved.",
			logoText: "A Chimney Sweep",
			navigation: {
				backgroundColor: "white",
				image: "./assets/images/logo-chimney.png",
				links: [
					{ name: "Home", url: "/" },
					{ name: "About", url: "/about" /* secondary: true */ },
					{ name: "FAQ", url: "/faq" },
					{ name: "Testimonials", url: "/testimonials" }
				]
			}
		};
	},
	mounted: function() {}
};
</script>

<style lang="scss">
.logo-text {
	font-family: "Dancing Script", cursive;
	margin: 0;
	color: var(--color-primary);
	font-size: 2em;
	display: inline-block;
}

.footer {
	.companyDetails {
		font-size: 0.8em;
		color: var(--color-foreground-lighter);
	}
}
</style>
