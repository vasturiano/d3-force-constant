d3.forceConstant
==============

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![Dependencies][dependencies-img]][dependencies-url]

A constant acceleration force type for the [d3-force](https://github.com/d3/d3-force) simulation engine.

This force accelerates nodes in a particular direction by a constant amount at each tick. Both the force strength and the direction can be set custom per node, or global for all the nodes equally.

It can be used, for example to simulate weight caused by earth's gravity (constant acceleration pointing down), as well as wind blowing or a current flowing in an arbitrary direction.

This force plugin is also compatible with [d3-force-3d](https://github.com/vasturiano/d3-force-3d) and can function in a one, two (default) or three dimensional space.

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
| <b>direction</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object direction accessor function (`fn(node)`) or a constant (`num`) for all nodes. This defines the orientation of the force in the XY plane in degrees, with `0` representing only X increases (rightwards in SVG convention) and `90` only Y increases (downwards).  | 90 |
| <b>zAngle</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object Z axis angle accessor function (`fn(node)`) or a constant (`num`) for all nodes. Mainly applicable in 3D scenarios when using [d3-force-3d](https://github.com/vasturiano/d3-force-3d). This defines the angle of the force in degrees against the XY plane, with `0` indicating parallel (no Z influence) and `-90` (far) / `90` (near) perpendicular (`direction` has no effect in this case). Values below `-90` or above `90` invert direction on the XY plane. | 0 |


[npm-img]: https://img.shields.io/npm/v/d3-force-constant.svg
[npm-url]: https://npmjs.org/package/d3-force-constant
[build-size-img]: https://img.shields.io/bundlephobia/minzip/d3-force-constant.svg
[build-size-url]: https://bundlephobia.com/result?p=d3-force-constant
[dependencies-img]: https://img.shields.io/david/vasturiano/d3-force-constant.svg
[dependencies-url]: https://david-dm.org/vasturiano/d3-force-constant
