import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";
import "./Modal_rounded.css";

const styles = {
    wrap: {
        display: "flex", justifyContent: "center"
    }, left: {
        marginRight: "10px"
    }, main: {
        flexGrow: "1"
    }
};

export default class Calendar extends Component {

    constructor(outsideProp) {
        super(outsideProp);

        this.calendarRef = React.createRef();

        this.state = {
            viewType: "Week",
            data: this.props.events,
            // data: props.props[0],
            durationBarVisible: false,
            timeRangeSelectedHandling: "Disabled",
            // onTimeRangeSelected: async args => {
            //     const dp = this.calendar;
            //     const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
            //     dp.clearSelection();
            //     if (!modal.result) {
            //         return;
            //     }
            //     dp.events.add({
            //         start: args.start,
            //         end: args.end,
            //         id: DayPilot.guid(),
            //         text: modal.result
            //     });
            // },
            // eventDeleteHandling: "Update",
            onEventClick: async args => {
                const dp = this.calendar;

                const outsideSlotsText = this.props.slots;
                const outsideSlotsIds = this.props.timeSlotIds;
                if (args.e.data.backColor === "") {
                    const modal = DayPilot.Modal.alert(`This is unavailable timeslot!`, {
                        theme: "modal_rounded", okText: "OK"
                    });
                }
                if (args.e.data.backColor === "#f1c232") {
                    const modal = DayPilot.Modal.confirm(`Do you want to remove '${args.e.text()}' timeslot?`, {
                        theme: "modal_rounded", okText: "Yes", cancelText: "No"
                    }).then(function (insideArgsRemove) {
                        if (!insideArgsRemove.canceled) {
                            const e = args.e;
                            e.data.backColor = "#6aa84f";
                            e.data.reserved = false;
                            dp.events.update(e);
                            if (outsideProp.length === 1) {
                                outsideProp.setSlots([]);
                            } else {
                                let modifiedArray = outsideSlotsText.filter(item => item !== e.data.text);
                                outsideProp.setSlots([...modifiedArray]);
                            }
                            if (outsideSlotsIds.length === 1) {
                                outsideProp.setTimeSlotIds([]);
                            } else {
                                let modifiedArrayIds = outsideSlotsIds.filter(item => item !== e.data.id);
                                outsideProp.setTimeSlotIds([...modifiedArrayIds]);
                            }
                        }
                    });
                }

                if (args.e.data.backColor === "#6aa84f") {
                    const modal = DayPilot.Modal.confirm(`Do you reserve '${args.e.text()}' timeslot'?'`, {
                        theme: "modal_rounded", okText: "Yes", cancelText: "No"
                    }).then(function (insideArgs) {
                        if (!insideArgs.canceled) {
                            const e = args.e;
                            e.data.backColor = "#f1c232";
                            e.data.reserved = true;
                            dp.events.update(e);
                            if (outsideSlotsText.length === 0) {
                                outsideProp.setSlots([e.data.text]);
                            } else {
                                let slotsArray = outsideSlotsText;
                                slotsArray.push(e.data.text);
                                outsideProp.setSlots([...slotsArray]);
                            }
                            if (outsideSlotsIds.length === 0) {
                                outsideProp.setTimeSlotIds([e.data.id]);
                            } else {
                                let slotsArrayIds = outsideSlotsIds;
                                slotsArrayIds.push(e.data.id);
                                outsideProp.setTimeSlotIds([...slotsArrayIds]);
                            }
                        }
                    });

                }
            }
        }
    }

    get calendar() {
        return this.calendarRef.current.control;
    }

    componentDidMount() {
        let events = this.props.events;
        const startDate = "2023-03-12";
        this.calendar.update({startDate, events});
    }

    render() {
        return (<div style={styles.main}>
                <div style={styles.wrap}>
                    <DayPilotNavigator
                        selectMode={"week"}
                        showMonths={1}
                        skipMonths={1}
                        startDate={"2023-03-12"}
                        selectionDay={"2023-03-15"}
                        events={this.props.events}
                        onTimeRangeSelected={args => {
                            this.calendar.update({
                                startDate: args.day, events: this.props.events
                            });
                        }}
                    />
                </div>
                <div style={styles.main}>
                    <DayPilotCalendar
                        {...this.state}
                        ref={this.calendarRef}
                    />
                </div>
            </div>

        );
    }
}


