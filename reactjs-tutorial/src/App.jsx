import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from './utils'
import Portal from './components/Portal'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Tom')
  const [birthDate, setBirthDate] = useState('1995-06-15')
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  const data = calculateTimeLeft(birthDate, lifeExpectancy)
  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  return (
    <Layout>
      {showModal && (
        <Portal handleCloseModal={handleToggleModal}>
          <Form handleCloseModal={handleToggleModal}/>
        </Portal>
    )}
      <Hero handleToggleModal={handleToggleModal} name={name} data={data} percentage={percentage}/>
      <Clocks data={data} />
      <Calendar lifeExpectancy={lifeExpectancy} data={data} />
      <Summary lifeExpectancy={lifeExpectancy} birthDate={birthDate} />
    </Layout>
  )
}

export default App
