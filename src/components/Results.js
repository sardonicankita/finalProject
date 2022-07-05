import Graph from 'react-json-graph';
 
<Graph
    width={600}
    height={400}
    json={{
        nodes: [{
            id: 'orderNo',
            label: {getData.payload.orderNo},
            position: {x: 150, y: 250},
        },
        {
            id: '1',
            label: 'Bob',
            position: {x: 350, y: 350},
        }],
        edges: [{
            source: '0',
            target: '1'
        }]
    }}
    onChange={(newGraphJSON) => {}}
/>