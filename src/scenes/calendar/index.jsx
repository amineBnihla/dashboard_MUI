import { useState } from "react";
import { Box,List,ListItem,ListItemText,Typography,useTheme } from "@mui/material";
import FullCalendar from '@fullcalendar/react'
 import {formatDate} from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import Header from "../../components/Header";
import { tokens } from "../../theme";
import listPlugin from '@fullcalendar/list';


const Calendar = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentDate,setCurrentDate] = useState([])
    function handleDateSelect(selected){
        let title = prompt('Please enter your title for your event')

        console.log(selected)
         let calendarApi = selected.view.calendar
          calendarApi.unselect()
         if(title){
          calendarApi.addEvent({
            id:`${selected.datestr}-${title}`,
            title,
               start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
          })
         }
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
        <Box p={"20px"} sx={{overflowY:'auto'}}>
          <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
          <Box display={'flex'} gap={'20px'} justifyContent={'space-between'}>
           <Box flex={'1 1 20%'} backgroundColor={colors.primary[400]} p={'10px'} borderRadius={'5px'} >
            <Typography variant="h5">
              Events
            </Typography>
            <List>
              {
                currentDate.map((ev)=>(
                  <ListItem
                  key={ev.id}
                  sx={{
                    backgroundColor:colors.greenAccent[500],
                    margin:"10px 0",
                    borderRadius:"2px"
                  }}
                  >
                 <ListItemText
                 primary={ev.title}
                 secondary={
                  <Typography>
                    {formatDate(ev.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                  </Typography>
                  }
                 />

                  </ListItem>

                ))
              }
            </List>
           </Box>
             <Box flex={'1 1 80%'} sx={{
              '& .fc-scroller.fc-scroller-liquid-absolute .fc-daygrid-body.fc-daygrid-body-balanced ':{
                width:'100% !important'
              },
              '& .fc .fc-scrollgrid-section, .fc .fc-scrollgrid-section table, .fc .fc-scrollgrid-section > td':{
                width:'100% !important'
              }
             }}>
                 <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
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
