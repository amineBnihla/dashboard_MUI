import { useState } from "react";
import { Box,List,ListItem,Typography,useTheme } from "@mui/material";
import FullCalendar,{formatDate} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentDate,setCurrentDate] = useState([])
    function handleDateSelect(selectInfo){
        let title = prompt('Please enter your title for your event')

        console.log(selectInfo)
        // let calendarApi =  selectInfo.view.calendar
    }
      function handleEventClick(clickInfo) {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }
  function handleEvents(event){
    console.log(event)
   setCurrentDate(event)
  }
    return(
        <Box m={"20px"}>
          <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
          <Box display={'flex'} justifyContent={'space-between'}>
           <Box flex={'1 1 20%'} >
            <List>
                <ListItem />
            </List>
           </Box>
             <Box flex={'1 1 80%'}>
                 <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
   
          initialEvents={[ {
            id:123,
      title  : 'event1',
      start  : '2010-01-01'
    },
    {
          id:432,
      title  : 'event2',
      start  : '2010-01-05',
     
    }]} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
        //   eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
             </Box>
          </Box>
        </Box>
    )

}

export default Calendar
