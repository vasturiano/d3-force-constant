import constant from './constant';

export default function() {
    let nodes,
        strength = (node => 1),    // accessor: number > 0
        direction = (node => 90);  // accessor: angle in degrees (0: right, 90: down)

    function force(alpha) {

        nodes.forEach(node => {

            const dv = polar2Cart(alpha * strength(node), direction(node));

            node.vx += dv.x;
            node.vy += dv.y;
        });

        //

        function polar2Cart(d, a) {
            return {
                x: d * Math.cos(rad2deg(a)),
                y: d * Math.sin(rad2deg(a))
            };

            //

            function rad2deg(rad) {
                return rad * 180 / Math.PI;
            }
        }
    }

    function initialize() {}

    force.initialize = function(_) {
        nodes = _;
        initialize();
    };

    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), force) : strength;
    };

    force.direction = function(_) {
        return arguments.length ? (direction = typeof _ === "function" ? _ : constant(+_), force) : direction;
    };

    return force;
}