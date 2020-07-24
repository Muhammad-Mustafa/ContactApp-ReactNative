import React from 'react'
import{
    View,
    SectionList,
    Text,
} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'
import contact from './contact'


// renderItems = obj => <Row name={obj.item.name} phone={obj.item.phone}  />
// renderItems = obj => <Row {...obj.item}  />
  
  const renderItems = ({item}) => <Row {...item}  />
  const renderSectionHeader = ({section}) => <Text>{section.title}</Text>
  

  const ContactList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
      const firstLetter = contact.name[0].toUpperCase()
      return {
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || []), contact],
      }
    }, {})
  
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
      data: contactsByLetter[letter],
      title: letter,
    }))
    return(
        <SectionList 
            renderItem = {renderItems} 
            renderSectionHeader={renderSectionHeader}
            sections = {sections}
            keyExtractor={contact => contact.key}
        />
    )
}

ContactList.prototype = {
    // renderItem: PropTypes.func,
    // renderSectionHeader: PropTypes.func,
    contacts: PropTypes.array,
}

export default ContactList;

