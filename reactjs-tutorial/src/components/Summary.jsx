
export default function Summary(props) {
  const { lifeExpectancy, birthDate } = props
  const finalYear = parseInt(birthDate.split('-')[0]) + lifeExpectancy

  return (
    <section id="summary">
      <p className='text-gradient'>
        <i className='fa-solid fa-heart-crack' />
        You&apos;ll probably die in the year <strong>{finalYear}</strong> at the age of {lifeExpectancy}.
      </p>
    </section>
  )
}
