import accessorFn from './accessor';
import Kapsule from 'kapsule';

export default Kapsule({
    props: {
        strength: { default: 1 },   // accessor: number > 0
        direction: { default: 90 }  // accessor: angle in degrees (0: right, 90: down)
    },
    methods: {
        initialize(state, nodes) {  // called by engine to pass nodes object
            state.nodes = nodes;
        }
    },
    init(alpha, state) {    // called at each tick

        const strength = accessorFn(state.strength);
        const direction = accessorFn(state.direction);

        state.nodes.forEach(node => {
            const dv = polar2Cart(alpha * strength(node), direction(node));

            node.vx += dv.x;
            node.vy += dv.y;
        });

        //

        function polar2Cart(d, a) {
            const rad = deg2rad(a);
            return {
                x: d * Math.cos(rad),
                y: d * Math.sin(rad)
            };

            //

            function deg2rad(deg) {
                return deg * Math.PI / 180;
            }
        }
    }
});