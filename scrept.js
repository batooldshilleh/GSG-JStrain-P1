class Hotel {
    #minFloor
    #maxFloor
    constructor(Address,NumberOfRoomes,minFloor,maxFloor,rooms) { 
        this.Address = Address
        this.NumberOfRoomes=NumberOfRoomes
        this.#minFloor = minFloor
        this.#maxFloor = maxFloor
        this.rooms = rooms
     }

    printAdvertisemen(){
        console.log(`
        Addres ${this.Address} 
        Number of rooms ${this.NumberOfRoomes} 
        welcom😊`)
    }

    listBookedRooms(){
        const bookedRooms = this.rooms.filter(room => room.isBooked());
        console.log(`Booked rooms: ${bookedRooms.length}`);
        bookedRooms.forEach(room => console.log(`Room ${room.roomNum} on floor ${room.floorNum} is booked.`));
    }
  }

/* ------------------------------------------ */
class Room {
    #isBooked

    constructor(floorNum,roomNum,pricr,isBooked) { 
        this.floorNum = floorNum
        this.roomNum = roomNum
        this.pricr = pricr
        this.#isBooked = isBooked
     }

     printRoom(){
         console.log(`
         the room ${this.roomNum}
         in floor ${this.floorNum}
         his price ${this.pricr}$
         booked state ${this.#isBooked}`)
     }

     book(){

        this.#isBooked = true

     }

     isBooked(){
        return this.#isBooked

     }

}

/*--------------------------------------------------- */
class RoomWithView extends Room{
    constructor(floorNum,roomNum,pricr,isBooked,view,NumberOfBeds){
       super(floorNum,roomNum,pricr,isBooked)
       this.view = view
       this.NumberOfBeds = NumberOfBeds
    }
    
    

    printRoom(){
        console.log(`
        Room ${this.roomNum} on floor ${this.floorNum}:
        Price: ${this.pricr}$
        Booked: ${this.isBooked}
        View: ${this.view}
        Number of beds: ${this.NumberOfBeds}
        `)
    }
   
}

/*-------------------------------------------------------*/
class SleepingRoom extends Room{
    constructor(floorNum,roomNum,pricr,isBooked,personCapacity){
        super(floorNum,roomNum,pricr,isBooked)
        this.personCapacity = personCapacity
    }
    
    printRoom(){
        console.log(`
        Room ${this.roomNum} on floor ${this.floorNum}:
        Price: ${this.pricr}$
        Booked: ${this.isBooked}
        Person capacity: ${this.personCapacity}
        `)
    }
}

/*-------------------------------------------------------- */
const rooms = [
    new Room(2, "R1", 20, false),
    new RoomWithView(3, "RV1", 30, false, "Mountain", 2),
    new SleepingRoom(4, "SR1", 25, true, 4)
]

const h1 = new Hotel("Nablus Old City", 60, 0, 5, rooms)
h1.printAdvertisemen()

const r1 = rooms[0]
r1.printRoom()
r1.book()
r1.printRoom()

const rv1 = rooms[1]
rv1.printRoom()

const sr1 = rooms[2]
sr1.printRoom()







