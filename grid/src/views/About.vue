<template>
	<Section wrap pad center class="about">
		<GradientUnderline>
			<h1>{{ aboutHeaderText }}</h1>
		</GradientUnderline>

		<Spacer double />

		<TextImageSideBy :image-path="aboutImagePath">
			<p>
				Formally Simon Guy-Holt Trading as A Chimney Sweep, it was incorporated
				in 2016 to A Chimney Sweep Ltd and has now been trading for over 14
				years as one of the Midlands foremost chimney sweeping firms. As a
				member of the Guild of Master Sweeps and HETAS alongside being a Which?
				Trusted Trader, you’re guaranteed to receive great advice and an even
				better service for your domestic chimney issues.
			</p>

			<p>
				Experienced at maintaining open fires, multifuel stoves/log burners,
				ranges and boilers there is not a lot A Chimney Sweep Ltd cannot handle,
				be it a stove service, unblocking a flue and even animal rescue. Being a
				member of Constructionline A Chimney Sweep Ltd has a good standing with
				businesses as they can be reassured that Qualifications, Insurance and
				Health and Safety procedures are all current. Site staff hold CSCS cards
				and are DBS checked.
			</p>

			<p>
				With a client list covering homeowners, public houses, construction
				companies, letting agents, property management and local authorities you
				can be confident in choosing A Chimney Sweep Ltd.
			</p>
		</TextImageSideBy>
	</Section>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			aboutHeaderText: "About A Chimney Sweep",

			aboutImagePath: "/assets/images/about-image.jpg"
		};
	}
};
</script>

<style lang="scss"></style>
