import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
const localizer = BigCalendar.momentLocalizer(moment)

const now = new Date()


const propTypes = {}


const Selectable = (props) => {
  return (

    <BigCalendar
      selectable
      localizer={localizer}
      events={props.data}
      defaultView={BigCalendar.Views.MONTH}
      scrollToTime={new Date(1970, 1, 1, 6)}
      defaultDate={now}
      onSelectEvent={props.handleDelete}
      onSelectSlot={props.handleSelect}
    />

  )
}


Selectable.propTypes = propTypes

export default Selectable
