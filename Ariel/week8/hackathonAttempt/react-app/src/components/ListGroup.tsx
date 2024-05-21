// better to use a fragment than to wrap everything in div
// import { Fragment } from "react"; but we can also use empty brackets for the same thing

function ListGroup() {
  let medList = [`Clonex`, `Haldol`, `Zoloft`, `Prozac`];

  return (
    <>
      <h1>Funny Farm</h1>
      {medList.length === 0 ? <p>no meds registered</p> : null}
      <ul className="list-group">
        {medList.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
