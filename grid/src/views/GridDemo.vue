<template>
	<Section wrap pad class="home demo">
		<h1>Dna Fabric Grid</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>
					By default, a grid with columns will have all column widths split
					equally. If content cannot fit in a column it will be hidden to stay
					at the desired the column size.
				</p>
				<p>
					To allow content to always fit, add the word wrap to the Grid element
					and Column's will wrap to new lines if needed.
				</p>
				<p>You can add as many columns as you like for unlimited control</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid>
  <Column>1/2</Column>
  <Column>1/2</Column>
</Grid>
<Grid>
  <Column>1/3</Column>
  <Column>1/3</Column>
  <Column>1/3</Column>
</Grid>
<Grid>
  <Column>1/4</Column>
  <Column>1/4</Column>
  <Column>1/4</Column>
  <Column>1/4</Column>
</Grid>
<Grid>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
</Grid>
<Grid>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
</Grid>
<Grid>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
</Grid>
<Grid>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid>
			<Column><p>1/2</p></Column>
			<Column><p>1/2</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/3</p></Column>
			<Column><p>1/3</p></Column>
			<Column><p>1/3</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
		</Grid>
		<Grid>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
		</Grid>

		<h1>Fixed Columns</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>
					This grid has
					<code>&lt;Grid columns=5&gt;</code> and will not wrap onto new lines
					be default, so will always maintain 5 columns
				</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid :columns="5">
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
  <Column>Column 1/5</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid :columns="5">
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
			<Column><p>Column 1/5</p></Column>
		</Grid>

		<h1>Wrapped Fixed Columns</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>
					This grid has
					<code>&lt;Grid columns=5 wrap&gt;</code> so will wrap columns to new
					lines if the content does not fit breaking the 5 column per line if
					needed
				</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid :columns="5" wrap>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
  <Column>Column 1/5 Wrapped</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid :columns="5" wrap>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
			<Column><p>Column 1/5 Wrapped</p></Column>
		</Grid>

		<h1>Vertical Alignment</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>Here are some options to vertical align columns</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid>
  <Column :column-width="100">Top</Column>
  <Column middle>Middle</Column>
  <Column top>Top</Column>
  <Column middle>
    <div class="center-content" style="height: 150px">Middle</div>
  </Column>
  <Column bottom>Bottom</Column>
  <Column middle>Middle</Column>
  <Column :column-width="100">Bottom</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid>
			<Column :column-width="100"><p>Top</p></Column>
			<Column middle><p>Middle</p></Column>
			<Column top><p>Top</p></Column>
			<Column middle>
				<div class="center-content" style="height: 150px">Middle</div>
			</Column>
			<Column bottom><p>Bottom</p></Column>
			<Column middle><p>Middle</p></Column>
			<Column :column-width="100"><p>Bottom</p></Column>
		</Grid>

		<h1>Centered Grid</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>Here is horizontally centering columns in a grid</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid center>
  <Column>Centered</Column>
</Grid>
<Grid center>
  <Column :column-width="40">Centered</Column>
  <Column :column-width="40">Centered</Column>
</Grid>
<Grid center>
  <Column :column-width="20">Centered</Column>
  <Column :column-width="20">Centered</Column>
  <Column :column-width="20">Centered</Column>
</Grid>
<Grid center>
  <Column :column-width="40">Centered</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid center>
			<Column><p>Centered</p></Column>
		</Grid>
		<Grid center>
			<Column :column-width="40"><p>Centered</p></Column>
			<Column :column-width="40"><p>Centered</p></Column>
		</Grid>
		<Grid center>
			<Column :column-width="20"><p>Centered</p></Column>
			<Column :column-width="20"><p>Centered</p></Column>
			<Column :column-width="20"><p>Centered</p></Column>
		</Grid>
		<Grid center>
			<Column :column-width="40"><p>Centered</p></Column>
		</Grid>

		<h1>Nested Grids</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>You can nest grids inside other grid columns</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid>
  <Column>
    <Grid>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
    </Grid>
    <Grid>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
    </Grid>
    <Grid>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
      <Column>Grid 1</Column>
    </Grid>
  </Column>
  <Column>
    <Grid>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
    </Grid>
    <Grid>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
    </Grid>
    <Grid>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
      <Column>Another grid</Column>
    </Grid>
  </Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid>
			<!-- Removes demo column padding so nesting doesn't have double padding -->
			<Column class="no-demo">
				<Grid>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
				</Grid>
				<Grid>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
				</Grid>
				<Grid>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
					<Column><p>Grid 1</p></Column>
				</Grid>
			</Column>
			<!-- Removes demo column padding so nesting doesn't have double padding -->
			<Column class="no-demo">
				<Grid>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
				</Grid>
				<Grid>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
				</Grid>
				<Grid>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
					<Column><p>Another grid</p></Column>
				</Grid>
			</Column>
		</Grid>

		<h1>Gutters</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>
					The grids have a 2em gutter by default. You can remove it by adding
					no-gutter to the Grid element or set a custom gutter by adding CSS
					style to the `.grid { margin: -2em 0 2em -2em }` and the same to the
					`.col { padding: 2em 0 0 2em}` changing the 1em for a new value.
				</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid no-gutter>
  <Column>1/2</Column>
  <Column>1/2</Column>
</Grid>
<Grid no-gutter>
  <Column>1/3</Column>
  <Column>1/3</Column>
  <Column>1/3</Column>
