
const Prices = () => {
  return (
    <div className="flex-container">
      <h1>Grilles tarifaires</h1>
      <br />
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Durée</th>
            <th>Reiki / Fascia</th>
            <th>À l’huile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Durée">60 min</td>
            <td data-label="Massage habillé">60 €</td>
            <td data-label="Massage à l’huile">65 €</td>
          </tr>
          <tr>
            <td data-label="Durée">90 min</td>
            <td data-label="Massage habillé">75 €</td>
            <td data-label="Massage à l’huile">80 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Prices;