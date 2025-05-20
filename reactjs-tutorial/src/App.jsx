import Layout from './components/layouts/Layout'
import Hero from './components/Hero'
import Clocks from './components/Clocks'
import Calendar from './components/Calendar'
import Summary from './components/Summary'
import { calculateTimeLeft, getLifePercentageLived } from './utils'
import Portal from './components/Portal'
import Form from './components/Form'

function App() {
  const birthDate = '1995-06-15'
  const lifeExpectancy = 80
  const data = calculateTimeLeft(birthDate, lifeExpectancy)
  console.log(data)
  const name = 'Tom'
  const showModal = true

  const percentage = getLifePercentageLived(birthDate, lifeExpectancy)

  return (
    <Layout>
      {showModal && (<Portal>
        <Form />
      </Portal>)}
      <Hero name={name} data={data} percentage={percentage}/>
      <Clocks data={data} />
      <Calendar lifeExpectancy={lifeExpectancy} data={data} />
      <Summary lifeExpectancy={lifeExpectancy} birthDate={birthDate} />
    </Layout>
  )
}

export default App
