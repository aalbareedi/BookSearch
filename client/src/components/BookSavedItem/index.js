import React from "react";
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookSavedItem({children}) {
  return (
    <li className="list-group-item">
      {children}
    </li>
  );
}
//
// // RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export function BookSavedItem(props) {
//   return (
//     <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//           //  <Thumbnail src={props.volumeInfo.imageLinks.thumbnail} />
//           </Col>
//           <Col size="xs-6 sm-9">
//
//             <h3>{props.volumeInfo.title}</h3>
//             <Col size="xs-6 sm-9">
//             <SaveBtn />
//             <DeleteBtn />
//             </Col>
//
//             <p>
//               Written By{" "}
//               {props.volumeInfo.authors.length
//                 ? props.volumeInfo.authors.join(", ")
//                 : ""}
//             </p>
//             <p>{props.volumeInfo.description}</p>
//             <a
//               rel="noreferrer noopener"
//               target="_blank"
//               href={props.volumeInfo.canonicalVolumeLink}
//             >
//               Go to the book!
//             </a>
//           </Col>
//
//         </Row>
//       </Container>
//     </li>
//   );
// }
