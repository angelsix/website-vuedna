<template>
	<div class="accordianItem">
		<input type="checkbox" :id="this._uid" />
		<label :for="this._uid">{{ title }}</label>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	}
};
</script>

<style lang="scss" scoped>
.accordianItem {
	--color-accordian-item-background: #efdb00;
	--color-accordian-item-background-hover: #fff048;

	overflow: hidden;

	input {
		display: none;
	}

	input:checked {
		+ label {
			background: var(--color-accordian-item-background-hover);
			&::after {
				transform: rotate(90deg);
			}
		}
		~ div {
			max-height: 100vh;
		}
	}

	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		background: var(--color-accordian-item-background);
		font-weight: bold;
		cursor: pointer;

		&:hover {
			background: var(--color-accordian-item-background-hover);
		}
		&::after {
			content: "\276F";
			// Set to base line height so rotating stays square
			width: 1.6em;
			text-align: center;
			transition: all 0.35s;
		}
	}

	> div {
		max-height: 0;
		transition: max-height linear 0.35s;
	}
}
</style>
