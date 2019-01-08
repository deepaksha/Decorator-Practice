function log( logMessage ) {
    // return decorator function
    return function ( target, property, descriptor ) {
        // save original value, which is method (function)
        let originalMethod = descriptor.value;
        // replace method implementation
        descriptor.value = function( ...args ) {
            console.log( '[LOG]', logMessage );
            // here, call original method
            // `this` points to the instance
            return originalMethod.call( this, ...args );
        };
        return descriptor;
    }
}
export default class User {
    constructor( firstname, lastName ) {
        this.firstname = firstname;
        this.lastName = lastName;
    }

    @log('calling getFullName method on User class')
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
}
var user = new User( 'John', 'Doe' );
console.log( user.getFullName() );