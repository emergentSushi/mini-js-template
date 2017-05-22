# mini-js-template
Compact, no dependency JavaScript template library. I've written variations on this theme several times for demos and prototypes, but each time they were written on company time so I didn't have the right to open source them. This is a new, from scratch implementation that I hold the copyright to :)

## Example Template
```HTML
<script type="text/html" id="person-template">
	<div>
		<h3>{{firstName}} {{lastName}}</h3>
		<ul>
			{{each:hobbies:hobby-template}}
		</ul>
	</div>
</script>

<script type="text/html" id="hobby-template">
	<li>{{name}}</li>
</script>
```

## Usage
```Javascript
var model = {   firstName: 'Bob', lastName: 'Smith', 
		hobbies:
		[
			{ name: 'Drawing' }, 
			{ name: 'Painting' } 
		]
	    };
document.getElementById('parent')
	.insertAdjacentHTML('beforeend', render(model, 'test'));
```

## Output
```HTML
<div id="parent">
	<div>
		<h3>Bob Smith</h3>
		<ul>
			<li>Drawing</li>
			<li>Painting</li>
		</ul>
	</div>
</div>
```
