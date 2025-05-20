export default function Form(props) {
  const { handleCloseModal, handleUpdateData } = props

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ]
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

  return (
    <section id="form">
      <div>
        <h4 className='text-gradient'>Your Details</h4>
        <button onClick={handleCloseModal} className='link-button'>
          <i className='fa-solid fa-xmark' />
        </button>
      </div>
      <div>
        <label>Name</label>
        <input type='text' required />
      </div>
      <div>
        <label>Birthday</label>
        <div className='bday'>
          <select>
            {days.map((d) => {
              return (
                <option key={d} value={d}>{d}</option>
              )
            })}
          </select>
          <select>
            {months.map((m, i) => {
              return (
                <option key={i} value={i + 1}>{m}</option>
              )
            })}
          </select>
          <select>
            {years.map((y) => {
              return (
                <option key={y} value={y}>{y}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div>
        <label>Life expectancy (years)</label>
        <input type='number' max={120} required />
      </div>
      <button onClick={() => {}}>
        Save
      </button>
    </section>
  )
}
