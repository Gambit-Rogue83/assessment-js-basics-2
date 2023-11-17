/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a new class called `Ticket`. Make sure to call your constructor,
    and require these 3 parameters: items, orderTime, customerId.
    Additionally, set up a property called `status` that always has an
    initial value of 'queued'. Create a method on the class called
    `updateStatus`. The method should have one parameter, `newStatus`,
    which will be a string. Inside the method, set the value of
    `this.status` to be the new status that was sent in. Then console.log
    something like: 'The order for customer [CUSTOMERID] is now [STATUS].'
    Where CUSTOMERID and STATUS reference the values stored on the object.
*/

//CODE HERE

class Ticket { //new Class blueprint for future objects using Tickets
    constructor(items, orderTime, customerID){ //properties for each object made with this class
        this.items = items;
        this.orderTime = orderTime;
        this.customerID = customerID;
        this.status = 'queued'; //this is a property attributed to each object
                            //with a beginning value of 'queued'
    }
        updateStatus(newStatus) { //method to update the status past queued
            this.status = newStatus  //a string to replace 'queued'
            console.log(`The order for customer #${this.customerID} is now ${this.status}, may the force be with you`)
        }                  //the above reports back the new status for the customer indicated by their customer ID
}

/*
    Create a new instance of your class. Save it to a variable called
    `firstTicket`. You can use this sample data or make up your own:
    food ordered: pizza, bread, and soda ordered at: 7:03 PM customer: 575
*/

//CODE HERE

const firstTicket = new Ticket('lightsaber', '2:47 AM', 1)

/*
    Call the `updateStatus` method of `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE

//this is updating the customers order status by passing in the fabricating value
firstTicket.updateStatus('fabricating')
