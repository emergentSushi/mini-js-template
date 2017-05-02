# mini-js-template
Compact, no dependency JavaScript template library.

##Example Template
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

{{property}} and {{each:propertyArray:childTemplateId}}
##Usage 
document.getElementById('parent').insertAdjacentHTML('beforeend', render({ firstName: 'Bob', lastName: 'Smith', hobbies: { { name: 'Drawing' }, { name: 'Painting' } } }, 'test'));