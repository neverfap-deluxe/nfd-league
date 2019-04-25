import gql from 'graphql-tag';

const GET_LINE_GRAPH = gql`
  query getLineGraph($collection_type: String, $from: Int, $to: Int) {
    getLineGraph(collection_type: $collection_type, from: $from, to: $to) {
      id
      color
      data {
        x
        y
      }
    }
  }
`;


export default GET_LINE_GRAPH;