# heHoliday.js

The heHoliday is small function base on [`heDate.js`](https://github.com/erezdaniel7/he-date) project that return the Jewish holiday and Event.

HeDate site http://he-date.info/site.html (Hebrew)

## Quick Examples

```javascript
var s=getJwishHoliday(new HeDate());
//now s is event string or null if there is no event today.
 ```
## Demo

http://he-date.info/public/demoHoliday.html
 
```html
	<script src='heDate.min.js'></script>
	<script src='heHoliday.min.js'></script>
	<script>
		var year = (new HeDate()).getYear();
		var heDate = new HeDate(year,1,1);
		while (heDate.getYear()==year){
			var event=getJwishHoliday(heDate);
			if (event){
				var li = document.createElement("li");
				var t = document.createTextNode(event + "   -   " + heDate.toString());
				li.appendChild(t);
				document.getElementById("list").appendChild(li);
			}
			heDate.setDate(heDate.getDate()+1);
		}
	</script>
```

## License
 
Copyright (c) 2014 (ה'תשע"ה) Daniel Erez (erezdaniel7@gmail.com)

HeDate may be freely distributed under the MIT license. (see LICENSE.md file)
 