</Grid>
<Grid no-gutter>
  <Column>1/4</Column>
  <Column>1/4</Column>
  <Column>1/4</Column>
  <Column>1/4</Column>
</Grid>
<Grid no-gutter>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
  <Column>1/5</Column>
</Grid>
<Grid no-gutter>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
  <Column>1/6</Column>
</Grid>
<Grid no-gutter>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
  <Column>1/7</Column>
</Grid>
<Grid no-gutter>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
  <Column>1/8</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid no-gutter>
			<Column><p>1/2</p></Column>
			<Column><p>1/2</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/3</p></Column>
			<Column><p>1/3</p></Column>
			<Column><p>1/3</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
			<Column><p>1/4</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
			<Column><p>1/5</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
			<Column><p>1/6</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
			<Column><p>1/7</p></Column>
		</Grid>
		<Grid no-gutter>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
			<Column><p>1/8</p></Column>
		</Grid>

		<h1>
			Visiblity (
			<span class="lap-hidden tab-hidden mob-hidden">Desktop</span>
			<span class="desk-hidden tab-hidden mob-hidden">Laptop</span>
			<span class="desk-hidden lap-hidden mob-hidden">Tablet</span>
			<span class="desk-hidden lap-hidden tab-hidden">Mobile</span>
			)
		</h1>

		<Grid>
			<Column :below-laptop-width="100" class="no-demo">
				<p>You can hide/show columns based on the size of the page</p>
			</Column>
			<Column :below-laptop-width="100" class="no-demo">
				<textarea class="codebox">
<Grid>
  <Column desktop>desktop</Column>
  <Column laptop>laptop</Column>
  <Column tablet>tablet</Column>
  <Column mobile>mobile</Column>
</Grid>
<Grid>
  <Column desktop-hidden>desktop-hidden</Column>
  <Column laptop-hidden>laptop-hidden</Column>
  <Column tablet-hidden>tablet-hidden</Column>
  <Column mobile-hidden>mobile-hidden</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid>
			<Column desktop><p>desktop</p></Column>
			<Column laptop><p>laptop</p></Column>
			<Column tablet><p>tablet</p></Column>
			<Column mobile><p>mobile</p></Column>
		</Grid>
		<Grid>
			<Column desktop-hidden><p>desktop-hidden</p></Column>
			<Column laptop-hidden><p>laptop-hidden</p></Column>
			<Column tablet-hidden><p>tablet-hidden</p></Column>
			<Column mobile-hidden><p>mobile-hidden</p></Column>
		</Grid>

		<h1>
			Size (
			<span class="lap-hidden tab-hidden mob-hidden">Desktop</span>
			<span class="desk-hidden tab-hidden mob-hidden">Laptop</span>
			<span class="desk-hidden lap-hidden mob-hidden">Tablet</span>
			<span class="desk-hidden lap-hidden tab-hidden">Mobile</span>
			)
		</h1>

		<Grid>
			<Column :column-width="100" class="no-demo">
				<p>You can change the width of columns based on the size of the page</p>
			</Column>
			<Column :column-width="100" class="no-demo">
				<textarea class="codebox">
<Grid center>
  <Column :column-width="50" :below-desktop-width="100">Width 50% / Below Desktop 100%</Column>
  <Column :column-width="70" :below-laptop-width="100">Width 70% / Below Laptop 100%</Column>
  <Column :column-width="60" :desktop-width="100">Width 60% / Desktop 100%</Column>
  <Column :column-width="60" :laptop-width="100">Width 60% / Laptop 100%</Column>
  <Column :column-width="60" :tablet-width="100">Width 60% / Tablet 100%</Column>
  <Column :column-width="60" :mobile-width="100">Width 60% / Mobile 100%</Column>
</Grid>
        </textarea>
			</Column>
		</Grid>

		<Grid center>
			<Column :column-width="50" :below-desktop-width="100"
				><p>Width 50% / Below Desktop 100%</p></Column
			>
			<Column :column-width="70" :below-laptop-width="100"
				><p>Width 70% / Below Laptop 100%</p></Column
			>
			<Column :column-width="60" :desktop-width="100"
				><p>Width 60% / Desktop 100%</p></Column
			>
			<Column :column-width="60" :laptop-width="100"
				><p>Width 60% / Laptop 100%</p></Column
			>
			<Column :column-width="60" :tablet-width="100"
				><p>Width 60% / Tablet 100%</p></Column
			>
			<Column :column-width="60" :mobile-width="100"
				><p>Width 60% / Mobile 100%</p></Column
			>
		</Grid>
	</Section>
</template>

<script>
export default {
	name: "home"
};
</script>

<style lang="scss">
textarea.codebox {
	width: 100%;
	height: 12em;
	background: var(--color-foreground);
	font-family: monospace;
	font-size: 1.3em;
	color: var(--color-background);
	padding: 0.5em;
	resize: none;
}

code {
	padding: 0.2em;
	background: rgba(0, 0, 0, 0.2);
}

// Demo column styles
.demo {
	.col:not(.no-demo) > p,
	.col:not(.no-demo) > div {
		border: 1px dashed rgba(218, 37, 231, 1);
		text-align: center;
		padding: 1em;
		margin-bottom: 0;
	}
	.col:not(.no-demo) > p {
		display: block;
	}
}

// Debug column styles
.debug {
	.col > * {
		border: 1px dashed green;
	}
}
</style>
