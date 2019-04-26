import gql from 'graphql-tag';

export const GET_LINE_GRAPH = gql`
  query getLineGraph($collection_type: String, $graph_type: String, $from: Int, $to: Int) {
    getLineGraph(collection_type: $collection_type, graph_type: $graph_type, from: $from, to: $to) {
      id
      color
      data {
        x
        y
      }
    }
  }
`;
