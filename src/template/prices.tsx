
const Prices = () => {
  return (
    <div className="flex-container">
      <h1>Grilles tarifaires</h1>
      <br />
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Durée</th>
            <th>Massage habillé</th>
            <th>Massage à l’huile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Durée">60 min</td>
            <td data-label="Massage habillé">60 €</td>
            <td data-label="Massage à l’huile">70 €</td>
          </tr>
          <tr>
            <td data-label="Durée">90 min</td>
            <td data-label="Massage habillé">85 €</td>
            <td data-label="Massage à l’huile">95 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Prices;