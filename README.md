# d3.forceConstant

[![NPM](https://nodei.co/npm/d3-force-constant.png?compact=true)](https://nodei.co/npm/d3-force-constant/)

A constant acceleration force type for the d3-force simulation engine.

This force accelerates nodes in a particular direction by a constant amount at each tick. Both the force strength and the direction can be set custom per node, or global for all the nodes equally.

It can be used, for example to simulate weight caused by earth's gravity (constant acceleration pointing down), as well as wind blowing or a current flowing in an arbitrary direction.

## Quick start

```
import d3ForceConstant from 'd3-force-constant';
```
or
```
d3.forceConstant = require('d3-force-constant');
```
or even
```
<script src="//unpkg.com/d3-force-constant"></script>
```
then
```
d3.forceSimulation()
    .nodes(<myNodes>)
    .force('gravity', d3.forceConstant()
        .strength(0.5)
        .direction(90)   
    );
```

## API reference

| Method | Description | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <b>strength</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object strength accessor function (`fn(node)`) or a constant (`num`) for all nodes. This represents the strength of the force, in terms of velocity deltas per tick, i.e. `px/tick^2`.  | 1 |
| <b>direction</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object direction accessor function (`fn(node)`) or a constant (`num`) for all nodes. This defines the orientation of the force in degrees, with `0` representing only X increases (rightwards in SVG convention) and `90` only Y increases (downwards).  | 90 |

