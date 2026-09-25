import { manifest } from "../content";

export default function Manifest() {
  return (
    <section className="manifest" id="manifest" aria-labelledby="manifest-title">
      <div className="manifest-board">
        <div className="manifest-head">
          <h2 id="manifest-title">Shipping manifest</h2>
          <p>Seven shippers since 2017. Newest first.</p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">When</th>
                <th scope="col">Where</th>
                <th scope="col">Role</th>
                <th scope="col">What shipped</th>
              </tr>
            </thead>
            <tbody>
              {manifest.map((m) => (
                <tr key={m.company}>
                  <td className="m-dates">{m.dates}</td>
                  <th scope="row">
                    {m.company}
                    <span className="m-sector">{m.sector}</span>
                  </th>
                  <td>{m.role}</td>
                  <td>{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="manifest-foot">Software Engineering Certificate, The Iron Yard, 2015.</p>
      </div>
    </section>
  );
}
