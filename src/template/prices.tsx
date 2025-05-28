
const Prices = () => {
  return (
    <div className="flex-container">
      <h1>Grilles tarifaires</h1>
      <br />
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Durée</th>
            <th>Habillé</th>
            <th>À l’huile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Durée">60 min</td>
            <td data-label="Massage habillé">55 €</td>
            <td data-label="Massage à l’huile">60 €</td>
          </tr>
          <tr>
            <td data-label="Durée">90 min</td>
            <td data-label="Massage habillé">70 €</td>
            <td data-label="Massage à l’huile">75 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Prices;