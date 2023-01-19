// import css from './RenderContacts.module.css'
import PropTypes from 'prop-types';

const RenderContacts =({items, contactsDelete}) => {
  
    return(
    <div>
    <h2>Contacts </h2>
    <ul> 
      {items.map(({id, name, number}) => (
      <li
       key={id}>{name}:{number}
       <button type="button" onClick={() => contactsDelete(id)}>Delete</button>
      </li>
     ))}
     </ul>
   
   </div> 
   )}

   RenderContacts.propTypes = {
    items: PropTypes.array.isRequired,
    contactsDelete: PropTypes.func.isRequired
   }

   export default RenderContacts;