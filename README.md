# next-max-by
> This method is like .max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. 


## usage:
```js
var objects = [{ 'n': 1 }, { 'n': 2 }];
var max = nx.maxBy(objects, function (_, o) {
  return o.n;
});

// { n: 2}
```
