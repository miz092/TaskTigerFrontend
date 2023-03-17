import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";
import "./Modal_rounded.css";
import {render} from "react-dom";

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
        console.log(this.props);
        console.log(outsideProp);
        // console.log(this.props.props[0][0].start); //TODO: delete later
        // console.log(this.props.props[0]); //TODO: delete later
        // console.log(this.props.time[0].start); //TODO: delete later
        // console.log(this.props.time); //TODO: delete later

        this.calendarRef = React.createRef();

        this.state = {
            viewType: "Week",
            data: this.props.events,
            // data: props.props[0],
            durationBarVisible: false,
            timeRangeSelectedHandling: "Disabled", // onTimeRangeSelected: async args => {
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
                const outsideSlots = this.props.slots;
                console.log(outsideSlots);
                // const [tempSlot, setTempSlot] = useState(null);
                // const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
                // const modal = await DayPilot.Modal.text("hello",args.e.text());
                // const modal = await Modal.alert("Hello, world!");
                if (args.e.data.reserved) {
                    console.log("reserved");
                    let modifiedArray = "";
                    const modal = DayPilot.Modal.confirm(`Do you want to remove '${args.e.text()}' timeslot?`, {
                        theme: "modal_rounded", okText: "Yes", cancelText: "No"
                    }).then(function (insideArgsRemove) {
                        if (!insideArgsRemove.canceled) {
                            console.log("yes i want to remove");
                            const e = args.e;
                            e.data.backColor = "#6aa84f";
                            e.data.reserved = false;
                            dp.events.update(e);
                            // console.log(outsideProps.slots);
                            if (outsideProp.length === 1) {
                                outsideProp.setSlots([]);
                            } else {
                                let modifiedArray = outsideSlots.filter(item => item !== e.data.text);
                                console.log(modifiedArray);
                                outsideProp.setSlots([...modifiedArray]);
                            }

                            // console.log(slotsArray)
                            // let time = e.data.text;
                            // console.log(time)
                            // console.log(slotsArray);
                            // console.log(modifiedArray);
                            // outsideProps.setSlots(modifiedArray);
                            // console.log(outsideProps.slots)
                            // let modifiedArray = slotsArray.filter(item => item !== e.data.text);
                            console.log(modifiedArray);
                            // outsideProps.setSlots([]);

                            // outsideProps.setSlots(modifiedArray);
                            // console.log(outsideProps.slots)
                        } else {
                            console.log("no i dont want to remove");
                            // outsideProps.setSlots(outsideProps.slots)
                            console.log(outsideProp.slots);
                        }
                        // console.log("itt új foglalás");
                        // console.log(this.props);
                        // this.props.setSlots(this.props);
                        // outsideProps.setSlots(outsideProps)
                        // console.log(outsideProps);
                        // outsideProps.setSlots(outsideProps.slots);
                        // console.log(outsideProps.slots);
                    });
                    // console.log(outsideProps.slots);
                    // console.log(this.props.slots)
                    // console.log("itt lemondás");
                    // console.log(modifiedArrayOutside);
                    // this.props.setSlots(modifiedArrayOutside);
                    // let modifiedArray = outsideProps.slots.filter(item => item !== e.data.text);


                    // console.log(this.props);
                    // console.log(outsideProps.slots);
                    // this.props.setSlots(outsideProps.slots);
                    // this.props.setSlots(this.props);
                    // this.props.setSlots(this.props);
                } else {
                    console.log("not reserved");
                    const modal = DayPilot.Modal.confirm(`Do you reserve '${args.e.text()}' timeslot?`, {
                        theme: "modal_rounded", okText: "Yes", cancelText: "No"
                    }).then(function (insideArgs) {
                        if (!insideArgs.canceled) {
                            console.log("yes i want to reserve");
                            const e = args.e;
                            e.data.backColor = "#f1c232";
                            e.data.reserved = true;
                            dp.events.update(e);
                            console.log(outsideSlots);
                            if (outsideSlots.length === 0) {
                                outsideProp.setSlots([e.data.text]);
                            } else {
                                let slotsArray = outsideSlots;
                                console.log(slotsArray);
                                slotsArray.push(e.data.text);
                                console.log(slotsArray);
                                outsideProp.setSlots([...slotsArray]);
                                // console.log(outsideSlots);
                                // itt voltam
                            }
                        } else {
                            console.log("no i dont want to reserve");
                        }
                        // outsideProp.setSlots(outsideProp.slots);
                    });

                }
            }
        }


        // console.log(this.props);
        // console.log(this.props.events[0]);
        // this.props.setSlots(this.props.events);
        // if (this.props.slots.length === 0) {
        //     this.props.setSlots(this.props);
        // } else {
        //     this.props.setSlots(this.props.slots);
        // }


        // console.log("kint");
        // console.log(this.props.slots);
        // this.props.setSlots(this.props.slots);
        // console.log(modal);
        // this.props.setSlots(modal);
        // console.log("kint")
        // console.log(props.slots);
        // this.props.setSlots(props.slots);
    }

    get calendar() {
        return this.calendarRef.current.control;
    }
componentDidMount() {
    let events = this.props.events;
// //     const events = [
// //         {
// //             id: 1,
// //             text: "Event 1",
// //             start: "2023-03-07T10:30:00",
// //             end: "2023-03-07T13:00:00"
// //         },
// //         {
// //             id: 2,
// //             text: "Event 2",
// //             start: "2023-03-08T09:30:00",
// //             end: "2023-03-08T11:30:00",
// //             backColor: "#6aa84f"
// //         },
// //         {
// //             id: 3,
// //             text: "Event 3",
// //             start: "2023-03-08T12:00:00",
// //             end: "2023-03-08T15:00:00",
// //             backColor: "#f1c232"
// //         },
// //         {
// //             id: 4,
// //             text: "Event 4",
// //             start: "2023-03-06T11:30:00",
// //             end: "2023-03-06T14:30:00",
// //             backColor: "#cc4125"
// //         },
// //     ];
// //
    const startDate = "2023-03-12";
// //
    this.calendar.update({startDate, events});
// //
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


