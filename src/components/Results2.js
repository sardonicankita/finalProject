{
    /* Required Props */
    width: Number, // required, width of the graph
    height: Number, // required, height of the graph
    json: {
        nodes: [
            {
                id: String,
                label: String, // string content of the node
                position: {
                    x: Number,
                    y: Number,
                },
                // Optional
                size: {
                    width: Number, // width of the node
                    height: Number, // height of the node
                },
            },
        ],
        edges: [
            {
                source: String, // id of the source node
                target: String, // id of the target node
            },
        ],
 
        // Optional
        isStatic: Boolean, // if true, can't change nodes position by dragging
        isVertical: Boolean, // if true, all edges draw for vertical graph
        isDirected: Boolean, // if false, edges will change connection position depending on source and target nodes position relative to each other
    },
 
    /* Optional Props */
    scale: Number, // default is 1, current scale of graph
    minScale: Number, // default is 1, minimum value of scale, for now can not be less then 0.3
    maxScale: Number, // default is 1, maximum value of scale, for now can not be greater then 1
 
    onChange: (updatedJSON) => {}, // calls when graph structure or node position has been changed, accepts new graph JSON as only parameter
 
    Node: React.Component, // React.Component inherited from Node that customize node appearence
    Edge: React.Component, // React.Component inherited from Edge that customize edge appearence
 
    shouldNodeFitContent: Boolean, // if true, node will try to resize to fit content
}