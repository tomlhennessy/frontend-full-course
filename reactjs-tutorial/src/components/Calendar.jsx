function DozenDisplay(props) {
    const { weeksArr, yearIndex, weeksNum, finalWeek } = props

    return (
        <div className='year-grid'>
            {weeksArr.map((week, weekIndex) => {
                const currWeek = yearIndex * 52 + weekIndex
                const dotStyle = currWeek == finalWeek - 1 ?
                ' death' :
                    currWeek < weeksNum ?
                    ' solid' :
                        currWeek === weeksNum ?
                            ' pulse' : ''

                return (
                    <div className={'dot ' + dotStyle} key={weekIndex} />
                )
            })}
        </div>
    )
}

export default function Calendar(props) {
    const { lifeExpectancy, data } = props

    const yearsArr = [...Array(lifeExpectancy).keys()]
    const weeksArr = [...Array(52).keys()]

    const weeksNum = lifeExpectancy * 52 - parseInt(data['weeks'])
    const finalWeek = lifeExpectancy * 52

    return (
        <section>
            <p><i>Each square of dots represents 52 weeks / 1 year of your life.</i></p>
            <div className='dozen-grid'>
                {yearsArr.map((year, yearIndex) => {
                    return (
                        <DozenDisplay key={yearIndex} weeksArr={weeksArr} weeksNum={weeksNum} finalWeek={finalWeek} yearIndex={yearIndex} />
                    )
                })}
            </div>
        </section>
    )
}
