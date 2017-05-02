# mini-js-template
Compact, no dependency JavaScript template library.

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