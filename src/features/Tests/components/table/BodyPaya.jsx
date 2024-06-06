import React from "react";

function BodyPaya({TestData}) {
  return (
    <tbody>
      {TestData &&
        TestData.map((e, i) => {
          return (
            <tr key={i}>
              <td scope="row">{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.expireDate}</td>
            </tr>
          );
        })}
    </tbody>
  );
}

export default BodyPaya;
