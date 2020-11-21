import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {RoomConsumer, withRoomConsumer} from '../context'
import Loading from './Loading'

const RoomContainer = ({context}) => {
    const {loading, sortedRooms, rooms} = context;
    if(loading) return <Loading/>;

    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomContainer);
