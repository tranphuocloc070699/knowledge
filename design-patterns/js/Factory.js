/* Get a object from props and return object with some new function or properties */


/* Example */
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  });
/* ------------------------------------------------------ */

const createObjectFromArray = ([key, value]) => ({
    [key]: value,
  });
/* Use case */
createObjectFromArray(["name", "John"]);
/* ------------------------------------------------------ */



